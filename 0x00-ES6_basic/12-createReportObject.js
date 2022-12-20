export default function createReportObject(employeesList) {
  const tmp = {};
  tmp.allEmployees = employeesList;
  tmp.getNumberOfDepartments = function len(a) {
    return Object.keys(a).length;
  };
  return tmp;
}
