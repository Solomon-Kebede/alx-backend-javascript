export default function createIteratorObject(report) {
  let iterator = []
  for (const x of Object.keys(report.allEmployees)) {
    iterator = [...iterator, ...(report.allEmployees[x])];
  }
  return iterator;
}

