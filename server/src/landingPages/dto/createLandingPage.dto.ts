export class CreateLandingPageDto {
  name: string;
  description: any;
  type: 'online' | 'offline' | 'both';
  users?: string[];
  previewPath?: string;
  lessons?: string[];
}
