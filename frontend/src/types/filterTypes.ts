import { IOptions } from './commonTypes';

export interface IField {
  name: string;
  type: string;
  placeholder: string;
  defaultValue?: string;
  options?: IOptions[];
  allowClear?: boolean;
}

export interface IFilter {
  fields: IField[];
}
