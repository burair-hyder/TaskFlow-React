export function filterAndSortTasks(tasks, filters) {
  const filtered = tasks.filter((task) => {
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const matchesTitle = task.title.toLowerCase().includes(q);
      const matchesDescription = task.description.toLowerCase().includes(q);
      if (!matchesTitle && !matchesDescription) return false;
    }

    if (filters.status && filters.status !== 'all' && task.status !== filters.status) {
      return false;
    }

    if (filters.priority && filters.priority !== 'all' && task.priority !== filters.priority) {
      return false;
    }

    if (filters.category && filters.category !== 'all' && task.category !== filters.category) {
      return false;
    }

    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    switch (filters.sort) {
      case 'oldest':
        return new Date(a.createdAt) - new Date(b.createdAt);

      case 'newest':
      default:
        return new Date(b.createdAt) - new Date(a.createdAt);

      case 'priority-desc': {
        const rank = { high: 3, medium: 2, low: 1 };
        return (rank[b.priority] || 0) - (rank[a.priority] || 0);
      }

      case 'priority-asc': {
        const rank = { high: 3, medium: 2, low: 1 };
        return (rank[a.priority] || 0) - (rank[b.priority] || 0);
      }

      case 'due-asc': {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      }

      case 'due-desc': {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(b.dueDate) - new Date(a.dueDate);
      }

      case 'alpha-asc':
        return a.title.localeCompare(b.title);

      case 'alpha-desc':
        return b.title.localeCompare(a.title);
    }
  });

  return sorted;
}