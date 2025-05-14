import { CourseTypesType } from './coursesTypes';

const applicationStatuses = ['active', 'closed', 'blocked', 'frozen'] as const;
export type ApplicationStatusesType = (typeof applicationStatuses)[number];

export interface IApplicationShowData {
  courseName: string;
  userName: string;
  type: CourseTypesType;
  groupNumber: string;
  status: ApplicationStatusesType;
  contactData: string;
}
