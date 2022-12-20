export default function appendToEachArrayValue(array, appendString) {
  const tmp = [];
  for (const idx of array) {
    tmp[array.indexOf(idx)] = appendString + idx;
  }

  return tmp;
}
