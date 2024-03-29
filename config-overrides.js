const {override, fixBabelImports, addLessLoader, addWebpackAlias} = require('customize-cra')
const path = require('path')
module.exports = override(
  // 针对antd实现按需打包：根据import来打包(使用bable-plugin-import)
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true, // 自动打包相关的样式
  }),
  // 使用less-loader对源码中的less的变量进行重新指定
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#0078e7',
    //   '@text-color': '#F7B2C4'
    },
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
)
