import { isPositive } from './main'


describe('isPositive()', () => {
 it('should retun true when n > 0', () => {
   expect(isPositive(1)).toBe(true);
   expect(isPositive(2)).toBe(true);
   expect(isPositive(3)).toBe(true);
 });
  it('should retun false when n < 0', () => {
    expect(isPositive(-1)).toBe(false);
    expect(isPositive(-2)).toBe(false);
    expect(isPositive(-3)).toBe(false);
  });
  it('should retun false when n = 0', () => {
    expect(isPositive(0)).toBe(false);
 });
});
