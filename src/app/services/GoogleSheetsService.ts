import { google } from 'googleapis';
import { GoogleAuth } from 'googleapis-common';
import { formatDate } from '@/utils/date';

export class GoogleSheetsService {
	private auth: GoogleAuth;
	private sheets;

	constructor() {
		this.auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
				private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(
					/\\n/g,
					'\n',
				),
			},
			scopes: [
				'https://www.googleapis.com/auth/drive',
				'https://www.googleapis.com/auth/drive.file',
				'https://www.googleapis.com/auth/spreadsheets',
			],
		});

		this.sheets = google.sheets({ version: 'v4', auth: this.auth });
	}

	async getSheetValues(spreadsheetId: string, range: string) {
		const response = await this.sheets.spreadsheets.values.get({
			spreadsheetId: spreadsheetId,
			range: range,
			majorDimension: 'ROWS',
			valueRenderOption: 'UNFORMATTED_VALUE',
		});

		return response.data.values as string[][];
	}
}