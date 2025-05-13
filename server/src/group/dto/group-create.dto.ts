const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const;
type DaysType = (typeof days)[number];
export class GroupCreateDto {
  groupNumber: number;
  duration: number;
  startHour: string;
  maxStudents: number;
  course: string;
  name?: string;
  users?: string[];
  days?: DaysType[];
}
