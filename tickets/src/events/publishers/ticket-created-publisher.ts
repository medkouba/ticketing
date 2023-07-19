import { Publisher, Subjects, TicketCreatedEvent } from '@mgtickets123/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
