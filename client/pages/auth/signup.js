import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

function signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    await doRequest();

    // Router.push('/');
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div className='form-group'>
        <label>Email Address</label>
        <input
          type='text'
          className='form-control'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      {errors}
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
}
export default signup;
