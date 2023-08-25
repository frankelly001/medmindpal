import dayjs, {ConfigType} from 'dayjs';

export const convertToReadableDate = (date: ConfigType) =>
  dayjs(date).format('DD MMM YYYY');

export const formatDate = (dateString: string) => {
  const formattedDate = dayjs(dateString).format('YYYY-MM-DD');
  return formattedDate;
};
