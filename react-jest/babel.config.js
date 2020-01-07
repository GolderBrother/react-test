module.exports = {
    presets: [
        [
            "@babel/preset-env", {
                targets: {
                    // 将当前代码转换成当前node的版本
                    node: "current"
                }
            }
        ],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ]
}