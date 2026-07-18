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

  return (
    <div className="app">
      <Header onAddTask={handleAdd} />

      <main className="app__main">
        <DashboardStats />
        <ProgressChart tasks={tasks} />
        <FilterBar filters={filters} onFilterChange={setFilters} />
        <TaskList
          tasks={visibleTasks}
          onEdit={handleEdit}
          onDelete={deleteTask}
          onToggleStatus={toggleTaskStatus}
          onAddTask={handleAdd}
          onClearFilters={handleClearFilters}
          hasActiveFilters={hasActiveFilters}
        />
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