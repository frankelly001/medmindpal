import dayjs from 'dayjs';

export const convertToTime = (date: any) => dayjs(date).format('h:mm A');
