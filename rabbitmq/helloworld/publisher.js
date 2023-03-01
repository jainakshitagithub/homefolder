const amqp = require("amqplib");

const msg = { number: 19 };
async function connect() {
  try {
  let connection = await amqp.connect('amqp://localhost')
  let queueName = "jobs"
  let msg = "Hello world"
      let channel = await connection.createChannel();
       await channel.assertQueue(queueName , {durable : false})
      await channel.sendToQueue(queueName , Buffer.from(msg))
     console.log(`Job sent successfully => ${msg}`)
setTimeout(() => {
  connection.close()
}, 1000);
  
  } catch (err) {
    console.log(err);
  }
}
connect();
