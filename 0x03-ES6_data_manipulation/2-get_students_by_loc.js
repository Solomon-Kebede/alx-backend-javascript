export default function getStudentsByLocation(list, city) {
  const filtered = list.filter((element) => element.location === city);
  return filtered;
}
