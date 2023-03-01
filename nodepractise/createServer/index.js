const http = require('http')

const server = http.createServer((req,res)=>{

    res.end('hello world by node js')
})

server.listen('3000' , '127.0.0.1' , ()=>{
    console.log('App listening to the port')
})