export default function hasValuesFromArray(set, array) {
  let result = true;
  /* eslint-disable no-unused-vars */
  const intersect = new Set(array.filter((i) => { result = result && set.has(i); return null; }));
  return result;
}
