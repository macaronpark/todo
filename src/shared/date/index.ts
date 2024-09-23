export const formatDateString = (dateString: string): string => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const inputDate = new Date(dateString);
  const today = new Date();

  // UTC 기준으로 시간 포맷: hh:MM
  const hours = inputDate.getUTCHours().toString().padStart(2, '0');
  const minutes = inputDate.getUTCMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;

  const isToday =
    today.toISOString().slice(0, 10) === inputDate.toISOString().slice(0, 10);

  const yesterday = new Date(today);
  yesterday.setUTCDate(today.getUTCDate() - 1);
  const isYesterday =
    yesterday.toISOString().slice(0, 10) ===
    inputDate.toISOString().slice(0, 10);

  const tomorrow = new Date(today);
  tomorrow.setUTCDate(today.getUTCDate() + 1);
  const isTomorrow =
    tomorrow.toISOString().slice(0, 10) ===
    inputDate.toISOString().slice(0, 10);

  if (isToday) {
    return `오늘 ${timeString}`;
  } else if (isYesterday) {
    return `어제 ${timeString}`;
  } else if (isTomorrow) {
    return `내일 ${timeString}`;
  } else {
    const month = inputDate.getUTCMonth() + 1;
    const date = inputDate.getUTCDate();
    const dayOfWeek = days[inputDate.getUTCDay()];
    return `${month}월 ${date}일 ${dayOfWeek} ${timeString}`;
  }
};
