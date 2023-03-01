const amqp = require("amqplib");
const { v4: uuidv4 } = require("uuid");
let uuid = uuidv4();
async function connect() {
  try {
    let args = process.argv.slice(2);
    if (!args[0]) {
      process.exit(1);
    } else {
      num = args[0];
    }
    let fn = parseInt(num);
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    const q = await channel.assertQueue("", { exclusive: true });
console.log(`Requesting fib ${fn}`)
    await channel.sendToQueue("rpc_queue", Buffer.from(JSON.stringify(fn)), {
      replyTo: q.queue,
      correlationId: uuid,
    });
    await channel.consume(q.queue, async (msg) => {
      try {
        if (msg.properties.correlationId == uuid) {
          console.log(parseInt(msg.content.toString()));
          setTimeout(() => {
              connection.close()
              process.exit(0)
          }, 1000);
        }
      } catch (e) {
        console.log(e);
      }
    });
  } catch (e) {
    console.log(e);
  }
}
connect()
