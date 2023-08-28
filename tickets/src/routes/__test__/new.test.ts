import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import { natsWrapper } from '../../nats-wrapper';

it('has a route handler listening to /api/tickets for post requests', async () => {
  const res = await request(app).post('/api/tickets').send({});

  expect(res.status).not.toEqual(404);
});

it('can only accessed if the user is signed in', async () => {
  // const res =
  await request(app).post('/api/tickets').send({}).expect(401);

  // expect(res.status).toEqual(401);
});

it('returns a status other than 401 if user is signed in', async () => {
  const cookie = global.signin();
  const res = await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({});

  // console.log(res.status, cookie);

  expect(res.status).not.toEqual(401);
});

it('returns an error if an invalid title is provided', async () => {
  const cookie = global.signin();
  await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({
      title: '',
      price: 10,
    })
    .expect(400);

  await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({
      price: 10,
    })
    .expect(400);
});

it('return an error if an invalid price is provided', async () => {
  const cookie = global.signin();
  await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({
      title: 'blahBlah',
      price: -10,
    })
    .expect(400);

  await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({
      title: 'blahBlah',
    })
    .expect(400);
});

it('creates a ticket with valid inputs', async () => {
  const cookie = global.signin();
  // add in a check to make sure a ticket was saved
  let tickets = await Ticket.find({});

  expect(tickets.length).toEqual(0);

  const title = 'blahBlah';

  await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({
      title: 'blahBlah',
      price: 20,
    })
    .expect(201);

  tickets = await Ticket.find({});
  expect(tickets.length).toEqual(1);
  expect(tickets[0].price).toEqual(20);
  expect(tickets[0].title).toEqual(title);
});

it('publishes an event', async () => {
  const title = 'blahBlah';

  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: 'blahBlah',
      price: 20,
    })
    .expect(201);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
