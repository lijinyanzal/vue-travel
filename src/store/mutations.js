
export default {
  changeCity(state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch(e) {
      console.log(e)
    }
    
  },
  getDetailInfo(state, res) {
    if (res.data) {
      res = res.data
      if (res && res.ret) {
        const data = res.data
        state.detailInfo = data
      }
    }
  }
}