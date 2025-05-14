import {
  ICreateApplicationGroupsData,
  IGroupsAllDtoIn,
} from '../../../../../types/groupTypes';

export const mapGroupsData = (data: IGroupsAllDtoIn[]) =>
  data.map(
    (group: IGroupsAllDtoIn): ICreateApplicationGroupsData => ({
      id: group.id,
      days: group.days,
      duration: group.duration,
      groupNumber: group.name + group.groupNumber,
      startHour: group.startHour,
    }),
  );
