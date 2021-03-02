const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('theme', resolve('src/assets/style/theme'))
      .set('config', resolve('src/config'))
      .set('utils', resolve('src/utils'))
      .set('components', resolve('src/components'))
      .end()

    config.resolve.extensions
      .add('ts')
  }
}
