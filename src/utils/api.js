import axios from './axios.js'

export const getTagList = () => {
  return axios.get('/tag/all')
}

export const getArticleList = () => {
  return axios.get('/article/page')
}

export const getArticleDetail = id => {
  return axios.get(`/article/detail?id=${id}`)
}

export const getCommitJson = () => {
  return axios.get('https://gw.alipayobjects.com/os/antvdemo/assets/data/github-commit.json')
}
