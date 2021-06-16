module.exports = {
    devServer: {
        proxy: {
            'ajax': {
                target: "http://m.maovan.com/"
            }
        }
    }

}