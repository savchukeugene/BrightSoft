import { IOptions } from './commonTypes.ts';

export interface IField {
  name: string;
  type: string;
  placeholder: string;
  defaultValue?: string;
  options?: IOptions[];
}

export interface IFilter {
  fields: IField[];
}
