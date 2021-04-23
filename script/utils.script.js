/**
 * @param {String} name
 * @param {String} newCharsArray
 * @returns String
 */
function getByProduct(name, newCharsArray) {
  return `export const ${name} = (s: string) => lookUp('${name}', s);
  
test('${name}', () => {
  expect(${name}(origin)).toEqual(
    '${newCharsArray.join('')}我爱你'
  );
});\n\n`;
}

module.exports = { getByProduct };
