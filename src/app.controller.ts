import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { AppService } from './app.service';
import { CreateTransactionPdfDto } from './pdf/dto/create-pdf.dto';

import { getReceiptFileName } from './pdf/utils';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('receipt')
  async getDummyReceipt(@Res() response: Response): Promise<void> {
    const buffer = await this.appService.getReceipt();

    const fileName = getReceiptFileName();

    response.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=${fileName}`,
      'Content-Length': buffer.length,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0,
    });

    response.send(buffer);
  }

  @Post('transaction-receipt')
  async createReceipt(
    @Body() createPdfDto: CreateTransactionPdfDto,
    @Res() response: Response,
  ): Promise<void> {
    const buffer = await this.appService.createPdf(createPdfDto);

    const fileName = getReceiptFileName();

    // Set the response headers to indicate that the response is a PDF file
    // Return the PDF in the response
    response.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=${fileName}`,
      'Content-Length': buffer.length,
      // prevent cache
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0,
    });

    response.send(buffer);
  }
}
