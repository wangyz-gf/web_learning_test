module.exports = {
    devServer: {
        proxy: {
            'ajax': {
                target: 'http://localhost:8080/',
                // ws: true,
                changeOrigin: true
            }
            /*  '/foo': {
                 target: '<other_url>'
             } */
        }
    }
}