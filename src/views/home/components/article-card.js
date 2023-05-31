/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import dayjs from 'dayjs'
import { CalendarOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
const categoryIconUrl = "data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM20 11H4v8h16v-8zm0-2V7h-8.414l-2-2H4v4h16z'/%3E%3C/svg%3E"
const tagIconUrl = "data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m10.9 2.1l9.899 1.415l1.414 9.9l-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485l7.778-7.778l-1.06-7.425l-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829a2 2 0 0 1-2.83 2.829z'/%3E%3C/svg%3E"

export default function ArticleCard(props) {
  const { article } = props
  return (
    <div className='article-card'>
      <Link to={'/article/' + `${article.id}`}><div className='title-link'>{article.article_name}</div></Link>
      <div className='time'>
        <CalendarOutlined/>
        <span>{dayjs(article.create_time).format('YYYY-MM-DD')}</span>
      </div>
      <div className='summary'>{article.summary}</div>
      <div className='article-card-bottom'>
        <div className='article-card-bottom--left'>
          {article.categories.map((item, index) => {
            return (
              <span key={index}>
                <img src={categoryIconUrl}></img>
                <span>{item.categoryName}</span>
              </span>
            )
          })}
        </div>
        <div className='article-card-bottom--right'>
          {article.tags.map((item, index) => {
            return (
              <span>
                <img src={tagIconUrl}></img>
                <span key={index}>{item.tagName}</span>
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
