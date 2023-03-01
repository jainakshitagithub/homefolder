const amqp = require('amqplib')

async function connect(){
    try{
        let queueName = "taskQueue"

const connection  = await amqp.connect('amqp://localhost')
const channel =await connection.createChannel()
channel.prefetch(1)
const result = await channel.assertQueue(queueName , {durable : true})
 channel.consume(queueName , msg=>{
    let secs = msg.content.toString().split('.').length -1
    console.log(`Received msg => ${msg.content.toString()}`)
    setTimeout(function() {
        console.log(" Done resizing the image");
        console.log(secs)
        channel.ack(msg)
      }, secs * 1000);
})
    }
    catch(e)
    {
        console.log(e)
    }
}
connect()