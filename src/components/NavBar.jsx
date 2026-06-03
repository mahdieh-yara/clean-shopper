/**
 * NavBar — persistent app-shell top navigation.
 *
 * Orients the user and provides access to Search, Preferences, and Cart
 * from any screen. The active destination is signaled by color alone (leaf),
 * with no underline or pill, per design-system.md.
 *
 * Props (required):
 *   activeView  'search' | 'preferences' | 'cart'   Drives active indicator
 *   onNavigate  (view) => void                       Called when a nav item is tapped
 *
 * Props (optional):
 *   cartCount   number   Item count; renders a count badge on Cart when > 0
 */

const NAV_ITEMS = [
  { view: 'search', label: 'Search' },
  { view: 'preferences', label: 'Preferences' },
  { view: 'cart', label: 'Cart' },
];

function NavBar({ activeView, onNavigate, cartCount = 0 }) {
  return (
    <header className="flex items-center justify-between border-b border-neutral-200 bg-surface-card px-6 py-4">
      <span className="text-h4 font-semibold text-primary">Clean Shopper</span>

      <nav className="flex items-center gap-6">
        {NAV_ITEMS.map(({ view, label }) => {
          const isActive = view === activeView;
          const showBadge = view === 'cart' && cartCount > 0;

          return (
            <button
              key={view}
              type="button"
              onClick={() => onNavigate(view)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={
                showBadge
                  ? `${label}, ${cartCount} item${cartCount === 1 ? '' : 's'}`
                  : undefined
              }
              className={`inline-flex items-center text-small transition-colors duration-fast ${
                isActive
                  ? 'font-semibold text-leaf-500'
                  : 'font-medium text-secondary hover:text-primary'
              }`}
            >
              {label}
              {showBadge && (
                <span
                  aria-hidden="true"
                  className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-leaf-500 text-caption font-semibold leading-none text-inverse"
                >
                  {cartCount}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}

export default NavBar;
