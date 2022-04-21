export function datesIsToday(date: Date): boolean {
  let today: Date = new Date();

  return (
    today.getUTCFullYear() == date.getUTCFullYear() &&
    today.getUTCMonth() == date.getUTCMonth() &&
    today.getUTCDate() == date.getUTCDate()
  );
}
