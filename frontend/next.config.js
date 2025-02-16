const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
    config.resolve.alias['@pages'] = path.join(__dirname, 'src/pages');
    config.resolve.alias['@config'] = path.join(__dirname, 'src/config');
    return config;
  },
};