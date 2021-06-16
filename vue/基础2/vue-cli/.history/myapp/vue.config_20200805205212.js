module.exports = {
    devServer: {
        proxy: {
            'ajax': {
                target: 'http://m.maovan.com/',
                // ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}