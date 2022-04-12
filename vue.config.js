module.exports = {
    publicPath: './',
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '在线工具 - 我的工具箱'
            return args
        })
    }
}