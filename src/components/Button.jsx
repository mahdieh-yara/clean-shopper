/**
 * Button — user-initiated action trigger. (Component spec #6)
 *
 * Variants signal relative importance:
 *   primary    leaf-filled, inverse text — the single most important action
 *   secondary  outlined — supplementary actions (e.g. "Save to list", "Dismiss")
 *
 * Spec token names (sage/moss/warm-white) map to the real tokens in
 * src/lib/tokens.js: sage → leaf-500, moss → leaf-600, warm-white → inverse.
 *
 * Props (required):
 *   label     string                     Button text
 *   variant   'primary' | 'secondary'    Visual style
 *   onClick   () => void                 Action handler
 *
 * Props (optional):
 *   disabled  boolean              Prevents interaction
 *   isLoading boolean              Shows inline dots, disables click
 *   size      'default' | 'sm'     'sm' uses reduced padding (defaults 'default')
 */

const VARIANTS = {
  primary: 'bg-leaf-500 text-inverse hover:bg-leaf-600',
  secondary:
    'border border-leaf-500 bg-transparent text-leaf-500 hover:border-leaf-600 hover:text-leaf-600',
};

const SIZES = {
  default: 'px-6 py-3',
  sm: 'px-4 py-2',
};

function Button({
  label,
  variant = 'primary',
  onClick,
  disabled = false,
  isLoading = false,
  size = 'default',
}) {
  const variantClasses = VARIANTS[variant] || VARIANTS.primary;
  const sizeClasses = SIZES[size] || SIZES.default;
  const isDisabled = disabled || isLoading;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      className={`inline-flex items-center justify-center gap-1 rounded-full text-small font-semibold transition-colors duration-fast ${variantClasses} ${sizeClasses} ${
        isDisabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
    >
      {isLoading ? (
        <span className="inline-flex gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current [animation-delay:300ms]" />
        </span>
      ) : (
        label
      )}
    </button>
  );
}

export default Button;
