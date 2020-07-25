// https://webpack.js.org/guides/production/
module.exports = {
  // devtool:

  // devServer:

  entry: {
    'card-ui': './src/card-ui.ts',
    'input-form': './src/input-form.ts',
  },

  externals: {}, // https://webpack.js.org/configuration/externals/

  // mode:

  module: {
    // https://webpack.js.org/concepts/loaders/
    // https://webpack.js.org/loaders/

    // TODO: Add eslint-loader
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },

  // plugins:

  // optimization:

  // output:

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  target: 'web', // https://webpack.js.org/configuration/target/
};
