module.exports = {
    devServer: {
        proxy: {
            'ajax': {
                target: 'v',
                // ws: true,
                changeOrigin: true
            }
            /*  '/foo': {
                 target: '<other_url>'
             } */
        }
    }
}