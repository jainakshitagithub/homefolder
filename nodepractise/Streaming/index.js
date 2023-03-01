//1 way by reading file through fs

//2nd way
const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res)=>{
    const rstream = fs.createReadStream('page.txt')
//     rstream.on('data' , (chunk)=>{
// res.write(chunk)
//     })
//     rstream.on('end' , (chunk)=>{
// res.end(chunk)
//     })
//     rstream.on('error' , (err)=>{
//         res.end('file not found')
//     })
// })

//3rd way
rstream.pipe(res)
})

server.listen('3000' , '127.0.0.1' , ()=>{
    console.log('App listening to the port')
})
