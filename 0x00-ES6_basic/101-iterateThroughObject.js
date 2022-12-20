export default function iterateThroughObject(reportWithIterator) {
  let concated = ''; let result = '';
  for (const i in reportWithIterator) {
    if (i >= 0) {
      concated = concated.concat(' | ', reportWithIterator[i]);
    }
  }
  result = concated.slice(3);
  return result;
}
