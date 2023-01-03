export default function getStudentIdsSum(list) {
  const idSum = list.reduce((total, element) => total + element.id, 0);
  return idSum;
}
