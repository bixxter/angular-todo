/**
 * Formats a date to a string
 * @param date - date to format
 * @returns
 */
export default function dateFormatter(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
