const path = require('path');

module.exports = {
    entry: './app/src/assets/js/pages/index.js',

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'app/dist/assets/js'),
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};