import puppeteer from 'puppeteer';

export async function generatePdfFromHtmlAsync(htmlReadyToRender: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(htmlReadyToRender);
  await page.emulateMediaType('screen');

  const pdf = await page.pdf({
    printBackground: true,
    scale: 1,
    margin: { left: '150px', right: '150px' },
  });

  console.log('done');
  await browser.close();
  return pdf;
}

export const getReceiptFileName = () =>
  `FCL_Transaction_Receipt_${new Date().getTime()}.pdf`;
