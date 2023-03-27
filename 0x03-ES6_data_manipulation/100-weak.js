export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const queries = weakMap.get(endpoint) || 0;
  if (queries >= 4) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, queries + 1);
  }
  return (queries);
}
