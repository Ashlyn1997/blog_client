import React from 'react'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

function ArticleMenu(props) {
  return (
    <div className='nav-menu'>
      <h2>文章目录</h2>
      <MarkNav
        className='article-menu'
        source={props.articleContent}
        headingTopOffset={80}
        declarative={true}
        ordered={false}
      />
    </div>
  )
}

export default ArticleMenu
