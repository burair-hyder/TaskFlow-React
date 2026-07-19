import {
  FILTER_STATUSES,
  FILTER_PRIORITIES,
  FILTER_CATEGORIES,
  SORT_OPTIONS,
} from '../utils/constants';

export default function FilterBar({ filters, onFilterChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  const handleClear = () => {
    onFilterChange({
      search: '',
      status: 'all',
      priority: 'all',
      category: 'all',
      sort: 'newest',
    });
  };

  const hasActiveFilters =
    filters.search ||
    filters.status !== 'all' ||
    filters.priority !== 'all' ||
    filters.category !== 'all' ||
    filters.sort !== 'newest';

  return (
    <div className="filter-bar">
      <div className="filter-bar__row">
        <div className="filter-bar__group">
          <label htmlFor="status" className="sr-only">Filter by status</label>
          <select
            id="status"
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="filter-bar__select"
          >
            {FILTER_STATUSES.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="filter-bar__group">
          <label htmlFor="priority" className="sr-only">Filter by priority</label>
          <select
            id="priority"
            name="priority"
            value={filters.priority}
            onChange={handleChange}
            className="filter-bar__select"
          >
            {FILTER_PRIORITIES.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="filter-bar__group">
          <label htmlFor="category" className="sr-only">Filter by category</label>
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="filter-bar__select"
          >
            {FILTER_CATEGORIES.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="filter-bar__group">
          <label htmlFor="sort" className="sr-only">Sort tasks</label>
          <select
            id="sort"
            name="sort"
            value={filters.sort}
            onChange={handleChange}
            className="filter-bar__select"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            className="btn btn-sm btn-ghost"
            onClick={handleClear}
            title="Clear all filters"
            aria-label="Clear all filters"
          >
            ✕ Clear
          </button>
        )}
      </div>
    </div>
  );
}