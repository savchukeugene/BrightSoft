import { IGroupsAllDtoIn } from '../../../../../types/groupTypes';
import { IUserData } from '../../../../../types/commonTypes';

export const groupsDataMapperIn: (data: IGroupsAllDtoIn[]) => string[] = (
  data: IGroupsAllDtoIn[],
): string[] => data.map((group: IGroupsAllDtoIn) => group.name);

export const mapUsersForGroups = (data: IUserData[]) =>
  data.map((user) => ({
    label:
      (user.secondName + user.firstName).length > 0
        ? user.secondName + user.firstName
        : user.userName,
    value: user.id,
  }));
