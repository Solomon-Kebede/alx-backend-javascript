export default function cleanSet(set, startString) {
  let text = '';
  set.forEach((value) => {
    if (value.slice(0, 3) === startString) {
      text += `${value.slice(startString.length)}-`;
    }
  });
  return text.slice(0, text.length - 1);
}
