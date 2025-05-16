import {
  ICreateApplicationGroupsData,
  IGroupsAllDtoIn,
} from '../../../../../types/groupTypes';

const days = {
  monday: 'Понедельник',
  tuesday: 'Вторник',
  wednesday: 'Среда',
  thursday: 'Четверг',
  friday: 'Пятница',
  saturday: 'Суббота',
  sunday: 'Воскресенье',
};

export const mapGroupsData = (data: IGroupsAllDtoIn[]) =>
  data.map(
    (group: IGroupsAllDtoIn): ICreateApplicationGroupsData => ({
      id: group.id,
      days: group.days,
      duration: group.duration,
      groupNumber: `${group.name + group.groupNumber}; ${group.days.map((value: string) => days[value]).join(',')}; ${group.startHour}:00 - ${group.duration}:00`,
      startHour: group.startHour,
    }),
  );
