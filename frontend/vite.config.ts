import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '',
  test: {
    environment: 'jsdom',
    reporters: ['default', 'junit'],
    outputFile: 'test-results/results.xml'
  }
})
