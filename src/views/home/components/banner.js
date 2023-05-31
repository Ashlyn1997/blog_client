import React from 'react'
import { DownOutlined } from '@ant-design/icons'
const arr = [
  ['2.96026rem', '47.3672px'],
  ['1.95833rem', '31.3359px'],
  ['3.22504rem', '51.6016px'],
  ['2.30515rem', '36.8828px'],
  ['1.9071rem', '30.5156px'],
  ['3.17376rem', '50.7812px']
]

export default function Banner() {
  const goDown = () => {
    window.scrollTo(0, document.getElementsByClassName('.banner').clientHeight)
  }
  return (
    <div className='banner'>
      <div className='banner-line vertical-line-top'></div>
      <div className='banner-char-container'>
        <div className='char-box char-left' style={{ '--banner-char-size': arr[0][0], '--banner-empty-border-size': arr[0][1]}}>
          <span className='char'>图</span>
        </div>
        <div className='char-box char-right' style={{ '--banner-char-size': arr[1][0], '--banner-empty-border-size': arr[1][1]}}>
          <span className='char'>图</span>
        </div>
        <div className='char-box char-left' style={{ '--banner-char-size': arr[2][0], '--banner-empty-border-size': arr[2][1]}}>
          <span className='char'>的</span>
        </div>
        <div className='char-box char-right' style={{ '--banner-char-size': arr[3][0], '--banner-empty-border-size': arr[3][1]}}>
          <span className='char'>碎</span>
        </div>
        <div className='char-box char-left' style={{ '--banner-char-size': arr[4][0], '--banner-empty-border-size': arr[4][1]}}>
          <span className='char'>碎</span>
        </div>
        <div className='char-box char-right' style={{ '--banner-char-size': arr[5][0], '--banner-empty-border-size': arr[5][1]}}>
          <span className='char'>念</span>
        </div>
      </div>
      <div className='banner-line vertical-line-bottom'></div>
      <div className='cloud'>
        <svg className='waves' viewBox='0 24 150 28' preserveAspectRatio='none' shapeRendering='auto'>
          <defs>
            <path id='gentle-wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' fill='white'></path>
          </defs>
          <g className='parallax'>
            <use xlinkHref='#gentle-wave' x='48' y='0' opacity='0.7'></use>
            <use xlinkHref='#gentle-wave' x='48' y='3' opacity='0.5'></use>
            <use xlinkHref='#gentle-wave' x='48' y='5' opacity='0.3'></use>
            <use xlinkHref='#gentle-wave' x='48' y='7'></use>
          </g>
        </svg>
      </div>
      <a id='goDown' onClick={goDown}><DownOutlined /></a>
    </div>
  )
}

