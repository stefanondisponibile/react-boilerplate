const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    devtool: "cheap-module-evaluate-source-map",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [["@babel/plugin-proposal-class-properties", { loose: false }]]
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        compress: true,
        port: 9090
    }

}