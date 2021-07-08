  
const path = require('path')
const httpServer = require('http-server')

const server = httpServer.createServer({
  root: path.resolve(__dirname, './')
})

server.listen(8888)

// 终端打印如下信息
console.log('Server running at http://localhost:8888/');