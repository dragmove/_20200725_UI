const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',

  mode: 'production', // 'development' or 'production'. $webpack --mode=production

  plugins: [
    // https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
    new CleanWebpackPlugin(['build']),

    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      // global constants in production mode
    })

    // https://webpack.js.org/plugins/banner-plugin/
    // TODO: https://github.com/webpack/webpack/issues/6630
    // new webpack.BannerPlugin({ banner: 'hello world' })
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        extractComments: false,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          warnings: false,
          compress: {
            unused: true,
            drop_console: true,
            warnings: true
          },
          mangle: true,
          output: {
            beautify: false,
            comments: false
          },
          keep_fnames: false
        }
      })
    ],
    usedExports: true,

    // https://webpack.js.org/configuration/optimization/#optimization-runtimechunk
    // https://webpack.js.org/guides/caching/#extracting-boilerplate
    // runtimeChunk: 'single',

    // code splitting
    // https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks
    // https://webpack.js.org/guides/code-splitting/#prevent-duplication
    // https://webpack.js.org/guides/code-splitting/#dynamic-imports
    splitChunks: { chunks: 'all' }
  },

  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build')
    // publicPath: ''
  }
});
