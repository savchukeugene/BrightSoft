export class CreateCourseDto {
  name: string;
  description: string;
  type: 'online' | 'offline' | 'both';
  users?: string[];
  previewPath?: string;
  lessons?: string[];
}
