import { OrderCancelledEvent, Publisher, Subjects } from '@tomtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
