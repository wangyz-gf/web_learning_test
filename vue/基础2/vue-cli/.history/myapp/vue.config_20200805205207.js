module.exports = {
    devServer: {
        proxy: {
            'ajax': {
                target: 'http://',
                // ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}