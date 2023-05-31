import React from 'react'
import SiderBar from 'views/home/components/sider-bar'
import ContributionChart from 'views/components/contributionChart'
import './index.less'

export default function Archives() {
  return (
    <div className='main-container'>
      <SiderBar className='sider-bar-on' />
      <div className='content-wrapper'>
        <h3>文章归档统计</h3>
        <ContributionChart />
      </div>
    </div>
  )
}
