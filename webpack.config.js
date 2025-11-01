const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point for the application
    output: {
        filename: 'bundle.js', // Output bundle file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Files to match
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: 'babel-loader', // Loader for JavaScript files
                    options: {
                        presets: ['@babel/preset-env'] // Preset to use
                    }
                }
            },
            {
                test: /\.css$/, // Files to match
                use: ['style-loader', 'css-loader'], // Loaders for CSS files
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.css'], // Extensions to resolve
    },
    devtool: 'source-map', // Enable source maps for easier debugging
};