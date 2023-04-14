import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionPdfDto {
  @IsNotEmpty()
  @ApiProperty({ required: true })
  readonly amount: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly beneficiaryName: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly beneficiaryAccount: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly senderName: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly senderAccount: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly date: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly time: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly fee: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly reference: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly transType: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly status: string;
}
