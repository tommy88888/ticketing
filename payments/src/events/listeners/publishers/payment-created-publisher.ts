import { PaymentCreatedEvent, Publisher, Subjects } from '@tomtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
