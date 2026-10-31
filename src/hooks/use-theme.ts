import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export const THEME_COOKIE = 'theme'

/**
 * Canonical anti-FOUC snippet — reads the `theme` cookie and applies
 * `.dark` before paint. Render it inside an inline `<script>` in `<head>`.
 */
export const THEME_INIT_SCRIPT
  = '(function(){var t=null;try{var m=document.cookie.match(/(?:^|;)\\s*'
    + `${THEME_COOKIE}=([^;]*)/);t=m?m[1]:null}catch(e){}if(t!=='light'`
    + `&&t!=='dark'&&t!=='system')t='system';var d=t==='dark'`
    + `||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);`
    + `document.documentElement.classList.toggle('dark',d)})()`

function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark' || value === 'system'
}

/** Parent-domain scope for the shared cookie (e.g. `.luisfuturist.com`). */
function getCookieDomain(): string | null {
  if (typeof location === 'undefined')
    return null
  const h = location.hostname
  if (h === 'localhost' || /^\d{1,3}(\.\d{1,3}){3}$/.test(h) || !h.includes('.'))
    return null
  return `.${h.split('.').slice(-2).join('.')}`
}

function readCookieTheme(): Theme | null {
  if (typeof document === 'undefined')
    return null
  const m = document.cookie.match(new RegExp(`(?:^|;)\\s*${THEME_COOKIE}=([^;]*)`))
  return m && isTheme(m[1]) ? m[1] : null
}

/**
 * Write the `theme` cookie. Scoped to the parent domain when the host has
 * one (`.luisfuturist.com` covers every subdomain); otherwise a host-only
 * cookie — which is enough for `localhost` and single-label hosts.
 */
function writeCookieTheme(theme: Theme) {
  if (typeof document === 'undefined')
    return
  const domain = getCookieDomain()
  const scope = domain ? ` domain=${domain};` : ''
  document.cookie = `${THEME_COOKIE}=${theme};${scope} path=/; max-age=31536000; samesite=lax`
}

export function getStoredTheme(): Theme {
  // The cookie is the single source of truth — shared across subdomains on
  // real domains, host-only on localhost.
  return readCookieTheme() ?? 'system'
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
 * preference in a cookie scoped to the parent domain so the choice is
 * shared across subdomains (e.g. `luisfuturist.com` ↔ `blog.luisfuturist.com`).
 * Provider-free, so it works inside isolated React islands (Astro, etc.).
 *
 * Pair with `THEME_INIT_SCRIPT` rendered inside an inline `<script>` in
 * `<head>` to set the class before paint.
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
    writeCookieTheme(next)
  }, [])

  const cycleTheme = useCallback(
    (order: Theme[] = ['light', 'dark', 'system']) => {
      setTheme(order[(order.indexOf(theme) + 1) % order.length])
    },
    [theme, setTheme],
  )

  return { theme, resolvedTheme, setTheme, cycleTheme }
}
