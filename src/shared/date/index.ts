export const formatDateString = (dateString: string): string => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const inputDate = new Date(dateString);
  const today = new Date();

  // 현지 시간 기준으로 시간 포맷: hh:mm
  const hours = inputDate.getHours().toString().padStart(2, '0');
  const minutes = inputDate.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;

  const isToday = today.toLocaleDateString() === inputDate.toLocaleDateString();

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const isYesterday =
    yesterday.toLocaleDateString() === inputDate.toLocaleDateString();

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const isTomorrow =
    tomorrow.toLocaleDateString() === inputDate.toLocaleDateString();

  if (isToday) {
    return `오늘 ${timeString}`;
  } else if (isYesterday) {
    return `어제 ${timeString}`;
  } else if (isTomorrow) {
    return `내일 ${timeString}`;
  } else {
    const month = inputDate.getMonth() + 1;
    const date = inputDate.getDate();
    const dayOfWeek = days[inputDate.getDay()];
    return `${month}월 ${date}일 ${dayOfWeek} ${timeString}`;
  }
};
