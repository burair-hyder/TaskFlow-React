import TaskCard from './TaskCard';
import EmptyState from './EmptyState';

export default function TaskList({ tasks, onEdit, onDelete, onToggleStatus }) {
  if (!tasks || tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className="task-list" aria-label="Task list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </section>
  );
}