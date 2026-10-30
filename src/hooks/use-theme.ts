import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark' || value === 'system'
}

export function getStoredTheme(): Theme {
  if (typeof localStorage === 'undefined')
    return 'system'
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  return isTheme(stored) ? stored : 'system'
}

export function resolveTheme(theme: Theme): ResolvedTheme {
  if (theme !== 'system')
    return theme
  if (typeof window === 'undefined')
    return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyTheme(resolved: ResolvedTheme) {
  document.documentElement.classList.toggle('dark', resolved === 'dark')
}

export interface UseThemeReturn {
  /** Stored preference: `light`, `dark` or `system`. `system` until mounted. */
  theme: Theme
  /** Effective theme after resolving `system` against `prefers-color-scheme`. */
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
  /** Cycle through the given themes (default: light → dark → system). */
  cycleTheme: (order?: Theme[]) => void
}

/**
 * Class-based theme state — toggles `.dark` on `<html>` and persists the
 * preference (including `system`) to `localStorage['theme']`. Provider-free,
 * so it works inside isolated React islands (Astro, etc.).
 *
 * Pair it with an inline script in `<head>` to set the class before paint:
 *
 * ```html
 * <script is:inline>
 *   ;(function(){var t='system';try{t=localStorage.getItem('theme')||'system'}catch(e){}
 *   var d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);
 *   document.documentElement.classList.toggle('dark',d)})()
 * </script>
 * ```
 */
export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light')

  // Read the stored preference once mounted (never during SSR).
  useEffect(() => {
    setThemeState(getStoredTheme())
  }, [])

  // Apply the class and keep it in sync with `prefers-color-scheme`
  // while `system` is selected.
  useEffect(() => {
    const resolved = resolveTheme(theme)
    applyTheme(resolved)
    setResolvedTheme(resolved)

    if (theme !== 'system')
      return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const r = resolveTheme('system')
      applyTheme(r)
      setResolvedTheme(r)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    }
    catch {}
  }, [])

  const cycleTheme = useCallback(
    (order: Theme[] = ['light', 'dark', 'system']) => {
      setTheme(order[(order.indexOf(theme) + 1) % order.length])
    },
    [theme, setTheme],
  )

  return { theme, resolvedTheme, setTheme, cycleTheme }
}
