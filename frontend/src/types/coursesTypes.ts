const courseStatuses = ['active', 'hidden', 'deleted'] as const;
export type CourseStatusesType = (typeof courseStatuses)[number];

export interface ILesson {
  name: string;
  instructionText: string;
  homework: string;
}

export interface ICreateCourseOutDTO {
  name: string;
  description: string;
  lessons: ILesson[];
}

export interface ICoursesInDTO {
  id: string;
  name: string;
  previewPath: string;
  description: string;
  status: CourseStatusesType;
}
