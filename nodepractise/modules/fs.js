const fs = require('fs')


//Synchronus way of doing crud operations
fs.writeFileSync('read.txt' , "hello this is akshita jain");
// fs.writeFileSync('read.txt' , "hello this is akshita jain");///will not work
fs.appendFileSync('read.txt' , "  yeah correct!")

const r = fs.readFileSync('read.txt').toString()
console.log(r)

fs.renameSync('read.txt' , "aksh.txt")
// const r = fs.readFileSync('read.txt')
// console.log(r.toString())

//Asynchronus way

fs.writeFile('read.txt','asynchronus',()=>{
    console.log('done')
})

fs.appendFile('read.txt' , ' way of doing and performing the crud operations' , ()=>{
    console.log('done')
})

fs.readFile('read.txt' , 'utf-8' , (err,date)=>{
    console.log(date)
})
fs.rename('read.txt' , 'aksh2.txt' , ()=>{
    console.log('done renaming')
})