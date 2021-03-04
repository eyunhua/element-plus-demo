module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    // [
    //   'component',
    //   {
    //     libraryName: 'element-plus',
    //     // styleLibraryName: '~src/theme'
    //     styleLibraryName: 'theme2'
    //   }
    // ]
    ['import', {
      libraryName: 'element-plus',
      libraryDirectory: 'es',
      // style: (name) => `${name}/style/less`
      customStyleName: name => {
        return `theme/${name}.less`
      }
    }, 'element-plus']
  ]
}
