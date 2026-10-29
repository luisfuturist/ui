import { defineConfig } from 'vite'
import pkg from './package.json' with { type: 'json' }

export default defineConfig({
  esbuild: { jsx: 'automatic' },
  build: {
    lib: { entry: 'src/index.ts', formats: ['es'], fileName: 'index' },
    rollupOptions: {
      external: [
        /^react(\/|$)/,
        /^react-dom(\/|$)/,
        /^~icons\//,
        ...Object.keys(pkg.dependencies),
      ],
    },
  },
})
