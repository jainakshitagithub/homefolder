const EventEmitter = require('events') 

const event = new EventEmitter()

event.on('sayname',()=>{
    console.log('akshita jain')
})
event.on('sayname',()=>{
    console.log('atul jain')
})
event.on('sayname',()=>{
    console.log('gagan jain')
})
event.on('sayname',()=>{
    console.log('ishita jain')
})
event.on('sayname',()=>{
    console.log('arpita jain')
})
event.on('result',(a,b)=>{
    console.log(a+b)
})

event.emit('sayname' )
event.emit('result' , 3 , 2)