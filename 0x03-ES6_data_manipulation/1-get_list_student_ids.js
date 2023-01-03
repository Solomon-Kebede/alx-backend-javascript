export default function getListStudentIds(list) {
  if (typeof (list) === 'object') {
    const m = list.map((element) => element.id);
    return m;
  }
  return [];
}
