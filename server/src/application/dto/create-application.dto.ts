export class CreateApplicationDto {
  courseId: string;
  userId: string;
  type: 'online' | 'offline';
  groupId: string;
  contactData: string;
}
