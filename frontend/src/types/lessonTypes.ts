export interface ILessonsDtoIn {}

export interface ILessonCreateFormInfo {
  name: string;
  description: string;
  homework: string;
}

export interface ILessonCreateDtoOut extends ILessonCreateFormInfo {
  course: string;
}

export interface ILessonCreateDtoIn {
  id: string;
  course: string;
  name: string;
  description: string;
  picture: string;
  video: string;
  homework: string;
  position: number;
}
