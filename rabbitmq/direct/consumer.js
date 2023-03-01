const amqp = require('amqplib')

async function connect(){
    try{
        let args = process.argv
        let exchangeName = "direct_logs"
let connection =await amqp.connect("amqp://localhost")
let channel = await connection.createChannel()
let response = await channel.assertExchange(exchangeName , "direct" , {durable:false})
let q = await channel.assertQueue('' , {exclusive : true})
console.log(`Waiting for messages in queue ${q.queue}`)
args.forEach((severity)=>{
     channel.bindQueue(q.queue , exchangeName , severity)
}
)
await channel.consume(q.queue , msg=>{
    console.log(`The field name is ${msg.fields.routingKey} and msg is ${msg.content.toString()}`)
},{
    noAck : true
})
    }
    catch(e)
    {
        console.log(e)
    }
}
connect()