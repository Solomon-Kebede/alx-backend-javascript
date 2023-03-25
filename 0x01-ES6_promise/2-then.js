export default function handleResponseFromAPI(promise) {
  return promise.then((error) => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  }, (error) => new Error());
}
