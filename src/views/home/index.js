import React, { useState } from 'react'
import Banner from './components/banner'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import './index.less'
import SiderBar from './components/sider-bar'
const arr = [
  ['2.96026rem', '47.3672px'],
  ['1.95833rem', '31.3359px'],
  ['3.22504rem', '51.6016px'],
  ['2.30515rem', '36.8828px'],
  ['1.9071rem', '30.5156px'],
  ['3.17376rem', '50.7812px']
]

export default function Home() {
  const [showStatus, setShowStatus] = useState(false)
  return (
    <div className='main-container'>
      <a className='menu-btn' onClick={() => { setShowStatus(!showStatus) }}>{showStatus ? <CloseOutlined /> : <MenuOutlined />}</a>
      <SiderBar className={showStatus ? 'sider-bar-on' : 'sider-bar-off'}></SiderBar>
      <div className={`main-content ${showStatus ? 'content-translate-on' : 'content-translate-off'} `}>
        <Banner />
        <div> 1234243545</div>
      </div>
    </div>
  )
}

