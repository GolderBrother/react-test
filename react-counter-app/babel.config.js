module.exports = {
    presets: [
        ['@babel/preset-env',
            {
                targets: {
                    // 编译成当前的node版本
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript',
        '@babel/preset-react'
    ]
}