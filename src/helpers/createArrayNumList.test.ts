import {createArrayNumList} from './createArrayNumList';
describe('createArrayNumList', () => {
  it('creates an array with the correct length and values', () => {
    const result = createArrayNumList(5, 1);

    expect(result).toHaveLength(5);

    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toEqual({
        label: (i + 1).toString(),
        value: (i + 1).toString(),
      });
    }
  });

  it('handles different lengths and addBy values', () => {
    const result1 = createArrayNumList(3, 2);
    expect(result1).toEqual([
      {label: '2', value: '2'},
      {label: '3', value: '3'},
      {label: '4', value: '4'},
    ]);

    const result2 = createArrayNumList(0, 5);
    expect(result2).toEqual([]);
  });
});
