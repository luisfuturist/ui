import type { Meta, StoryObj } from '@storybook/react-vite'
import MaterialLanguageSharp from '~icons/material-symbols/language-sharp'

import {
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from '../components/ui/dropdown-menu'
import { useState } from 'react'
import { SettingsMenu } from './settings-menu'

const meta = {
  title: 'Blocks/SettingsMenu',
  component: SettingsMenu,
  parameters: {
    docs: {
      description: {
        component:
          'Augmented gear trigger opening a settings dropdown: a label, '
          + 'the `ThemeToggleMenuItems` radio group, and a `children` '
          + 'slot for extra sections (language pickers and friends). '
          + 'Labels are overridable for i18n; `trigger`, `showTheme` '
          + 'and menu alignment are too.',
      },
    },
  },
} satisfies Meta<typeof SettingsMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex justify-end p-8">
      <SettingsMenu />
    </div>
  ),
}

function LanguageItems() {
  const [lang, setLang] = useState('en')
  return (
    <>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Language</DropdownMenuLabel>
      <DropdownMenuRadioGroup value={lang} onValueChange={setLang}>
        <DropdownMenuRadioItem value="en">
          <MaterialLanguageSharp className="size-6" />
          English
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="pt-br">
          <MaterialLanguageSharp className="size-6" />
          Português
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="zh">
          <MaterialLanguageSharp className="size-6" />
          中文
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </>
  )
}

export const WithLanguage: Story = {
  name: 'With language section',
  render: () => (
    <div className="flex justify-end p-8">
      <SettingsMenu>
        <LanguageItems />
      </SettingsMenu>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Children slot in extra menu sections — here a language '
          + 'radio group, matching how apps compose theme + language '
          + 'inside one settings menu.',
      },
    },
  },
}
