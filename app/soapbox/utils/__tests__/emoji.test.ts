import {
  removeVS16s,
  toCodePoints,
} from '../emoji';

const ASCII_HEART = 'β€'; // '\u2764\uFE0F'
const RED_HEART_RGI = 'β€οΈ'; // '\u2764'
const JOY = 'π';

describe('removeVS16s()', () => {
  it('removes Variation Selector-16 characters from emoji', () => {
    // Sanity check
    expect(ASCII_HEART).not.toBe(RED_HEART_RGI);

    // It normalizes an emoji with VS16s
    expect(removeVS16s(RED_HEART_RGI)).toBe(ASCII_HEART);

    // Leaves a regular emoji alone
    expect(removeVS16s(JOY)).toBe(JOY);
  });
});

describe('toCodePoints()', () => {
  it('converts a plain emoji', () => {
    expect(toCodePoints('π')).toEqual(['1f602']);
  });

  it('converts a VS16 emoji', () => {
    expect(toCodePoints(RED_HEART_RGI)).toEqual(['2764', 'fe0f']);
  });

  it('converts an ASCII character', () => {
    expect(toCodePoints(ASCII_HEART)).toEqual(['2764']);
  });

  it('converts a sequence emoji', () => {
    expect(toCodePoints('πΊπΈ')).toEqual(['1f1fa', '1f1f8']);
  });
});
