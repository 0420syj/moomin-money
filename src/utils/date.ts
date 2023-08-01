import { SerialDate } from '@/hooks/useFormStore';

const MS_PER_DAY = 86400 * 1000;
const SECONDS_PER_DAY = 86400;
const EPOCH_DIFFERENCE = 25569;

const getUtcDays = (serial: number) => Math.floor(serial - EPOCH_DIFFERENCE);
const getUtcValue = (utcDays: number) => utcDays * MS_PER_DAY;
const getDateInfo = (utcValue: number) => new Date(utcValue);

const getFractionalDay = (serial: number) =>
	serial - Math.floor(serial) + 0.0000001;
const getTotalSeconds = (fractionalDay: number) =>
	Math.floor(SECONDS_PER_DAY * fractionalDay);
const getSeconds = (totalSeconds: number) => totalSeconds % 60;
const getHours = (totalSeconds: number) => Math.floor(totalSeconds / (60 * 60));
const getMinutes = (totalSeconds: number) => Math.floor(totalSeconds / 60) % 60;

export const getTodayDateString = () => {
	const offset = new Date().getTimezoneOffset() * 60000;
	const today = new Date(Date.now() - offset);
	return today.toISOString().slice(0, 10);
};

export const convertToDate = (serial: number) => {
	const utcDays = getUtcDays(serial);
	const utcValue = getUtcValue(utcDays);
	const dateInfo = getDateInfo(utcValue);

	const fractionalDay = getFractionalDay(serial);
	let totalSeconds = getTotalSeconds(fractionalDay);

	const seconds = getSeconds(totalSeconds);
	totalSeconds -= seconds;

	const hours = getHours(totalSeconds);
	const minutes = getMinutes(totalSeconds);

	const date = new Date(
		dateInfo.getFullYear(),
		dateInfo.getMonth(),
		dateInfo.getDate(),
		hours,
		minutes,
		seconds,
	);

	const offset = date.getTimezoneOffset() * 60000;
	const dateOffset = new Date(date.getTime() - offset);

	return dateOffset;
};

export const convertToSerial = (date: string): SerialDate => {
	const [year, month, day] = date.split('-').map(v => parseInt(v, 10));
	const utcValue = Date.UTC(year, month - 1, day);
	const utcDays = utcValue / MS_PER_DAY;

	return utcDays + EPOCH_DIFFERENCE;
};
