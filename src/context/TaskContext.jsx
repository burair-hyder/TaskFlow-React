import { createContext, useContext, useCallback, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TaskContext = createContext(null);

function generateId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('taskflow_tasks', []);

  const addTask = useCallback(
    ({ title, description, category, priority, dueDate }) => {
      const now = new Date().toISOString();
      const newTask = {
        id: generateId(),
        title,
        description: description || '',
        category: category || 'Other',
        priority: priority || 'medium',
        status: 'todo',
        dueDate: dueDate || null,
        createdAt: now,
        updatedAt: now,
      };
      setTasks((prev) => [...prev, newTask]);
    },
    [setTasks]
  );

  const updateTask = useCallback(
    (id, updates) => {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id
            ? { ...task, ...updates, updatedAt: new Date().toISOString() }
            : task
        )
      );
    },
    [setTasks]
  );

  const deleteTask = useCallback(
    (id) => {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    },
    [setTasks]
  );

  const toggleTaskStatus = useCallback(
    (id) => {
      setTasks((prev) =>
        prev.map((task) => {
          if (task.id !== id) return task;
          const nextStatus =
            task.status === 'todo'
              ? 'in-progress'
              : task.status === 'in-progress'
                ? 'done'
                : 'todo';
          return { ...task, status: nextStatus, updatedAt: new Date().toISOString() };
        })
      );
    },
    [setTasks]
  );

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.status === 'done').length;
    const pending = tasks.filter((t) => t.status === 'todo').length;
    const inProgress = tasks.filter((t) => t.status === 'in-progress').length;

    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const overdue = tasks.filter((t) => {
      if (!t.dueDate || t.status === 'done') return false;
      return new Date(t.dueDate) < todayStart;
    }).length;

    const dueToday = tasks.filter((t) => {
      if (!t.dueDate) return false;
      const due = new Date(t.dueDate);
      return (
        due.getFullYear() === now.getFullYear() &&
        due.getMonth() === now.getMonth() &&
        due.getDate() === now.getDate()
      );
    }).length;

    return { total, completed, pending, inProgress, overdue, dueToday };
  }, [tasks]);

  const value = useMemo(
    () => ({ tasks, addTask, updateTask, deleteTask, toggleTaskStatus, stats }),
    [tasks, addTask, updateTask, deleteTask, toggleTaskStatus, stats]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}