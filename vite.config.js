import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Quasar Config
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
const {resolve} = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
      {
        template: { transformAssetUrls }
      }
  ), quasar({
        sassVariables: 'src/quasar-variables.sass'
      })
  ],
    resolve:{
      //配置路径别名
      alias:{
          '@': resolve(__dirname,'src')
      }
    }
})
