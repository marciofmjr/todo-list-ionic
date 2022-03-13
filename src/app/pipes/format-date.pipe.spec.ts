import { FormatDatePipe } from './format-date.pipe';

describe('FormatDatePipe', () => {

  const pipe = new FormatDatePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('given 2022-03-12T13:59:21.406Z it should format as expected', async () => {
    expect(pipe.transform('2022-03-12T13:59:21.406Z')).toBe('12/03/2022 10:59:21');
  });

});
