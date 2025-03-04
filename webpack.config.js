const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});
module.exports = {
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'public'),
        port: 3001,
        historyApiFallback: {
            index: '/public/index.html'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        htmlPlugin,
        new ModuleFederationPlugin({
            name: "MFE",
            filename: "remoteEntry.js",
            exposes: {
                "./Button": "./src/Button"
            }
        })
    ]
};