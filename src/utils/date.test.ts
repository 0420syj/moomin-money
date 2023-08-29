import {
	getTodayDateString,
	toKoreanISOString,
	getAllSerialDatesByMonth,
	convertToDate,
	convertToSerial,
} from '@/utils/date';

describe('Date Utility Functions', () => {
	describe('getTodayDateString', () => {
		it('should return the current date in YYYY-MM-DD format', () => {
			const today = new Date();
			const expected = `${today.getFullYear()}-${String(
				today.getMonth() + 1,
			).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
			expect(getTodayDateString()).toBe(expected);
		});
	});

	describe('toKoreanISOString', () => {
		it('should return the date in Korean ISO format', () => {
			const date = new Date('2023-08-29T10:00:00Z');
			expect(toKoreanISOString(date)).toBe('2023-08-29');
		});
	});

	describe('convertToSerial', () => {
		it('should convert a date string to a serial date', () => {
			const date = '2023-08-29';
			const serial = convertToSerial(date);
			expect(serial).toBeGreaterThan(0);
		});
	});

	describe('getAllSerialDatesByMonth', () => {
		it('should return all serial dates for a given month', () => {
			const result = getAllSerialDatesByMonth(2023, 8);
			expect(result[0]).toBe(convertToSerial('2023-08-01'));
			expect(result[result.length - 1]).toBe(
				convertToSerial('2023-08-31'),
			);
		});
	});

	describe('convertToDate', () => {
		it('should convert serial date to JavaScript Date object', () => {
			const serial = convertToSerial('2023-08-29');
			const date = convertToDate(serial);
			expect(date.getFullYear()).toBe(2023);
			expect(date.getMonth()).toBe(7);
			expect(date.getDate()).toBe(29);
		});
	});
});
