import { useState, useEffect } from 'react';
import { STATUSES, PRIORITIES, CATEGORIES } from '../utils/constants';
import { useTasks } from '../context/TaskContext';

const INITIAL_STATE = {
  title: '',
  description: '',
  status: 'todo',
  priority: 'medium',
  category: 'Other',
  dueDate: '',
};

const INITIAL_ERRORS = {
  title: '',
  dueDate: '',
};

export default function TaskForm({ taskToEdit, onClose }) {
  const { addTask, updateTask } = useTasks();
  const isEditing = Boolean(taskToEdit);

  const [form, setForm] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [touched, setTouched] = useState({});

  // Populate form when editing an existing task
  useEffect(() => {
    if (taskToEdit) {
      setForm({
        title: taskToEdit.title || '',
        description: taskToEdit.description || '',
        status: taskToEdit.status || 'todo',
        priority: taskToEdit.priority || 'medium',
        category: taskToEdit.category || 'Other',
        dueDate: taskToEdit.dueDate ? taskToEdit.dueDate.slice(0, 10) : '',
      });
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateSingle(name, form[name]);
  };

  const validateSingle = (name, value) => {
    let error = '';
    if (name === 'title' && !value.trim()) {
      error = 'Title is required.';
    }
    if (name === 'dueDate' && value && !isEditing) {
      const selected = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        error = 'Due date cannot be in the past.';
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  const validate = () => {
    const newErrors = {
      title: '',
      dueDate: '',
    };

    if (!form.title.trim()) {
      newErrors.title = 'Title is required.';
    }

    if (form.dueDate && !isEditing) {
      const selected = new Date(form.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.dueDate = 'Due date cannot be in the past.';
      }
    }

    setErrors(newErrors);
    setTouched({ title: true, dueDate: true, status: true, priority: true, category: true });
    return !newErrors.title && !newErrors.dueDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const taskData = {
      title: form.title.trim(),
      description: form.description.trim(),
      status: form.status,
      priority: form.priority,
      category: form.category,
      dueDate: form.dueDate || null,
    };

    if (isEditing) {
      updateTask(taskToEdit.id, taskData);
    } else {
      addTask(taskData);
    }

    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{isEditing ? 'Edit Task' : 'Add New Task'}</h2>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Title */}
          <div className="form-group">
            <label htmlFor="title">
              Title <span className="required">*</span>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter task title"
              className={touched.title && errors.title ? 'input-error' : ''}
            />
            {touched.title && errors.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter task description (optional)"
              rows={3}
            />
          </div>

          {/* Status */}
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              {STATUSES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Priority */}
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              {PRIORITIES.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Due Date */}
          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              id="dueDate"
              name="dueDate"
              type="date"
              value={form.dueDate}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.dueDate && errors.dueDate ? 'input-error' : ''}
            />
            {touched.dueDate && errors.dueDate && (
              <span className="error-message">{errors.dueDate}</span>
            )}
          </div>

          {/* Actions */}
          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {isEditing ? 'Save Changes' : 'Add Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}