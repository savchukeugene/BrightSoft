export interface IGroupsAllDtoIn {
  days: string[];
  duration: number;
  groupNumber: number;
  id: string;
  maxStudents: number;
  name: string;
  startHour: string;
  users: string[];
}

export interface IGroupCreateDtoOut {
  groupNumber: number;
  duration: number;
  startHour: string;
  maxStudents: number;
  course: string;
  name?: string;
  users?: string[];
  days?: string[];
}
