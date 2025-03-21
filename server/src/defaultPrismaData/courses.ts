import { courseNamesType } from '../types/prisma/prisma.types';

type ICoursesData = {
  [key in courseNamesType]: string[];
};

const coursesData: ICoursesData = {
  newbie: ['maze'],
  get beginner() {
    return [...this.newbie, 'quick_count'];
  },
  get amateur() {
    return [...this.beginner, 'quick_count'];
  },
  get pro() {
    return [...this.amateur, 'quick_count'];
  },
};
