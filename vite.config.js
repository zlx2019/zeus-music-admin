import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Quasar Config
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
      {
        template: { transformAssetUrls }
      }
  ),
      quasar({
        sassVariables: 'src/quasar-variables.sass'
      })
  ]
})
