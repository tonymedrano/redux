module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader']
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader'
            }
        ]
    }
}