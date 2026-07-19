import { useState } from 'react';
import { Plus } from 'lucide-react';
import './App.css';
import { TaskProvider, useTasks } from './context/TaskContext';
import { filterAndSortTasks } from './utils/filterAndSortTasks';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';
import ProgressChart from './components/ProgressChart';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const DEFAULT_FILTERS = {
  search: '',
  status: 'all',
  priority: 'all',
  category: 'all',
  sort: 'newest',
};

function Dashboard() {
  const { tasks, updateTask, deleteTask, toggleTaskStatus } = useTasks();
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const visibleTasks = filterAndSortTasks(tasks, filters);

  const hasActiveFilters =
    filters.search ||
    filters.status !== 'all' ||
    filters.priority !== 'all' ||
    filters.category !== 'all' ||
    filters.sort !== 'newest';

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditingTask(null);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingTask(null);
  };

  const handleClearFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const handleSearchChange = (value) => {
    setFilters((prev) => ({ ...prev, search: value }));
  };

  const completedCount = tasks.filter((t) => t.status === 'done').length;
  const totalCount = tasks.length;
  const completionPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const upcomingDue = tasks
    .filter((t) => t.status !== 'done' && t.dueDate)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 5);

  return (
    <div className="app">
      <Header search={filters.search} onSearchChange={handleSearchChange} />

      <main className="app__main">
        <DashboardStats />

        <div className="app__content">
          <div className="app__content-left">
            <FilterBar
              filters={{ ...filters, search: '' }}
              onFilterChange={(newFilters) =>
                setFilters((prev) => ({ ...prev, ...newFilters }))
              }
            />
            <TaskList
              tasks={visibleTasks}
              onEdit={handleEdit}
              onDelete={deleteTask}
              onToggleStatus={toggleTaskStatus}
              onAddTask={handleAdd}
              onClearFilters={handleClearFilters}
              hasActiveFilters={hasActiveFilters}
            />
          </div>

          <aside className="app__content-right">
            <ProgressChart tasks={tasks} />

            <div className="sidebar-card">
              <h3 className="sidebar-card__title">Completion</h3>
              <div className="sidebar-card__progress">
                <div className="sidebar-card__progress-bar">
                  <div
                    className="sidebar-card__progress-fill"
                    style={{ width: `${completionPercent}%` }}
                  />
                </div>
                <span className="sidebar-card__progress-label">
                  {completionPercent}%
                </span>
              </div>
              <p className="sidebar-card__text">
                {completedCount} of {totalCount} tasks done
              </p>
            </div>

            <div className="sidebar-card">
              <h3 className="sidebar-card__title">Quick Stats</h3>
              <div className="sidebar-card__stats">
                <div className="sidebar-card__stat">
                  <span className="sidebar-card__stat-value">
                    {tasks.filter((t) => t.status === 'todo').length}
                  </span>
                  <span className="sidebar-card__stat-label">Pending</span>
                </div>
                <div className="sidebar-card__stat">
                  <span className="sidebar-card__stat-value">
                    {tasks.filter((t) => t.status === 'in-progress').length}
                  </span>
                  <span className="sidebar-card__stat-label">In Progress</span>
                </div>
                <div className="sidebar-card__stat">
                  <span className="sidebar-card__stat-value">
                    {tasks.filter((t) => t.priority === 'high' && t.status !== 'done').length}
                  </span>
                  <span className="sidebar-card__stat-label">High Priority</span>
                </div>
                <div className="sidebar-card__stat">
                  <span className="sidebar-card__stat-value">
                    {tasks.filter((t) => {
                      if (!t.dueDate || t.status === 'done') return false;
                      return new Date(t.dueDate) < new Date();
                    }).length}
                  </span>
                  <span className="sidebar-card__stat-label">Overdue</span>
                </div>
              </div>
            </div>

            {upcomingDue.length > 0 && (
              <div className="sidebar-card">
                <h3 className="sidebar-card__title">Upcoming Due</h3>
                <ul className="sidebar-card__due-list">
                  {upcomingDue.map((task) => (
                    <li key={task.id} className="sidebar-card__due-item">
                      <span className="sidebar-card__due-name">{task.title}</span>
                      <span className="sidebar-card__due-date">
                        {new Date(task.dueDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </main>

      <button
        type="button"
        className="app__fab"
        onClick={handleAdd}
        aria-label="Add new task"
        title="Add new task"
      >
        <Plus size={28} />
      </button>

      {showForm && (
        <TaskForm taskToEdit={editingTask} onClose={handleCloseForm} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <Dashboard />
    </TaskProvider>
  );
}