export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    const status = true;
    if (status) {
      resolve('Success: Promise Completed');
    }
  });
}
