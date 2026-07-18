export default function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="12" y2="17" />
        </svg>
      </div>
      <h3 className="empty-state__title">No tasks yet</h3>
      <p className="empty-state__text">
        Get started by adding your first task using the button below.
      </p>
    </div>
  );
}