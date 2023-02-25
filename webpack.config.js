const path = require('path');

module.exports = {
    entry: './app/src/assets/js/pages/index.js',
  
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'app/dist'),
    },
};