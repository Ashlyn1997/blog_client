import React, { useEffect, useState } from 'react'
import SiderBar from 'views/home/components/sider-bar'
import dayjs from 'dayjs'
import './index.less'
import { getArticleDetail } from 'utils/api'
import ReactMarkdown from 'react-markdown'
// import 'github-markdown-css'
import '../../assets/style/markdown.css'
import remarkGfm from 'remark-gfm' // 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from 'rehype-raw'// 解析标签，支持html语法
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter' // 代码高亮
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism' // 高亮的主题，还有很多别的主题，可以自行选择
import { CalendarOutlined } from '@ant-design/icons'
const tagIconUrl = "data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m10.9 2.1l9.899 1.415l1.414 9.9l-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485l7.778-7.778l-1.06-7.425l-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829a2 2 0 0 1-2.83 2.829z'/%3E%3C/svg%3E"
const categoryIconUrl = "data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM20 11H4v8h16v-8zm0-2V7h-8.414l-2-2H4v4h16z'/%3E%3C/svg%3E"

function Article(props) {
  const { articleId } = props.match.params
  const [article, setArticle] = useState({})
  useEffect(async () => {
    const { data } = await getArticleDetail(articleId)
    setArticle(data)
  }, [])
  return (
    <div className='main-container'>
      <SiderBar className='sider-bar-on' useSource='article' articleContent={article?.article_text}></SiderBar>
      <div className='article-content-wrapper'>
        <div className='article-content'>
          <div className='article-content-title'>{article?.article_name}</div>
          <div className='article-content-time'>
            <CalendarOutlined/>
            <span>{dayjs(article.create_time).format('YYYY-MM-DD')}</span>
          </div>
          <div className='article-content-other'>
            <div className='article-category'>
              {article?.categories?.map((item, index) => {
                return (
                  <span key={index}>
                    <img src={categoryIconUrl} alt='' />
                    <span>{item.categoryName}</span>
                  </span>
                )
              })}
            </div>
            &nbsp;-&nbsp;
            <div className='article-tag'>
              {article?.tags?.map((item, index) => {
                return (
                  <span>
                    <img src={tagIconUrl} alt='' />
                    <span key={index}>{item.tagName}</span>
                  </span>
                )
              })}
            </div>
          </div>
          <ReactMarkdown
            className='markdown-body'
            children={article?.article_text}
            remarkPlugins={[remarkGfm, { singleTilde: false }]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={tomorrow}
                    language={match[1]}
                    PreTag='div'
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </div>
        <div className='article-footer'>124556</div>
      </div>
    </div>
  )
}

export default Article
