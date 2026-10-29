import type { StorybookConfig } from '@storybook/react-vite'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [tailwindcss(), Icons({ compiler: 'jsx' })],
    }),
}

export default config
