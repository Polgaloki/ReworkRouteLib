module.exports = {
    entry: './src/scripts/maps.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + "/src/dist",
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};

