const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  entry: {
    'card-ui': './src/card-ui.ts',
    'input-form': './src/input-form.ts',
  },

  // https://webpack.js.org/configuration/externals/
  externals: {},

  devtool: 'inline-source-map',

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    // host: '0.0.0.0',
    hot: true, // https://webpack.js.org/configuration/dev-server/#devserver-hot
    inline: true,
    port: 9001,
    publicPath: '/', // https://webpack.js.org/configuration/dev-server/#devserver-publicpath-
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].[hash].css',
    }),

    new HtmlWebpackPlugin({
      title: 'Development card-ui',
      chunks: ['card-ui'],
      filename: path.resolve(__dirname, './dist', 'card-ui.html'),
      template: path.resolve(__dirname, './src/html', 'card-ui.html'),
    }),

    new HtmlWebpackPlugin({
      title: 'Development input-form',
      chunks: ['input-form'],
      filename: path.resolve(__dirname, './dist', 'input-form.html'),
      template: path.resolve(__dirname, './src/html', 'input-form.html'),
    }),
  ],

  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  optimization: {
    minimize: false,
    minimizer: [
      // https://webpack.js.org/plugins/terser-webpack-plugin
      new TerserWebpackPlugin({
        cache: false,
        parallel: true,
        sourceMap: false,
        terserOptions: {
          warnings: true,
          compress: {
            dead_code: false,
            drop_console: false,
            drop_debugger: false,
            unused: false,
            warnings: false,
          },
          mangle: false,
        },
      }),
    ],
    usedExports: false,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }],
        exclude: /node_modules/,
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },

          // Inject CSS into the DOM.
          // https://webpack.js.org/loaders/style-loader/
          // 'style-loader',

          // The css-loader interprets @import and url() like import/require() and will resolve them.
          // https://webpack.js.org/loaders/css-loader
          'css-loader',

          // Loads a Sass/SCSS file and compiles it to CSS.
          // https://webpack.js.org/loaders/sass-loader/
          'sass-loader',
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]?[contenthash]',
              publicPath: '../', // Specifies a custom public path for the target file(s).
            },
          },
        ],
      },

      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              limit: 512, // url-loader can return a DataURL if the file is smaller than a byte limit.
              // mimetype,

              // file-loader fallback parameters
              name: 'img/[name].[ext]?[contenthash]',
              publicPath: '../', // Specifies a custom public path for the target file(s).
            },
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'font/[name].[ext]?[contenthash]',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  target: 'web', // https://webpack.js.org/configuration/target/
};
