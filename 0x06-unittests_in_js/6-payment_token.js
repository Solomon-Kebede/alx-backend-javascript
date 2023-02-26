function getPaymentTokenFromAPI(success) {
  if (success === true) {
    return Promise.resolve({data: 'Successful response from the API'});
  } else { return undefined;}
}

module.exports = getPaymentTokenFromAPI;
