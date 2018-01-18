const PATHS = require('./paths');
const parts = require('./webpack.parts');
const merge = require('webpack-merge');

const commonConfig = merge([
  parts.loadJavascript(),
  // parts.loadMarkdown(),
  parts.loadRaw(),

]);

const developmentConfig = merge([
  {
    entry: {
      main: ['babel-polyfill', require.resolve('./polyfills'), 'react-hot-loader/patch', PATHS.dev ],
    },
    output: {
      path: PATHS.build,
      filename: '[name].dev.js',
    },
    plugins: [],
  },

  parts.loadStyles(),
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),

  parts.HtmlWebpackPlugin(),
  // parts.loadMarkdown(),
]);

const productionConfig = merge([
  {
    entry: {
      main: ['babel-polyfill', require.resolve('./polyfills'), 'react-hot-loader/patch', PATHS.dev ],
    },
    output: {
      path: PATHS.build,
      filename: 'static/js/bundle.[hash:8].js',
      chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    },
  },
  parts.clean(PATHS.build),
  parts.minifyJavaScript(),
  parts.HtmlWebpackPlugin(),
  parts.makeManifest(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
      },
      // Run cssnano in safe mode to avoid
      // potentially unsafe transformations.
      safe: true,
    },
  }),
  parts.extractCSS({ use: [
    'css-loader',
    parts.autoprefix(),
    { loader: 'sass-loader',
      options: {
        includePaths: ['node_modules', 'src', '.']
      }
    }
  ]})
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge([commonConfig, productionConfig]);
  }
  return merge([commonConfig, developmentConfig]);
};
