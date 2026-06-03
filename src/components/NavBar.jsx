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

// Inline cart glyph; inherits the nav item's text color via currentColor.
function CartIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-1 h-4 w-4 shrink-0"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

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
              className={`inline-flex items-center rounded-full px-2 py-1 text-small transition-colors duration-fast ${
                isActive
                  ? 'font-semibold text-leaf-500'
                  : 'font-medium text-secondary hover:bg-neutral-100 hover:text-leaf-500'
              }`}
            >
              {view === 'cart' && <CartIcon />}
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
