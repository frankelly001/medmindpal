export const createArrayNumList = (length: number = 5, addBy: number = 1) => {
  return Array.from({length}, (_, index) => index + addBy).map(el => {
    return {label: el.toString(), value: el.toString()};
  });
};
