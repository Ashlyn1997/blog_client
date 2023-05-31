/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ArticleMenu from '../../article/components/article-menu'
import { HomeOutlined, FolderOpenOutlined, InboxOutlined, TagOutlined, SmileOutlined, GithubOutlined } from '@ant-design/icons'

export default function SiderBar(props) {
  const [status, setStatus] = useState(true)
  const handleClick = type => {
    if (type === 'nav' && !status) {
      setStatus(!status)
    } else if (type === 'dir' && status) {
      setStatus(!status)
    }
  }
  useEffect(() => {
    if (props.useSource === 'article') setStatus(!status)
  }, [])
  return (
    <div className={'sider-bar ' + props.className}>
      {
        props.useSource === 'article' ? (
          <ul className='sider-bar-nav'>
            <li onClick={() => handleClick('dir')} className={!status ? 'nav-item-active' : ''}>目录</li>
            <li onClick={() => handleClick('nav')} className={status ? 'nav-item-active' : ''}>导航</li>
          </ul>
        ) : (
          <div style={{height: '72px'}}></div>
        )
      }
      {
        status ? (
          <div>
            <div className='site-info'>
              <Link className='site-author-avatar' to='/about'>
                <img
                  src='https://p3-passport.byteacctimg.com/img/user-avatar/d122c04b55c04f1e56d2c811cea4d4c0~300x300.image'></img>
              </Link>
              <div className='site-author-name'>
                <Link className='site-author-name' to='/about'>Ashlyn Tu</Link>
              </div>
              <div className='site-title'>图图的碎碎念</div>
              <div className='site-subtitle'>不以物喜，不以己悲</div>
            </div>
            <div className='site-nav'>
              <Link to='/home' className='nav-btn site-link-item'><HomeOutlined /></Link>
              <Link to='/archives' className='site-link-item'><InboxOutlined /><div className='site-link-item-count'>88</div></Link>
              <Link to='/categories' className='site-link-item'><FolderOpenOutlined /><div className='site-link-item-count'>20</div></Link>
              <Link to='/tags' className='site-link-item'><TagOutlined /><div className='site-link-item-count'>40</div></Link>
              <Link to='/about' className='nav-btn site-link-item'><SmileOutlined /></Link>
            </div>
            <hr></hr>
            <div className='links-of--author'>
              <GithubOutlined />
            </div>
          </div>
        ) : <ArticleMenu {...props} />
      }
    </div>
  )
}
