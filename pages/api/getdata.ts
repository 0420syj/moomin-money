import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

type Data = {
	values?: string[][];
	error?: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	if (req.method !== 'GET') {
		res.status(405).json({ error: 'Method not allowed' });
		return;
	}

	try {
		const auth = new google.auth.GoogleAuth({
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

		const sheets = google.sheets({ version: 'v4', auth });

		// get A1:B2 range values from spreadsheet,and sheet is named 'Testing'
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
			range: process.env.GOOGLE_SHEET_NAME,
		});

		// get values from response
		const values = response.data.values as string[][];

		if (values?.length) {
			console.log('Name, Email');
			values.map(row => {
				console.log(`${row[0]}, ${row[1]}`);
			});
		} else {
			console.log('No data found.');
		}

		res.status(200).json({ values });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
