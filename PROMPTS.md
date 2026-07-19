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

## 6. Build Task Cards and Task List

Prompt:

> Create TaskCard and TaskList components for TaskFlow. Each task card should display the title, description, category, priority, status, and formatted due date. Highlight overdue tasks that are not completed. Add actions for complete or reopen, edit, and delete. Keep the task card accessible and responsive. Do not place task-management logic directly inside the presentation component.

## 7. Add Search, Filters, and Sorting

Prompt:

> Create a FilterBar component for TaskFlow with a search field, status filter, priority filter, category filter, and sorting dropdown. Then show me how to derive a filtered and sorted task list without modifying the original tasks array. Search should be case-insensitive and should match the task title and description.


## 8. Add Dashboard Statistics

Prompt:

> Create a DashboardStats component for TaskFlow. Display total, completed, pending, in-progress, overdue, and due-today task counts. Also calculate the completion percentage safely, including when there are no tasks. Use reusable stat cards and Lucide React icons.

## 9. Add a Progress Chart

Prompt:
> Create a responsive Recharts pie chart for TaskFlow showing completed, pending, and in-progress tasks. The chart must handle an empty task list without displaying errors. Include labels or a legend and keep the component reusable.

## 10. Add Dark and Light Mode

Prompt:
> Add light and dark theme support to TaskFlow. Create a ThemeToggle component, store the selected theme in localStorage, apply it to the document root, and use CSS variables for background, surface, text, border, primary, and danger colors. The theme should remain selected after refreshing the page.

## 11. Improve the Interface

Prompt:
> Review the current TaskFlow user interface and improve its CSS so it looks like a professional productivity dashboard. Use a clean layout, consistent spacing, rounded cards, readable typography, clear badges, hover states, focus states, and responsive breakpoints. Do not change the existing application functionality.

## 12. Add Empty States

> Create a reusable EmptyState component for TaskFlow. It should support separate messages for an empty task list and for filters with no matching results. Include an icon and a button that can either add a task or clear filters.







## layout redesign :

> I want to completely redesign the UI layout of my React application called TaskFlow. Do NOT change any functionality or business logic—only improve the user interface and layout.
Current issues:
- Everything feels stacked vertically with too much empty whitespace.
- There is no clear visual hierarchy.
- The dashboard does not look like a modern productivity application.
- The statistics cards feel disconnected.
- The page doesn't utilize the screen width effectively.
- The progress chart occupies too much vertical space.
- The empty state is too far down the page.
- Overall it looks like individual components rather than one cohesive application.

Redesign the layout with the following structure:

1. Sticky top navigation/header
   - TaskFlow logo
   - Small subtitle ("Organize your work efficiently")
   - Search bar (optional in header or below)
   - Theme toggle on the right

2. Dashboard summary section
   - A responsive row of statistic cards
   - Equal heights
   - Better spacing
   - Icons
   - Hover animation

3. Main content
   Split the page into two responsive columns on desktop:

   LEFT (70%)
   - Search + Filters
   - Task list

   RIGHT (30%)
   - Progress chart
   - Completion percentage
   - Quick statistics
   - Upcoming due tasks

4. Floating Add Task button
   Bottom-right corner

5. Empty state
   Display inside the task list area instead of pushing everything downward.

6. Responsive design
   Desktop:
   Two-column layout

   Tablet:
   Two columns with reduced spacing

   Mobile:
   Everything stacks naturally.

Use CSS Grid and Flexbox appropriately.

Keep the design minimal, modern, clean, similar to Notion, Linear, TickTick or Todoist.

Do not generate random colors.
Use my existing CSS variables.

Only modify layout and styling.
Do not rewrite business logic.

## visual polish
> Now improve the visual design of the interface.

Goals:

- Premium modern SaaS look
- Better spacing
- Better typography
- Better alignment
- Better card shadows
- Softer borders
- Rounded corners
- Better button hierarchy
- Consistent icon sizing
- Better empty state
- Better filter bar

Use an 8px spacing system.

Increase whitespace between sections.

Cards should have subtle shadows and hover elevation.

Buttons should have smooth transitions.

Inputs should look modern.

Statistics cards should become visually attractive without becoming colorful.

Improve responsiveness.

Keep accessibility in mind.

Do not change functionality.


