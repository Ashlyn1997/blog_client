import { registerShape, Chart, Axis, Tooltip, Coord, Polygon } from 'viser-react'
import * as React from 'react'
import { getCommitJson } from 'utils/api'

registerShape('polygon', 'boundary-polygon', {
  draw(cfg, container) {
    if (cfg.points && cfg.points.length) {
      const attrs = {
        stroke: '#fff',
        lineWidth: 1,
        fill: cfg.color,
        fillOpacity: cfg.opacity,
      }
      const points = cfg.points
      const path = [
        ['M', points[0].x, points[0].y],
        ['L', points[1].x, points[1].y],
        ['L', points[2].x, points[2].y],
        ['L', points[3].x, points[3].y],
        ['Z']
      ]
      attrs.path = this.parsePath(path)
      const polygon = container.addShape('path', {
        attrs
      })

      if (cfg.origin._origin.lastWeek) {
        const linePath = [
          ['M', points[2].x, points[2].y],
          ['L', points[3].x, points[3].y],
        ]
        // 最后一周的多边形添加右侧边框
        container.addShape('path', {
          zIndex: 1,
          attrs: {
            path: this.parsePath(linePath),
            lineWidth: 1,
            stroke: '#fff'
          }
        })
        if (cfg.origin._origin.lastDay) {
          container.addShape('path', {
            zIndex: 1,
            attrs: {
              path: this.parsePath([
                ['M', points[1].x, points[1].y],
                ['L', points[2].x, points[2].y],
              ]),
              lineWidth: 1,
              stroke: '#fff'
            }
          })
        }
      }
      container.sort()
      return polygon
    }
  }
})

const scale = [{
  dataKey: 'day',
  type: 'cat',
  values: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
}, {
  dataKey: 'week',
  type: 'cat'
}, {
  dataKey: 'commits',
  sync: true
}]

const axis1Opts = {
  dataKey: 'week',
  position: 'top',
  tickLine: null,
  line: null,
  label: {
    offset: 12,
    textStyle: {
      fontSize: 12,
      fill: '#666',
      textBaseline: 'top'
    },
    formatter: val => {
      if (val === '2') {
        return 'MAY'
      } else if (val === '6') {
        return 'JUN'
      } else if (val === '10') {
        return 'JUL'
      } else if (val === '15') {
        return 'AUG'
      } else if (val === '19') {
        return 'SEP'
      } else if (val === '24') {
        return 'OCT'
      }
      return ''
    }
  }
}

const axis2Opts = {
  dataKey: 'day',
  grid: null,
}

const tooltipOpts = {
  title: 'date',
}

export default class ContributionChart extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    getCommitJson().then(data => {
      this.setState({ data })
    })
  }
  render() {
    const { data } = this.state
    return (
      <div className='chart-wrapper'>
        <Chart forceFit height={300} data={data} scale={scale}>
          <Tooltip {...tooltipOpts} />
          <Axis {...axis1Opts}/>
          <Axis {...axis2Opts}/>
          <Coord type='rect' direction='TL'/>
          <Polygon color={['commits', '#BAE7FF-#1890FF-#0050B3']} position='week*day*date' shape='boundary-polygon'/>
        </Chart>
      </div>
    )
  }
}

