import { CreateChargeDto } from '@app/common';
import { IsEmail, IsString } from 'class-validator';

export class PaymentsCreateChargeDto extends CreateChargeDto {
  @IsEmail()
  email: string;
}
