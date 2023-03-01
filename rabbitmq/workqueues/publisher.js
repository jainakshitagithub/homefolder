const amqp = require('amqplib')

async function connect(){
    try{
        let queueName = "taskQueue"
        let msg = process.argv.slice(2).join(' ') || 'Hello world'
const connection = await amqp.connect("amqp://localhost")
const channel = await connection.createChannel()
const result = await channel.assertQueue(queueName , {durable : true})
const response = await channel.sendToQueue(queueName , Buffer.from(msg) , {persistent : true})
console.log(`Sent message =>${msg}`)
    }
    catch(e)
    {
        console.log(e)
    }
}
connect()