import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

import { CreateTransactionPdfDto } from './pdf/dto/create-pdf.dto';
import { data } from './data';

import { generatePdfFromHtmlAsync } from './pdf/utils';

@Injectable()
export class AppService {
  private prepareHtml(data: CreateTransactionPdfDto) {
    const {
      amount,
      beneficiaryName,
      beneficiaryAccount,
      senderAccount,
      senderName,
      date,
      time,
      transType,
      status,
      reference,
      description,
      fee,
    } = data;

    const filePath = join(process.cwd(), 'src', 'receipt.html');

    const html = readFileSync(filePath, 'utf-8');

    const htmlReadyToRender = html
      .replace('{{amount}}', amount)
      .replace('{{beneficiaryName}}', beneficiaryName)
      .replace('{{beneficiaryAccount}}', beneficiaryAccount)
      .replace('{{senderName}}', senderName)
      .replace('{{senderAccount}}', senderAccount)
      .replace('{{transDate}}', date)
      .replace('{{transTime}}', time)
      .replace('{{description}}', description)
      .replace('{{fee}}', fee)
      .replace('{{reference}}', reference)
      .replace('{{transType}}', transType)
      .replace('{{status}}', status);
    return htmlReadyToRender;
  }

  async getReceipt(): Promise<Buffer> {
    const htmlReadyToRender = this.prepareHtml(data);

    return await generatePdfFromHtmlAsync(htmlReadyToRender);
  }

  async createPdf(requestBody: CreateTransactionPdfDto): Promise<Buffer> {
    const htmlReadyToRender = this.prepareHtml(requestBody);

    return await generatePdfFromHtmlAsync(htmlReadyToRender);
  }
}
