export class GroupCreateDto {
  groupNumber: number;
  duration: number;
  startHour: string;
  maxStudents: number;
  name?: string;
  users?: string[];
}
