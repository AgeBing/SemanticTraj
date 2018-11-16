const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BowerResolvePlugin = require("bower-resolve-webpack-plugin");
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');
const BUILD_PATH = path.resolve(__dirname, 'build');
const PUBLIC_PATH = '.';
const webpack = require('webpack');
// const options = loaderUtils.getOptions(this);
process.traceDeprecation = true;
module.exports = {
  resolve: {
    plugins: [new BowerResolvePlugin()],
    modules:[
      path.resolve(__dirname, 'public'),
      'bower_components',
      'node_modules',
    ],
    descriptionFiles: ["package.json", "bower.json"],
    mainFields: ["browser", "module", "main"],
    mainFiles: ["index", 'main'],
    aliasFields: ["browser"],
    extensions: [".js", ".json"],
    alias: {
      jQuery: 'jquery/src/jquery',
      tinycolor: 'tinycolor/tinycolor'
    }
  },
  entry: [path.resolve(__dirname, 'public/js/main.js')],
  output: {
    filename: '[name].js',
    path: BUILD_PATH,
    // publicPath: PUBLIC_PATH,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets:['es2017'],
          compact: false,
        },
      },
      {
        test: /\.less$/,
        use: extractLESS.extract([ 'css-loader', 'less-loader' ])
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader", 
        //   use: ["less-loader", 'css-loader']
        // }),
      },
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader'])
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: "css-loader",
        // })
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]',
      },
      {
        test: /\.(eot|woff|ttf|woff2)$/,
        loader: 'url-loader'
      },
    ]
  },
  plugins: [
    extractCSS,
    extractLESS,
    // new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      title: 'EVT',
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      tinycolor: 'tinycolor'
    }),
    ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
  }
};