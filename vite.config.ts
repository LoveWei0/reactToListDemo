import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// path->join
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 路径别名
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      '@store': join(__dirname, 'src/store'),
      '@pages': join(__dirname, 'src/pages'),
      '@app': join(__dirname, 'src/app'),
      '@style': join(__dirname, 'src/style'),
      '@utils': join(__dirname, 'src/utils')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4523/m1/2917686-0-default',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
