import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
});

it('return a 400 with an invalid email', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@testCom',
      password: 'password',
    })
    .expect(400);
});

it('return a 400 with an invalid password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'w',
    })
    .expect(400);
});

it('return a 400 with an invalid password & email', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@gmail.com',
      password: '',
    })
    .expect(400);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: '',
      password: '1111111',
    })
    .expect(400);
});

it('disallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const res = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  expect(res.get('Set-Cookie')).toBeDefined();
});
