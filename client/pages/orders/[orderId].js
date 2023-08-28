import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import { Router } from 'next/router';
// import {
//   useStripe,
//   useElements,
//   CardElement,
//   Elements,
// } from '@stripe/react-stripe-js';

// import { loadStripe } from '@stripe/stripe-js';

// const promise = loadStripe(
//   'pk_test_51J7EciFAz8W1jqWgMZ2srzBS04evFzjlOdBev72kiW2w7y2jHyWgKspSlw8bp66M5U0VboVNtPwyzWHaie8hBPJr0069r8Xa98'
// );

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    // onSuccess: (payment) => console.log(payment),
    onSuccess: () => Router.push('/orders'),
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };
    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  if (timeLeft < 0) {
    return <div>Order Expired</div>;
  }

  return (
    <div>
      Time left to pay: {timeLeft} seconds
      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        stripeKey='pk_test_51J7EciFAz8W1jqWgMZ2srzBS04evFzjlOdBev72kiW2w7y2jHyWgKspSlw8bp66M5U0VboVNtPwyzWHaie8hBPJr0069r8Xa98'
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
      {errors}
      {/* <Elements stripe={promise}>
        <CheckoutForm />
      </Elements> */}
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);
  console.log(data);
  return { order: data };
};

export default OrderShow;
