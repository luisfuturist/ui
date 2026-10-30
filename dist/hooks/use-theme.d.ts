export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';
export declare const THEME_STORAGE_KEY = "theme";
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
export declare function useTheme(): UseThemeReturn;
