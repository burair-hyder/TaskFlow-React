import { useMemo } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const STATUS_LABELS = {
  todo: 'Pending',
  'in-progress': 'In Progress',
  done: 'Completed',
};

const COLORS = {
  todo: '#f59e0b',
  'in-progress': '#3b82f6',
  done: '#22c55e',
};

function prepareChartData(tasks) {
  const counts = { todo: 0, 'in-progress': 0, done: 0 };

  tasks.forEach((task) => {
    if (counts[task.status] !== undefined) {
      counts[task.status] += 1;
    }
  });

  const result = Object.entries(counts)
    .filter(([, value]) => value > 0)
    .map(([key, value]) => ({
      name: STATUS_LABELS[key] || key,
      value,
      color: COLORS[key],
    }));

  return result;
}

export default function ProgressChart({ tasks = [] }) {
  const data = useMemo(() => prepareChartData(tasks), [tasks]);
  const hasData = data.length > 0;

  return (
    <section className="progress-chart" aria-label="Task progress chart">
      <h2 className="progress-chart__title">Progress Overview</h2>

      {!hasData ? (
        <div className="progress-chart__empty">
          <p>No task data to display yet.</p>
          <p className="progress-chart__hint">
            Add some tasks to see your progress breakdown.
          </p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={50}
              paddingAngle={4}
              cornerRadius={4}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
              formatter={(value, name) => [value, name]}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span style={{ fontSize: '14px' }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </section>
  );
}