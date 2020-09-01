const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function buildConfig(configDirs) {
    return {
        module: {
        devtool: 'source-map',
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader",
            options: {
                presets:['@babel/preset-env','@babel/react'],
                cacheDirectory: true,
                cacheCompression: false,
            }
            }
        },
        {
            test: /\.html$/,
            use: [
            {
                loader: "html-loader"
            }
            ]
        },
        {
            test: /\.script\.js$/,
            use: [
                {
                    loader: 'script-loader'
                },
            ]
        },
        {
            // Loads the javacript into html template provided.
            // Entry point is set below in HtmlWebPackPlugin in Plugins
            test: /\.html$/,
            use: [{loader: "html-loader"}]
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        },
        {
            test: /\.(jpg|jpeg|gif|png|webp)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        outputPath: './images',
                        name: "[name].[ext]",
                    },
                },
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: './fonts',
                        name: "[name].[ext]",
                    },
                },
            ],
        },
        {
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        outputPath: './svg',
                        name: "[name].svg",
                    },
                },
            ]
        },
        {
            test: /\.html$/,
            use: {
                loader: 'html-loader',
            }
        }     
        ]
    },
    entry: configDirs.APP_DIR + "/index.js",
    output: {
        path: configDirs.BUILD_DIR,
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            title: "Niko Slusarczyk",
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: configDirs.APP_DIR + "/index.ejs"
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].[contenthash:8].css",
            chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
        })
    ]
    };
}
module.exports = buildConfig;