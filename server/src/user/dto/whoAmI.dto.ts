import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class WhoAmIDto {
  @IsString({ message: 'Id должен быть строкой.' })
  @IsNotEmpty({ message: 'Id обязателен для заполнения.' })
  userId: string;
}
