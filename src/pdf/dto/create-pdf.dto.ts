import { IsNotEmpty } from 'class-validator';

export class CreateTransactionPdfDto {
  @IsNotEmpty()
  amount: string;

  @IsNotEmpty()
  beneficiaryName: string;

  @IsNotEmpty()
  beneficiaryAccount: string;

  @IsNotEmpty()
  senderName: string;

  @IsNotEmpty()
  senderAccount: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  time: string;

  @IsNotEmpty()
  fee: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  reference: string;

  @IsNotEmpty()
  transType: string;

  @IsNotEmpty()
  status: string;
}
