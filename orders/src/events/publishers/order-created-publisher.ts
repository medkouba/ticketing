import { Publisher, OrderCreatedEvent, Subjects } from '@mgtickets123/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
