const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname + '/app',
  output: {
    path: __dirname + '/bundle',
    filename: 'bundle.js'
  },
  entry: ['babel-polyfill' , 'app.js'],
  devServer: {
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
                "presets": ["react", "es2015", "stage-3"]
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['app', 'node_modules'],
    extensions: ['', '.js', '.jsx', 'css'],
    alias: {
      'd3': 'd3/build/d3.js'
    }
  },
  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' })
  ]
}
