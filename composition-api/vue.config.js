const path = require('path');

module.exports = {
  devServer: {
      port: 8080
  },
  productionSourceMap: true,
  outputDir: 'dist',
  /* publicPath is used when we execute "npm run build" to prefix references for script/css files */
  publicPath: './',
  /* chainWebpack/configureWebpack so that npm run build does not produce hashed file names under dist/ folder */
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))

    if (config.plugins.has('html')) {
      const htmlPlugin = config.plugin('html');
      if (htmlPlugin) {
        htmlPlugin.tap(args => {
          args[0].title = 'Vue 3 Large Scale Apps with TypeScript Sample Project';
          return args;
        });
      }
    }

    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css');
      extractCSSPlugin && extractCSSPlugin.tap(() => [{
        filename: '[name].css',
        chunkFilename: '[name].css'
      }])
    }

    if (process.env.NODE_ENV === 'production') {
      // if we need to make exception for some things that should not go into the dist folder
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
