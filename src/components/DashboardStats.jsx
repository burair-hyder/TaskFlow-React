import {
  ListTodo,
  CheckCircle2,
  Clock,
  Loader2,
  AlertTriangle,
  CalendarClock,
} from 'lucide-react';
import { useTasks } from '../context/TaskContext';

function StatCard({ icon: Icon, label, count, color, accent }) {
  return (
    <div className="stat-card">
      <div className="stat-card__icon" style={{ color }}>
        <Icon size={24} />
      </div>
      <div className="stat-card__body">
        <span className="stat-card__count">{count}</span>
        <span className="stat-card__label">{label}</span>
      </div>
      {accent && (
        <div className="stat-card__bar" style={{ backgroundColor: color, width: `${accent}%` }} />
      )}
    </div>
  );
}

export default function DashboardStats() {
  const { stats } = useTasks();

  const completionPercent =
    stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  const cards = [
    {
      icon: ListTodo,
      label: 'Total Tasks',
      count: stats.total,
      color: '#6b7280',
      accent: 100,
    },
    {
      icon: CheckCircle2,
      label: 'Completed',
      count: stats.completed,
      color: '#22c55e',
      accent: completionPercent,
    },
    {
      icon: Clock,
      label: 'Pending',
      count: stats.pending,
      color: '#f59e0b',
      accent: stats.total > 0 ? (stats.pending / stats.total) * 100 : 0,
    },
    {
      icon: Loader2,
      label: 'In Progress',
      count: stats.inProgress,
      color: '#3b82f6',
      accent: stats.total > 0 ? (stats.inProgress / stats.total) * 100 : 0,
    },
    {
      icon: AlertTriangle,
      label: 'Overdue',
      count: stats.overdue,
      color: '#ef4444',
      accent: stats.total > 0 ? (stats.overdue / stats.total) * 100 : 0,
    },
    {
      icon: CalendarClock,
      label: 'Due Today',
      count: stats.dueToday,
      color: '#a855f7',
      accent: stats.total > 0 ? (stats.dueToday / stats.total) * 100 : 0,
    },
  ];

  return (
    <section className="dashboard-stats" aria-label="Task statistics">
      <div className="dashboard-stats__grid">
        {cards.map((card) => (
          <StatCard
            key={card.label}
            icon={card.icon}
            label={card.label}
            count={card.count}
            color={card.color}
            accent={card.accent}
          />
        ))}
      </div>
    </section>
  );
}