/**
 * SafetyBadge — colored pill communicating a product's safety level with an
 * icon AND a text label, so the rating is never conveyed by color alone
 * (per design-system.md accessibility rules).
 *
 * Props:
 *   level: 'clean' | 'caution' | 'avoid'   (required)
 *   size:  'default' | 'sm'                 (optional, defaults to 'default')
 */

const LEVELS = {
  clean: { icon: '✓', label: 'Clean', bg: 'bg-success' },
  caution: { icon: '⚠', label: 'Caution', bg: 'bg-warning' },
  avoid: { icon: '✕', label: 'Avoid', bg: 'bg-error' },
};

const SIZES = {
  default: 'gap-1 px-3 py-1 text-caption',
  sm: 'gap-1 px-2 py-1 text-caption',
};

function SafetyBadge({ level, size = 'default' }) {
  const { icon, label, bg } = LEVELS[level] || LEVELS.caution;
  const sizeClasses = SIZES[size] || SIZES.default;

  return (
    <span
      role="img"
      aria-label={`Safety rating: ${label}`}
      title={`Safety rating: ${label}`}
      className={`inline-flex shrink-0 items-center rounded-full font-semibold uppercase text-inverse ${bg} ${sizeClasses}`}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </span>
  );
}

export default SafetyBadge;
