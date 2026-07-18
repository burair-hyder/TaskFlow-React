# AI Prompts Used During Development

This document records the prompts used while developing TaskFlow. AI was used as a development assistant for planning, code generation, debugging, code review, and improvement suggestions.

## 1. Project Planning

Prompt:

> I am creating a portfolio-quality React task management dashboard called TaskFlow. The application should allow users to add, edit, delete, complete, search, filter, and sort tasks. Each task should have a title, description, status, priority, category, due date, and creation date. Data should be stored in localStorage. The application should also contain dashboard statistics, overdue detection, dark mode, and responsive styling. Help me plan the component structure and implementation order. Do not generate the entire project yet.

## 2. Data model and constants

Prompt:

> Create a constants.js file for my React TaskFlow application. Define task statuses, priorities, categories, filter options, and sorting options. Use arrays of objects with label and value properties so they can be reused in form select fields and filters. Keep the code simple and readable.

## 3. Create the Local Storage Hook

Prompt:

> Create a reusable React hook called useLocalStorage. It should accept a storage key and an initial value. It must safely read JSON data from localStorage, handle invalid JSON without crashing, update React state, and synchronize new values back to localStorage. Explain the code after generating it.

## 4. Create the Task Context

Prompt:

> Create a TaskContext for my TaskFlow React application. Use the existing useLocalStorage hook to persist tasks. Provide functions to add, update, delete, and toggle task completion. Generate IDs using crypto.randomUUID when available, with a reasonable fallback. Avoid mutating arrays or task objects directly. Also calculate total, completed, pending, in-progress, overdue, and due-today task counts.

## 5. Build the Task Form

Prompt:

> Create a reusable TaskForm component for TaskFlow. It must support both adding and editing tasks. Include fields for title, description, status, priority, category, and due date. Add validation that rejects empty titles and prevents past due dates for newly created tasks. Show clear inline validation messages. Use controlled React inputs. Do not use external form libraries.