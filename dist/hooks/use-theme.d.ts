export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';
export declare const THEME_STORAGE_KEY = "theme";
export declare const THEME_COOKIE = "theme";
/**
 * Canonical anti-FOUC snippet — reads the cookie first (shared across
 * subdomains), then `localStorage`, and applies `.dark` before paint.
 * Render it inside an inline `<script>` in `<head>`.
 */
export declare const THEME_INIT_SCRIPT: string;
export declare function getStoredTheme(): Theme;
export declare function resolveTheme(theme: Theme): ResolvedTheme;
export interface UseThemeReturn {
    /** Stored preference: `light`, `dark` or `system`. `system` until mounted. */
    theme: Theme;
    /** Effective theme after resolving `system` against `prefers-color-scheme`. */
    resolvedTheme: ResolvedTheme;
    setTheme: (theme: Theme) => void;
    /** Cycle through the given themes (default: light → dark → system). */
    cycleTheme: (order?: Theme[]) => void;
}
/**
 * Class-based theme state — toggles `.dark` on `<html>` and persists the
 * preference to `localStorage` plus a parent-domain cookie so the choice is
 * shared across subdomains (e.g. `luisfuturist.com` ↔ `blog.luisfuturist.com`).
 * Provider-free, so it works inside isolated React islands (Astro, etc.).
 *
 * Pair with `THEME_INIT_SCRIPT` rendered inside an inline `<script>` in
 * `<head>` to set the class before paint.
 */
export declare function useTheme(): UseThemeReturn;
