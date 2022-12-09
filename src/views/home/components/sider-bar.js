/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

export default function SiderBar(props) {
  return (
    <div className={'sider-bar ' + props.className}>
      <div className='site-info'>
        <Link className='site-author-avatar' to='/about'>
          <img
            src='https://p3-passport.byteacctimg.com/img/user-avatar/d122c04b55c04f1e56d2c811cea4d4c0~300x300.image'></img>
        </Link>
        <div className='site-author-name'>
          <Link className='site-author-name' to='/about'>About图图</Link>
        </div>
        <div className='site-title'>图图的垃圾堆</div>
        <div className='site-subtitle'>All at sea.</div>
        <div className='site-description'>希望成为一个有趣的人</div>
      </div>
    </div>
  )
}
