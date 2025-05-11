export class CreateCourseDto {
  name: string;
  description: string;
  users: string[];
  type: 'online' | 'offline';
}
