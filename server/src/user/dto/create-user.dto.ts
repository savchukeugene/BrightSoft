import { AuthMethods, UserRole } from '../../../prisma/__generated__';

export class CreateUserDto {
  email: string;
  password: string;
  userName: string;
  picture: string;
  method: AuthMethods;
  isVerified: boolean;
  role: UserRole;
  firstName: string;
  secondName: string;
  fatherName: string;
}
