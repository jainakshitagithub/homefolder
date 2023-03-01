const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res)=>{

//  const data =    fs.readFileSync('api.json','utf-8')
//  const json = JSON.parse(data)

if(req.url == "/")
{
    res.end('HOME PAGE')
}
else if(req.url == "/contact")

{
    res.end('contact PAGE')
}
else if(req.url == "/about")
{
    res.end('about PAGE')
}
else if(req.url == "/api")
{
 
    fs.readFile('api.json' , 'utf-8' , (err,data)=>{
        // const json = JSON.parse(data)
        res.end(data)
    })
        // res.end('api')
    
}
else if(req.url == "/services")
{
    res.end('services PAGE')
}
else{
    res.writeHead(404 , {'content-type' : 'text/html'} )
    res.end('<h1>404 page</h1>')
}

})

server.listen('3000' , '127.0.0.1' , ()=>{
    console.log('App listening to the port')
})