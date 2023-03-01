const amqp = require('amqplib')

async function connect()
{
    try{
        let exchangeName = "logs"
        let msg = process.argv.slice(2).join(' ') || 'Hello world'
const connection = await amqp.connect('amqp://localhost')
const channel = await connection.createChannel()
const result = await channel.assertExchange(exchangeName , 'fanout')
const response = await channel.publish(exchangeName , '' , Buffer.from(msg))
console.log(`Sent=>${msg}`)
    }
    catch(e)
    {
        console.log(e)
    }
}
connect()