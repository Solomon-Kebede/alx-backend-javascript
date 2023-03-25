function loadBalancer(chinaDownload, USDownload) {
  return Promise.any([chinaDownload, USDownload]).then((result) => result);
}

module.exports = loadBalancer;
