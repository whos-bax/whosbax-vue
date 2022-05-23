const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/variables.scss";
        `,
      },
    },
  },

};