/**
 * CategoryTag — compact pill label for a product certification, attribute,
 * product category, or (when `variant="flagged"`) an AI-identified ingredient
 * concern.
 *
 * Props:
 *   label:    string                                 (required)
 *   variant:  'default' | 'category' | 'flagged'     (optional, defaults to 'default')
 *   onRemove: () => void                             (optional; renders a remove button)
 *
 * Variants:
 *   default   sage tint — certifications and attribute tags
 *   category  warm sand tint, heavier weight — the product's category label,
 *             visually distinct from the sage certification tags
 *   flagged   terracotta tint with flag prefix — AI-flagged ingredient concerns only
 */

const VARIANTS = {
  default: 'bg-leaf-100 text-leaf-600',
  category: 'bg-sand-200 text-neutral-700 font-semibold',
  flagged: 'bg-error/10 text-error',
};

function CategoryTag({ label, variant = 'default', onRemove }) {
  const variantClasses = VARIANTS[variant] || VARIANTS.default;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-caption font-medium ${variantClasses}`}
    >
      {variant === 'flagged' && <span aria-hidden="true">⚑</span>}
      {label}
      {typeof onRemove === 'function' && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${label}`}
          className="ml-1 text-neutral-500 transition-colors duration-fast hover:text-primary"
        >
          ×
        </button>
      )}
    </span>
  );
}

export default CategoryTag;
