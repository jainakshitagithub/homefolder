const amqp = require('amqplib')

async function connect(){
    try{
        let exchangeName = 'headers_logs'
let connection =await amqp.connect('amqp://localhost')
let channel = await connection.createChannel()
await channel.assertExchange(exchangeName , 'headers' , {durable : false})
let q = await channel.assertQueue('' , {exclusive : true})
console.log(`Waiting for queue => ${q.queue}`)
await channel.bindQueue(q.queue , exchangeName , '' , {"account" : "new" , "method" : "facebook" ,"x-match" : 'amy' })
await channel.consume(q.queue , async(msg)=>{
    try{
   console.log( `msg => ${msg.content.toString()} , header=> ${JSON.stringify(msg.properties.headers)}`)
}
catch(e){
    console.log(e)
}
},{
    noAck:true
})
    }
    catch(e)
    {
console.log(e)
    }
}
connect()