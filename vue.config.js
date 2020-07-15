const mockdata = require('./mock/index.json');

module.exports={
  devServer: {
    port: 8080,
    before(app){
      app.get('/mock/index.json',(req, res)=>{
        res.json(mockdata);
      })
    },
    proxy: {
      "/api": {
        target: "http://localhost:8080", //设置调用的接口域名和端口
        changeOrigin: true, //是否跨域
        ws:true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}


// module.exports = {
//   devServer: {
// 		port: 8080,
// 		host: "localhost",
// 		https: false,
// 		// 自动启动浏览器
// 		open: false,
// 		p
// 	}
// }