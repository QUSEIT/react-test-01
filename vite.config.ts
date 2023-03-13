import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname,"src/components"),
      "@/assets": path.resolve(__dirname,"src/assets"),
      "@/redux": path.resolve(__dirname,"src/redux"),
      "@/service": path.resolve(__dirname,"src/service"),
      "@/constant": path.resolve(__dirname,"src/constant"),
      "@/utils": path.resolve(__dirname,"src/utils")
    }
  },
  css: {
    postcss: {
      plugins:[
        postCssPxToRem({
          rootValue: 75,
          propList: ['*']
        })
      ]
    }
  }
})
