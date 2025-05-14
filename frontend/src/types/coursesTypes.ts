const courseStatuses = ['active', 'hidden', 'deleted'] as const;
export type CourseStatusesType = (typeof courseStatuses)[number];

const courseTypes = ['online', 'offline', 'both'] as const;
export type CourseTypesType = (typeof courseTypes)[number];

const lessonStatuses = ['active', 'hidden', 'deleted', 'development'] as const;
export type LessonStatusesType = (typeof lessonStatuses)[number];

export interface ILessonDataInCourseDTO {
  id: string;
  name: string;
  status: LessonStatusesType;
  description: string;
}

export interface ILesson {
  name: string;
  instructionText: string;
  homework: string;
  id: string;
}

export interface ICreateCourseOutDTO {
  name: string;
  description: string;
  users: string[];
  type: 'online' | 'offline';
}

export interface ICoursesInDTO {
  id: string;
  name: string;
  previewPath: string | null;
  description: string;
  status: CourseStatusesType;
}

export interface ICourseData extends ICoursesInDTO {
  lessons: ILessonDataInCourseDTO[];
}
