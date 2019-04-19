// 生成器
module.exports = (api, options, rootOptions) => {
  // 公共基础目录和文件
  api.render('./template/default')
  // 配置文件
  api.render({
    './.gitignore': './template/_gitignore'
  })
}