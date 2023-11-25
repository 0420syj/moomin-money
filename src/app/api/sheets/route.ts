import { NextResponse } from 'next/server';
import { GoogleSheetsService } from '@/services/GoogleSheetsService';
import { FormState } from '@/hooks/useFormStore';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const googleSheetsService = new GoogleSheetsService();

const sheetNameMap = {
  wanny: process.env.GOOGLE_WANNY_SHEET_NAME,
  moomin: process.env.GOOGLE_MOOMIN_SHEET_NAME,
};

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  try {
    const formData: FormState = await request.json();

    const flatData = Object.entries(formData).reduce(
      (acc, [key, value]) => (key === 'name' ? acc : [...acc, value as string | number]),
      [] as (string | number)[]
    );
    const valueData = Array.of(flatData);

    const response = await googleSheetsService.postSheetValues(
      process.env.GOOGLE_SPREADSHEET_ID as string,
      (sheetNameMap[formData.name] + '!' + process.env.GOOGLE_SHEET_RANGE) as string,
      valueData
    );

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
  }
}
