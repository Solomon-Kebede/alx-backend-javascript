function getPaymentTokenFromAPI(success) {
  if (success === true) {
    Promise.resolve({data: 'Successful response from the API'});
  }
}

module.exports = getPaymentTokenFromAPI;
