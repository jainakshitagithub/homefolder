const fs = require('fs')

const rstream = fs.createReadStream('page.txt' , 'utf-8')
const wstream = fs.createWriteStream('/output.txt')

rstream.on('data',(chunk)=>{
    const result = wstream.write(chunk)
    if(!result)
    {
        console.log('backpressure')
        rstream.pause()
    }
})
rstream.on('error',(err)=>{
    console.log('an err occurred' , err)
})
rstream.on('end',()=>{
    wstream.end()
})

wstream.on('drain' , ()=>{
console.log('drained')
rstream.resume()
})

wstream.on('close',()=>{
    process.stdout.write(
console.log('file copied!')
    )
})


