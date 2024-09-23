import { describe, it, expect } from 'vitest';
import { formatDateString } from './index';

describe('formatDateString 함수 테스트', () => {
  it('현재 날짜에 대해 "오늘 hh:MM"을 반환해야 한다', () => {
    const today = new Date().toISOString();

    const utcHours = new Date().getUTCHours().toString().padStart(2, '0');
    const utcMinutes = new Date().getUTCMinutes().toString().padStart(2, '0');
    const expectedTime = `${utcHours}:${utcMinutes}`;

    expect(formatDateString(today)).toBe(`오늘 ${expectedTime}`);
  });

  it('어제 날짜에 대해 "어제 hh:MM"을 반환해야 한다', () => {
    const yesterday = new Date(Date.now() - 86400000).toISOString();

    const utcHours = new Date(Date.now() - 86400000)
      .getUTCHours()
      .toString()
      .padStart(2, '0');
    const utcMinutes = new Date(Date.now() - 86400000)
      .getUTCMinutes()
      .toString()
      .padStart(2, '0');
    const expectedTime = `${utcHours}:${utcMinutes}`;

    expect(formatDateString(yesterday)).toBe(`어제 ${expectedTime}`);
  });

  it('내일 날짜에 대해 "내일 hh:MM"을 반환해야 한다', () => {
    const tomorrow = new Date(Date.now() + 86400000).toISOString();

    const utcHours = new Date(Date.now() + 86400000)
      .getUTCHours()
      .toString()
      .padStart(2, '0');
    const utcMinutes = new Date(Date.now() + 86400000)
      .getUTCMinutes()
      .toString()
      .padStart(2, '0');
    const expectedTime = `${utcHours}:${utcMinutes}`;

    expect(formatDateString(tomorrow)).toBe(`내일 ${expectedTime}`);
  });

  it('오늘, 어제, 내일이 아닌 날짜에 대해 "x월 x일 요일 hh:MM" 형식의 날짜를 반환해야 한다', () => {
    const testDate = new Date('2023-09-20T15:30:00.000Z').toISOString();

    expect(formatDateString(testDate)).toBe('9월 20일 수 15:30');
  });

  it('자정에 가까운 경계 조건을 정확히 처리해야 한다', () => {
    const lateNightYesterday = new Date(
      Date.now() - (86400000 - 1000)
    ).toISOString(); // 어제 23:59:59
    const earlyMorningTomorrow = new Date(
      Date.now() + (86400000 + 1000)
    ).toISOString(); // 내일 00:00:01

    const lateNightHours = new Date(Date.now() - (86400000 - 1000))
      .getUTCHours()
      .toString()
      .padStart(2, '0');
    const lateNightMinutes = new Date(Date.now() - (86400000 - 1000))
      .getUTCMinutes()
      .toString()
      .padStart(2, '0');

    const earlyMorningHours = new Date(Date.now() + (86400000 + 1000))
      .getUTCHours()
      .toString()
      .padStart(2, '0');
    const earlyMorningMinutes = new Date(Date.now() + (86400000 + 1000))
      .getUTCMinutes()
      .toString()
      .padStart(2, '0');

    expect(formatDateString(lateNightYesterday)).toBe(
      `어제 ${lateNightHours}:${lateNightMinutes}`
    );
    expect(formatDateString(earlyMorningTomorrow)).toBe(
      `내일 ${earlyMorningHours}:${earlyMorningMinutes}`
    );
  });
});
