const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') { 
  mode = 'production';
}

const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
];

module.exports = {
    mode,
    plugins,
    entry: './src/index.tsx',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        extensionAlias: {
            ".js": [".js", ".ts"],
            ".cjs": [".cjs", ".cts"],
            ".mjs": [".mjs", ".mts"]
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },

    devServer: {
        hot: true,
        port: 3000
    },

    module: {
        rules: [
            { test: /\.(html)$/, use: ['html-loader'] },
            { test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource', 
              },
              {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ],
    }
}