import { useState } from 'react';
import useRequest from '../../hooks/use-request';

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: {
      title,
      price,
    },
    onSuccess: (ticket) => console.log(ticket),
  });

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    doRequest();
  };

  return (
    <div>
      <h1>Create a ticket</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            className='form-control'
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className='form-group'>
          <label>Price</label>
          <input
            className='form-control'
            type='text'
            onBlur={onBlur}
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        {errors}
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};
export default NewTicket;
