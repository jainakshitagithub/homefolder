const amqp = require('amqplib')

async function connect()
{ 
    try{
let args = process.argv.slice(2)
let logs = args[0]
let msg = args[1] || 'Hello Akshita jain'
let exchangeName = 'topic_logs'
let connection = await amqp.connect('amqp://localhost')
let channel = await connection.createChannel()
let response = await channel.assertExchange(exchangeName , 'topic' , {durable : false})
await channel.publish(exchangeName , logs , Buffer.from(msg))
console.log(`Routing Key => ${logs} and msg => ${msg} `)
    }
    catch(e)
    {
        console.log(e)
    }
}
connect()