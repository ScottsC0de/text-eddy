const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// configure workbox plugins for service worker & manifest file
module.exports = () => {
    return {
        mode: 'development',
        entry: {
            main: './src/js/index.js',
            install: './src/js/install.js'
            // database: './src/js/database.js',
            // editor: './src/js/editor.js',
            // header: './src/js/header.js'
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            /* web pack plug-ins 
            for creatating html & manifest.json files
            & injecting bundles & service workers */

            new HtmlWebpackPlugin({
                template: './index.html',
                title: 'JATE'
                // favicon: "./favicon.ico"
            }),
            new InjectManifest({
                swSrc: "./src-sw.js",
                swDest: "src-sw.js",
            }),

            new WebpackPwaManifest({
                fingerprints: false,
                inject: true,
                name: 'Just Another Text Editor',
                short_name: 'JATE',
                description: 'Just Another Text Editor',
                background_color: '#225ca3',
                theme_color: '#225ca3',
                start_url: './',
                publicPath: './',
                icons: [
                    {
                        src: path.resolve('src/img/logo.png'),
                        sizes: [96, 128, 192, 256, 384, 512],
                        destination: path.join('assets', 'icons'),
                    },
                ],
            })
        ],

        // CSS & babel webpack loaders
        module: {
            rules: [
                { // CSS
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                { // babel
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
                        },
                    },
                }
            ],
        },
    };
};