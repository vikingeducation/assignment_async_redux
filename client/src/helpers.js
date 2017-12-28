export function stringToFormattedNumber(string) {
  const number = parseInt(string, 10);
  return number.toLocaleString();
}
