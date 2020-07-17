import axios from 'axios'

export default {
  getDetailInfo({commit}) {
    axios.get('/api/mock/detail.json')
      .then(res => {
        commit('getDetailInfo', res)
      })
      .catch(err => {
        console.log(err)
      })
  },


}