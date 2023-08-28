export const reverseLookup = <T extends Record<string, number>>(
  obj: T,
  value: number,
): keyof T | null => Object.keys(obj).find(key => obj[key] === value) || null;
