const amqp = require('amqplib')

async function connect(){
    try{
        let args = process.argv.slice(2)
        let msg = args[0] || 'Hello akshita'
        let exchangeName = 'headers_logs'
const connection = await amqp.connect('amqp://localhost')
const channel = await connection.createChannel()
await channel.assertExchange(exchangeName , 'headers' , {durable : false})
await channel.publish(exchangeName , '' ,Buffer.from(msg) , {headers: {account : "new" , method : "google"}})
console.log(`Sent => ${msg}`)
setTimeout(() => {
    connection.close()
    process.exit(0)
}, 500);
    }
    catch(e)
    {
        console.log(e)
    }
}
connect()