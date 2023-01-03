export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    const m = list.map((element) => element.id);
    return m;
  }
  return [];
}
