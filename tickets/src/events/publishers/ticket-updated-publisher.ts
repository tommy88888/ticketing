import { Publisher, Subjects, TicketUpdatedEvent } from '@tomtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  // subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
  readonly subject = Subjects.TicketUpdated;
}
