module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            },
        }
    },

    transpileDependencies: [
      'vuetify',
      'quasar'
    ],

    pluginOptions: {
      quasar: {
        importStrategy: 'kebab',
        rtlSupport: true
      }
    }
}
