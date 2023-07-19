import { Subjects, Publisher, OrderCancelledEvent } from '@mgtickets123/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
