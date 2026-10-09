/**
 * Prefixes a site-relative path with the configured base, so links work both at the
 * domain root and under a GitHub Pages project path such as /portfolio/.
 * withBase('/#ask') -> '/portfolio/#ask'. Absolute URLs are returned unchanged.
 */
export function withBase(path: string): string {
  if (/^[a-z]+:/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
