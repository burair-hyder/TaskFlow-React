import { PRIORITY_COLORS, STATUS_COLORS } from '../utils/constants';

function formatDate(dateStr) {
  if (!dateStr) return null;
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function isOverdue(task) {
  if (!task.dueDate || task.status === 'done') return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(task.dueDate) < today;
}

export default function TaskCard({ task, onEdit, onDelete, onToggleStatus }) {
  const overdue = isOverdue(task);
  const statusColor = STATUS_COLORS[task.status] || '#6b7280';
  const priorityColor = PRIORITY_COLORS[task.priority] || '#6b7280';

  const statusLabel =
    task.status === 'todo'
      ? 'To Do'
      : task.status === 'in-progress'
        ? 'In Progress'
        : 'Done';

  const priorityLabel =
    task.priority.charAt(0).toUpperCase() + task.priority.slice(1);

  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this task?'
    );
    if (confirmed) {
      onDelete(task.id);
    }
  };

  return (
    <article
      className={`task-card ${overdue ? 'task-card--overdue' : ''} ${task.status === 'done' ? 'task-card--done' : ''}`}
      aria-label={`Task: ${task.title}`}
    >
      <div className="task-card__header">
        <h3 className="task-card__title">{task.title}</h3>
        <div className="task-card__badges">
          <span
            className="badge badge--priority"
            style={{ backgroundColor: priorityColor }}
          >
            {priorityLabel}
          </span>
          <span
            className="badge badge--status"
            style={{ backgroundColor: statusColor }}
          >
            {statusLabel}
          </span>
        </div>
      </div>

      {task.description && (
        <p className="task-card__description">{task.description}</p>
      )}

      <div className="task-card__meta">
        {task.category && (
          <span className="task-card__category">{task.category}</span>
        )}
        {task.dueDate && (
          <span className={`task-card__due-date ${overdue ? 'task-card__due-date--overdue' : ''}`}>
            {overdue ? 'Overdue: ' : 'Due: '}
            {formatDate(task.dueDate)}
          </span>
        )}
      </div>

      <div className="task-card__actions">
        <button
          type="button"
          className="btn btn-sm btn-outline"
          onClick={() => onToggleStatus(task.id)}
          aria-label={
            task.status === 'done' ? 'Reopen task' : 'Mark task as complete'
          }
          title={
            task.status === 'done' ? 'Reopen' : 'Mark complete'
          }
        >
          {task.status === 'done' ? '↩ Reopen' : '✓ Complete'}
        </button>

        <button
          type="button"
          className="btn btn-sm btn-outline"
          onClick={() => onEdit(task)}
          aria-label="Edit task"
          title="Edit"
        >
          ✎ Edit
        </button>

        <button
          type="button"
          className="btn btn-sm btn-outline btn-danger"
          onClick={handleDelete}
          aria-label="Delete task"
          title="Delete"
        >
          ✕ Delete
        </button>
      </div>
    </article>
  );
}