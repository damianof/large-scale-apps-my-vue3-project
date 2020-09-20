const path = require('path');

module.exports = {
  productionSourceMap: false,
  outputDir: './lib',
  /* publicPath is used when we execute "npm run build" to prefix references for script/css files */
  publicPath: './',
  /* additional webpack configuration */
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))

    if (process.env.NODE_ENV === 'production') {
      // if we need to make exception for some things that should not go into the lib folder
    }
  },
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src')
      }
    }
  }
}
