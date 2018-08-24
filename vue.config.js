module.exports = {
    devServer: {
        proxy: {
            "/api_v1": {
                target: "https://jfq.ajin.me",
                changeOrigin: true,
                pathRewrite: {
                    "^/api_v1": "/api_v1"
                }
            },
            "/api": {
                target: "https://jfq.ajin.me",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/api"
                }
            },
            "/other": {
                target: "https://jfq.ajin.me",
                changeOrigin: true,
                pathRewrite: {
                    "^/other": "/other"
                }
            }
        }
    }
};
