import type { Preview } from '@storybook/react-vite'
import { createElement, useEffect } from 'react'

import './preview.css'
// aug engine (CSS-only): clips [data-augmented-ui] corners in stories
import 'augmented-ui'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    options: {
      storySort: {
        order: ['Design Tokens', 'Components', 'Blocks'],
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      toolbar: {
        icon: 'mirror',
        dynamicTitle: true,
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals['theme'] === 'dark' ? 'dark' : 'light'

      useEffect(() => {
        const root = document.documentElement
        root.classList.toggle('dark', theme === 'dark')
        root.style.colorScheme = theme

        return () => {
          root.classList.remove('dark')
          root.style.colorScheme = ''
        }
      }, [theme])

      return createElement(Story)
    },
  ],
}

export default preview
