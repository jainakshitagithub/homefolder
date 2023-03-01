const amqp = require('amqplib')

async function connect(){
  try{
    let args = process.argv.slice(2)
    let logs = args[0]
    let msg = args[1] || "Hello Akshita Jain"
    let exchangeName = "direct_logs"
    const connection =await amqp.connect('amqp://localhost')
    const channel = await connection.createChannel()
    const response = await channel.assertExchange(exchangeName , "direct" , {durable:false})
    await channel.publish(exchangeName,logs , Buffer.from(msg))
    console.log(`Routing Key => ${logs} and msg => ${msg} `)
  }
  catch(e)
  {
      console.log(e)
  }
}
connect()