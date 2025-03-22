import { messages } from './messages.ts';

export const USER_ROLES_OPTIONS = [
  {
    label: messages.userRoles.administrator,
    value: 'administrator',
  },
  {
    label: messages.userRoles.user,
    value: 'user',
  },
  {
    label: messages.userRoles.support,
    value: 'support',
  },
];

export const USER_STATUSES_OPTIONS = [
  {
    label: messages.userStatuses.active,
    value: 'active',
  },
  {
    label: messages.userStatuses.non_confirmed,
    value: 'non_confirmed',
  },
  {
    label: messages.userStatuses.blocked,
    value: 'blocked',
  },
  {
    label: messages.userStatuses.deleted,
    value: 'deleted',
  },
];
