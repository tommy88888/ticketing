import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const res = await axios[method](url, { ...body, ...props });

      if (onSuccess) {
        onSuccess(res.data);
      }
      // console.log('use request', res);
      return res.data;
    } catch (err) {
      // console.log(err);
      setErrors(
        <div className='alert alert-danger'>
          <h4> Oops...</h4>
          <ul className='my-0'>
            {err?.response?.data?.errors?.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
