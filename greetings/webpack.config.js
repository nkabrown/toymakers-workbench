const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname,
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  devtool: debug ? 'sourcemap' : null,
  module: {
    loaders: [
      { test: /\.js?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: { presets: [ 'es2015', 'react' ] } }
    ]
  }
}
