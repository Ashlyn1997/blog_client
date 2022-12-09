import axios from './axios.js'

export const getTagList = () => {
  return axios.get('/tag/list/all')
}
