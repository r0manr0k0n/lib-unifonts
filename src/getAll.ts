import fonts from './fonts.json';
import { lookUp } from './utils';

export interface IFont {
  name: string;
  value: string;
}

export type TFonts = Array<IFont>;

/**
 * @returns All font styles with their names
 */
export default function getAll(string: string): TFonts {
  const iterable = Object.keys(fonts);
  const result = [];

  for (const name of iterable) {
    const value = lookUp(name, string);

    result.push({ name, value });
  }

  return result;
}
