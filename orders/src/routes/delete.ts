import express, { Request, Response } from 'express';
import { Order } from '../models/order';
import {
  NotAuthorizedError,
  NotFoundError,
  OrderStatus,
} from '@tomtickets/common';
import { natsWrapper } from '../nats-wrapper';
import { OrderCancelledPublisher } from './../events/publishers/order-cancelled-publisher';

const router = express.Router();

router.delete('/api/orders/:orderId', async (req: Request, res: Response) => {
  const { orderId } = req.params;

  const order = await Order.findById(orderId).populate('ticket');

  if (!order) {
    throw new NotFoundError();
  }
  if (order.userId !== req.currentUser!.id) {
    throw new NotAuthorizedError();
  }
  order.status = OrderStatus.Cancelled;
  await order.save();

  // publish an event saying this was cancelled
  new OrderCancelledPublisher(natsWrapper.client).publish({
    id: order.id,
    version: order.version,
    ticket: {
      id: order.ticket.id,
    },
  });

  res.status(204).send(order);
});

export { router as deleteOrderRouter };
