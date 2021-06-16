module.exports = {
    devServer: {
        proxy: {
            'ajax': {
                target: '<url>',
                // ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}