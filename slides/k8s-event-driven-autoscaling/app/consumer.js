// import { AMQPClient } from '@cloudamqp/amqp-client'
const client = require('@cloudamqp/amqp-client')

const AMQP_HOST = process.env.AMQP_HOST

async function run() {
  try {
    const amqp = new client.AMQPClient(`amqp://${AMQP_HOST}`)
    const conn = await amqp.connect()
    const ch = await conn.channel()
    const q = await ch.queue("example")
    const consumer = await q.subscribe({noAck: true}, async (msg) => {
      console.log(msg.bodyToString())
      // await new Promise(resolve => setTimeout(resolve, 2000)); // a.k.a sleep(2000)
      // await consumer.cancel() // Stops the consumer, no more messages will be delivered to this consumer
    })
    await consumer.wait() // will block until consumer is canceled or throw an error if server closed channel/connection
    await conn.close()
  } catch (e) {
    console.error("ERROR", e)
    e.connection.close()
    setTimeout(run, 1000) // will try to reconnect in 1s
  }
}

run()
