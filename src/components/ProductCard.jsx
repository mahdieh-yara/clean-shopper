import SafetyBadge from './SafetyBadge';
import CategoryTag from './CategoryTag';
import Button from './Button';

/**
 * ProductCard — primary output unit for an AI-surfaced product.
 *
 * Props (required):
 *   name          string                         Product name
 *   safetyLevel   'clean' | 'caution' | 'avoid'  Drives SafetyBadge color + label
 *   category      string                         Product category; always rendered
 *                                                as its own badge inside the card
 *   description   string                         One- to two-sentence product summary
 *
 * Props (optional):
 *   attributes     string[]      Certification / attribute labels (e.g. "EWG Verified",
 *                                "Cruelty-Free"). Rendered as CategoryTags, max 3 shown
 *                                with a "+N more" tag for the remainder.
 *   imageUrl       string|null   Product image; renders a 1:1 zone above card content
 *   isBestMatch    boolean       Renders "✦ Best match" chip above the card
 *   preferenceNote string        Preference match note shown below the description
 *   isSaved        boolean       Saved state for the "Save to list" action
 *   onToggleSave   () => void    When provided, renders a "Save to list" toggle button
 *                                pinned to the bottom of the card
 *   onClick        () => void    Makes the card interactive; expands to detail view
 */
function ProductCard({
  name,
  safetyLevel,
  category,
  description,
  attributes,
  imageUrl,
  isBestMatch,
  preferenceNote,
  isSaved = false,
  onToggleSave,
  onClick,
}) {
  const clickable = typeof onClick === 'function';
  const savable = typeof onToggleSave === 'function';

  // The product category renders as its own badge. Certification / attribute
  // tags render below it, capped at three visible with a "+N more" overflow tag.
  const attributeTags = Array.isArray(attributes) ? attributes : [];
  const visibleTags = attributeTags.slice(0, 3);
  const hiddenCount = attributeTags.length - visibleTags.length;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(event);
    }
  };

  const handleSave = (event) => {
    // Keep a save click from bubbling up to an expandable (clickable) card.
    if (event && typeof event.stopPropagation === 'function') {
      event.stopPropagation();
    }
    onToggleSave();
  };

  return (
    <div className="flex h-full flex-col">
      {/*
        Best-match chip — rendered above the card, not inside it. The slot is
        always reserved (fixed height) even when not a best match, so cards in a
        row share a common top edge and the chip never shifts the card down.
      */}
      <div className="mb-2 h-7">
        {isBestMatch && (
          <span className="inline-flex items-center gap-1 rounded-full bg-leaf-100 px-3 py-1 text-caption font-medium text-leaf-600">
            <span aria-hidden="true">✦</span>
            Best match
          </span>
        )}
      </div>

      <article
        onClick={clickable ? onClick : undefined}
        onKeyDown={clickable ? handleKeyDown : undefined}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        className={`flex flex-1 flex-col rounded-md border border-neutral-200 bg-surface-card p-6 shadow-none transition-colors duration-fast ${
          clickable ? 'cursor-pointer hover:border-neutral-300' : ''
        }`}
      >
        {/* Optional product image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="mb-4 aspect-square w-full rounded-sm bg-surface-warm object-contain mix-blend-multiply"
          />
        )}

        {/* Name + SafetyBadge row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-h4 font-semibold text-primary">{name}</h3>
          <SafetyBadge level={safetyLevel} size="sm" />
        </div>

        {/* Category badge — distinguished `category` variant, first row after title */}
        <div className="mt-3">
          <CategoryTag label={category} variant="category" />
        </div>

        {/* Description */}
        <p className="mt-3 text-body text-secondary">{description}</p>

        {/* Optional preference note — left-bordered callout */}
        {preferenceNote && (
          <p className="mt-3 border-l-2 border-leaf-500 pl-2 text-small text-secondary">
            {preferenceNote}
          </p>
        )}

        {/* Certification / attribute tags (max 3 + "+N more"), after the paragraph */}
        {attributeTags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {visibleTags.map((label) => (
              <CategoryTag key={label} label={label} />
            ))}
            {hiddenCount > 0 && <CategoryTag label={`+${hiddenCount} more`} />}
          </div>
        )}

        {/* Save-to-list action, pinned to the bottom so cards in a row align */}
        {savable && (
          <div className="mt-auto pt-4">
            <Button
              variant={isSaved ? 'primary' : 'secondary'}
              size="sm"
              label={isSaved ? '✓ Saved to list' : 'Save to list'}
              onClick={handleSave}
            />
          </div>
        )}
      </article>
    </div>
  );
}

export default ProductCard;
