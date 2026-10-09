import { describe, expect, it } from 'vitest';
import { qa } from '../src/data/qa';
import { formatRange } from '../src/lib/format';

describe('qa data', () => {
  it('has six questions with unique ids', () => {
    expect(qa).toHaveLength(6);
    expect(new Set(qa.map((q) => q.id)).size).toBe(qa.length);
  });

  it('keeps every answer between 40 and 80 words', () => {
    for (const { id, answer } of qa) {
      const words = answer.trim().split(/\s+/).length;
      expect(words, id).toBeGreaterThanOrEqual(40);
      expect(words, id).toBeLessThanOrEqual(80);
    }
  });
});

describe('formatRange', () => {
  it('formats month ranges', () => {
    expect(formatRange('2021-03', '2022-12')).toBe('Mar 2021 – Dec 2022');
    expect(formatRange('2023-01')).toBe('Jan 2023 – Present');
  });
});
