import { IsNotEmpty, IsNumber } from 'class-validator';

export class StarsDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  operation: 'takeAway' | 'accrue';
  id: string;
}

export class GetStarsDto {
  id: string;
}
