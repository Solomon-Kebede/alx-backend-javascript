export default function createEmployeesObject(departmentName, employees) {
  const tmp = {};
  tmp[departmentName] = employees;
  return tmp;
}
