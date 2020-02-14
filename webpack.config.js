const path = require('path');
module.exports = {
    entry: path.join(__dirname, 'src/js/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist/js/')
    },
    mode: 'development',
    devtool: 'inline-source-map'
}