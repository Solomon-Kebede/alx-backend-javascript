export default function iterateThroughObject(reportWithIterator) {
  let concated = ""; let result = "";
  for (let i = 0; i < reportWithIterator.length; i++) {
    concated = concated.concat(" | ", reportWithIterator[i]);
  }
  result = concated.slice(3);
  return result;
}
