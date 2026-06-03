import { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import Button from '../../components/Button';
import { BROWSE_PRODUCTS, BROWSE_CATEGORIES } from './browse-products';

// "All" plus every product category — drives the filter row.
const FILTERS = ['All', ...BROWSE_CATEGORIES];

/**
 * BrowsePage — feature screen that lists placeholder products in a single
 * responsive grid of ProductCards, with a category filter row.
 *
 * Each card surfaces its own category badge, so the grid needs no per-category
 * section headings. Saved state and the active filter are owned here. Nothing is
 * persisted — saving and filtering only affect in-memory UI state.
 */
function BrowsePage() {
  const [savedIds, setSavedIds] = useState(() => new Set());
  const [activeFilter, setActiveFilter] = useState('All');

  const toggleSaved = (id) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const products = BROWSE_PRODUCTS.filter(
    (product) =>
      !product.isBestMatch &&
      (activeFilter === 'All' || product.category === activeFilter)
  );

  return (
    <main className="mx-auto max-w-content px-6 py-8">
      <header className="mb-6">
        <h1 className="text-h2 font-semibold text-primary">Browse</h1>
        <p className="mt-2 text-body text-secondary">
          Explore clean-rated products across every category.
        </p>
      </header>

      {/* Category filter row — active filter is the single primary button */}
      <div
        role="group"
        aria-label="Filter products by category"
        className="mb-8 flex flex-wrap gap-2"
      >
        {FILTERS.map((filter) => (
          <Button
            key={filter}
            label={filter}
            size="sm"
            variant={activeFilter === filter ? 'primary' : 'secondary'}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </div>

      <ul className="grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              name={product.name}
              safetyLevel={product.safetyLevel}
              category={product.category}
              description={product.description}
              attributes={product.attributes}
              isBestMatch={product.isBestMatch}
              preferenceNote={product.preferenceNote}
              isSaved={savedIds.has(product.id)}
              onToggleSave={() => toggleSaved(product.id)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default BrowsePage;
