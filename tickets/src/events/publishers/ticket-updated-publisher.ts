import { Publisher, Subjects, TicketUpdatedEvent } from '@mgtickets123/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
