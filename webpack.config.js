const path = require('path')

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'remember-scroll.js',
    library: 'RememberScroll',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}
