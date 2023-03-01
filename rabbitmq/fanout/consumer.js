const amqp = require('amqplib')

async function connect(){
    try{
        let exchangeName = "logs"
const connection  = await amqp.connect('amqp://localhost')
const channel =await connection.createChannel()
const result = await channel.assertExchange(exchangeName , 'fanout')
const q = await channel.assertQueue('' , {exclusive : true})
console.log(`queue = > ${q.queue}`)
await channel.bindQueue(q.queue , exchangeName , '')
await channel.consume(q.queue , msg=>{
     if(msg)
    console.log( msg.content.toString())
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