import React from 'react'
import SiderBar from 'views/home/components/sider-bar'
import ReactMarkdown from 'react-markdown'
// import 'github-markdown-css'
import '../../assets/style/markdown.css'
import remarkGfm from 'remark-gfm' // 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from 'rehype-raw'// 解析标签，支持html语法
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter' // 代码高亮
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism' // 高亮的主题，还有很多别的主题，可以自行选择

function About() {
  const article = {
    article_name: '关于我',
    article_text: '## About Me\n始终相信万事皆美好，人间皆有趣，欢迎来到tutu的碎碎念！\n\n> 首先，本人是一个妥妥的学渣！于2022年毕业，正在向成为合格的前端工程师道路上前进！目前掌握技能有限，正在逐步学习中......希望各位看到的友友们提供一点建议，共同进步，其他有趣的事情也欢迎大家跟本人探讨哦！\n\n联系方式如下：\n* 邮箱\n* github\n* 掘金\n\n梦想是养只小加菲！\n\n\n\n'

  }
  return (
    <div className='main-container'>
      <SiderBar className='sider-bar-on' />
      <div className='article-content-wrapper'>
        <div className='article-content'>
          <div className='article-content-title'>{article?.article_name}</div>
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
      </div>
    </div>
  )
}

export default About
