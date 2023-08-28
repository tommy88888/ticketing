import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';
import mongoose from 'mongoose';

console.clear();

const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

stan.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const publisher = new TicketCreatedPublisher(stan);
  const id = new mongoose.Types.ObjectId().toHexString();
  try {
    await publisher.publish({
      id,
      title: 'concert',
      price: 20,
    });
  } catch (err) {
    console.error(err);
  }

  // const data = JSON.stringify({
  //   id: '123',
  //   title: 'my concert ',
  //   price: 20,
  // });

  // stan.publish('ticket:created', data, () => {
  //   console.log('Even published');
  // });
});
