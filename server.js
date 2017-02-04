const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const config = require('./webpack/production')

const server = new WebpackDevServer(webpack(config), {
  contentBase: './src',
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    chunks: false,
    colors: true,
  },
})

server.listen(8000, 'localhost', function (err, result) {
  if (err) console.log(err)

  console.log('Listening at localhost:8000')
})
