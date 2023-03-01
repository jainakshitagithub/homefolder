const fs = require('fs')

const rstream = fs.createReadStream('page.txt' , 'utf-8')

rstream.on('data',(chunk)=>{
    console.log(chunk.length)
})

rstream.on('end',()=>{
    console.log('!done')
})

rstream.on('error',(err)=>{
    console.log('an err occurred' , err)
})

rstream.pause()
// this is non-flowing mode , in which you have to ask the data to read
process.stdin.on('data',(chunk)=>{
    // if(chunk.toString().trim() === 'finish')
    // {
    //     rstream.resume()
    // }
    rstream.read()
    
    // let text = chunk.toString().trim()
    // console.log(text)
}) 