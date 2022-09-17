// import { AMQPClient } from '@cloudamqp/amqp-client'
const lib = require('@cloudamqp/amqp-client')

const AMQP_HOST = process.env.AMQP_HOST || 'demo:demo@localhost:5672'

async function sendNTimes(n) {
  try {
    const amqp = new lib.AMQPClient(`amqp://${AMQP_HOST}`)
    const conn = await amqp.connect()
    const ch = await conn.channel()
    const q = await ch.queue("example")

    for (let i=0; i<n; i++) {
      await q.publish(`MESSAGE ${i}`, {deliveryMode: 2})
      console.log(`Message sent #${i}`)
      // await new Promise(resolve => setTimeout(resolve, 200)); // a.k.a sleep(2000)
    }

    await conn.close()
  } catch (e) {
    console.error("ERROR", e)
    e.connection.close()
  }
}

sendNTimes(9999999999)
