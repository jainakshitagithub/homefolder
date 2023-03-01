const amqp = require('amqplib')

async function connect(){
    try{
const args = process.argv
let exchangeName = 'topic_logs'
let connection = await amqp.connect('amqp://localhost')
let channel =await connection.createChannel()
await channel.assertExchange(exchangeName , "topic" , {durable : false})
let q = await channel.assertQueue('' , {exclusive : true})
console.log(`Waiting for queue to get message ${q.queue}`)
args.forEach((severity)=>{
channel.bindQueue(q.queue , exchangeName , severity)
})
await channel.consume(q.queue , (msg)=>{
    console.log(`Msg => ${msg.content.toString()} and field => ${msg.fields.routingKey}`)
},{
    noAck : true
})
    }
    catch(e){
        console.log(e)
    }
}
connect()