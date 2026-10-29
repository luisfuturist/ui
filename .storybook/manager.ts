import { addons } from 'storybook/manager-api'
import { GLOBALS_UPDATED, SET_GLOBALS } from 'storybook/internal/core-events'
import { themes } from 'storybook/theming'

function applyTheme(theme?: string) {
  addons.setConfig({ theme: theme === 'dark' ? themes.dark : themes.light })
}

const channel = addons.getChannel()
channel.on(SET_GLOBALS, ({ globals }) => applyTheme(globals['theme']))
channel.on(GLOBALS_UPDATED, ({ globals }) => applyTheme(globals['theme']))
