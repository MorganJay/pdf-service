import { CreateTransactionPdfDto } from './pdf/dto/create-pdf.dto';

export const data: CreateTransactionPdfDto = {
  amount: '4,000.00',
  beneficiaryName: 'John Smith',
  beneficiaryAccount: 'FCL/232932903',
  senderName: 'Angela Smith',
  senderAccount: 'Gtbank/2324291301',
  date: 'Apr 13, 2023',
  time: '09:32 pm',
  fee: '100.00',
  description: 'A big amount of money',
  reference: '24322143543234342',
  transType: 'Internet',
  status: 'Successful',
};
