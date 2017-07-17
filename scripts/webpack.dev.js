const Path = require('path')

const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

const resolve = relPath => Path.resolve(__dirname, '..', relPath)

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    resolve('src/index.js')
  ],

  output: {
    filename: '[hash].js',
    path: resolve('build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: loader => [
                require('postcss-cssnext')(),
                require('autoprefixer')()
              ]
            }
          }
        ]
      }
    ]
  },

  devtool: 'inline-source-map',

  devServer: {
    port: 3000,
    hot: true,
    contentBase: resolve('build')
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlPlugin({template: resolve('src/index.html')})
  ]
}
