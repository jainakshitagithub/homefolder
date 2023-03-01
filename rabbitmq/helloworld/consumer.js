const amqp = require("amqplib");

async function connect() {
  try {
    let connection = await amqp.connect("amqp://localhost");
      let channel = await connection.createChannel();
      let queueName = "jobs";
      let msg = "Hello world";
      let result = await channel.assertQueue(queueName , {durable:false});
      console.log(result , "result");
      await channel.consume(
        queueName,
        (msg) => {
          console.log(`Recieved => ${msg.content.toString()}`);
        },
        {
          noAck: true,
        }
      );
  } catch (err) {
    console.log(err);
  }
}
connect();
