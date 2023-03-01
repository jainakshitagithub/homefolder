const amqp = require('amqplib')

function fibonacci(n) {
    if (n == 0 || n == 1)
      return n;
    else
      return fibonacci(n - 1) + fibonacci(n - 2);
  }


async function connect(){
    try{
        let queueName = "rpc_queue"
const connection = await amqp.connect('amqp://localhost')
const channel = await connection.createChannel()
await channel.assertQueue(queueName , {durable : false})
channel.prefetch(1)
channel.consume(queueName , async(msg)=>{
    let n = parseInt(msg.content.toString())
console.log(n)
let fn = fibonacci(n)
    await channel.sendToQueue(msg.properties.replyTo , Buffer.from(JSON.stringify(fn)) , {
        correlationId : msg.properties.correlationId
    })
})
    }
    catch(e){
        console.log(e)
    }
}
connect()