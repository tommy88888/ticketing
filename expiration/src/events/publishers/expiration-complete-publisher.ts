import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@tomtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
