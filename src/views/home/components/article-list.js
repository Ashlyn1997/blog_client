import React from 'react'
import ArticleCard from './article-card'

export default function ArticleList(props) {
  return (
    <div className='article-list'>
      {props.articleList.map((item, index) => {
        return (
          <ArticleCard key={index} article={item} />
        )
      })}
    </div>
  )
}
