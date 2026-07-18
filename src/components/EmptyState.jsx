import { ClipboardList, SearchX } from 'lucide-react';

export default function EmptyState({ type = 'empty', onAddTask, onClearFilters }) {
  const isFiltered = type === 'filtered';

  return (
    <div className="empty-state">
      <div className="empty-state__icon">
        {isFiltered ? <SearchX size={64} /> : <ClipboardList size={64} />}
      </div>
      <h3 className="empty-state__title">
        {isFiltered ? 'No tasks match your filters' : 'Your task board is empty'}
      </h3>
      <p className="empty-state__text">
        {isFiltered
          ? 'Try adjusting your search or filter criteria to find what you\'re looking for.'
          : 'Stay organised and productive. Create your first task to get started.'}
      </p>
      <div className="empty-state__actions">
        {isFiltered ? (
          <button type="button" className="btn btn-outline" onClick={onClearFilters}>
            Clear Filters
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={onAddTask}>
            Add Your First Task
          </button>
        )}
      </div>
    </div>
  );
}