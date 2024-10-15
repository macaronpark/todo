import { describe, it, expect, vi, afterAll } from 'vitest';
import { formatDateString } from './index';

describe('formatDateString', () => {
  const mockDate = (dateString: string) => {
    const date = new Date(dateString);
    vi.setSystemTime(date);
  };

  afterAll(() => {
    vi.useRealTimers();
  });

  it('날짜가 오늘일 때 "오늘"을 반환해야 한다', () => {
    mockDate('2024-09-23T12:00:00');

    const result = formatDateString('2024-09-23T10:30:00');
    expect(result).toBe('오늘 10:30');
  });

  it('날짜가 어제일 때 "어제"를 반환해야 한다', () => {
    mockDate('2024-09-23T12:00:00');

    const result = formatDateString('2024-09-22T10:30:00');
    expect(result).toBe('어제 10:30');
  });

  it('날짜가 내일일 때 "내일"을 반환해야 한다', () => {
    mockDate('2024-09-23T12:00:00');

    const result = formatDateString('2024-09-24T10:30:00');
    expect(result).toBe('내일 10:30');
  });

  it('날짜가 오늘, 어제, 내일이 아닐 때 포맷된 날짜를 반환해야 한다', () => {
    mockDate('2024-09-23T12:00:00');

    const result = formatDateString('2024-09-20T10:30:00');
    expect(result).toBe('9월 20일 금 10:30');
  });
});
