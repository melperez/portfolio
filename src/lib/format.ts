const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2023-01" -> "Jan 2023"; "2023" -> "2023". */
export function formatMonth(value: string): string {
  const [year, month] = value.split('-');
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

export function formatRange(start: string, end?: string): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : 'Present'}`;
}

const MONTHS_ES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

export function formatRangeEs(start: string, end?: string): string {
  const format = (value: string) => {
    const [year, month] = value.split('-');
    return month ? `${MONTHS_ES[Number(month) - 1]} ${year}` : year;
  };
  return `${format(start)} – ${end ? format(end) : 'Actualidad'}`;
}
