import { OrderCreatedEvent, Publisher, Subjects } from '@tomtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
