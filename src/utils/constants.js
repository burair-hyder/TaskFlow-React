export const STATUSES = [
  { label: 'To Do', value: 'todo' },
  { label: 'In Progress', value: 'in-progress' },
  { label: 'Done', value: 'done' },
];

export const PRIORITIES = [
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'High', value: 'high' },
];

export const CATEGORIES = [
  { label: 'Work', value: 'Work' },
  { label: 'Personal', value: 'Personal' },
  { label: 'Health', value: 'Health' },
  { label: 'Education', value: 'Education' },
  { label: 'Finance', value: 'Finance' },
  { label: 'Other', value: 'Other' },
];

export const FILTER_STATUSES = [
  { label: 'All Statuses', value: 'all' },
  ...STATUSES,
];

export const FILTER_PRIORITIES = [
  { label: 'All Priorities', value: 'all' },
  ...PRIORITIES,
];

export const FILTER_CATEGORIES = [
  { label: 'All Categories', value: 'all' },
  ...CATEGORIES,
];

export const SORT_OPTIONS = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Oldest First', value: 'oldest' },
  { label: 'Priority (High to Low)', value: 'priority-desc' },
  { label: 'Priority (Low to High)', value: 'priority-asc' },
  { label: 'Due Date (Earliest)', value: 'due-asc' },
  { label: 'Due Date (Latest)', value: 'due-desc' },
  { label: 'Alphabetical (A-Z)', value: 'alpha-asc' },
  { label: 'Alphabetical (Z-A)', value: 'alpha-desc' },
];

export const PRIORITY_COLORS = {
  low: '#22c55e',
  medium: '#f59e0b',
  high: '#ef4444',
};

export const STATUS_COLORS = {
  todo: '#6b7280',
  'in-progress': '#3b82f6',
  done: '#22c55e',
};