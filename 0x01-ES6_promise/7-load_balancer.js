function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then((result) => result);
}

module.exports = loadBalancer;
