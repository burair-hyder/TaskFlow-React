# AI Prompts Used During Development

This document records the prompts used while developing TaskFlow. AI was used as a development assistant for planning, code generation, debugging, code review, and improvement suggestions.

---

## 1. Project Planning

**Prompt:**

> I am creating a portfolio-quality React task management dashboard called TaskFlow. The application should allow users to add, edit, delete, complete, search, filter, and sort tasks. Each task should have a title, description, status, priority, category, due date, and creation date. Data should be stored in localStorage. The application should also contain dashboard statistics, overdue detection, dark mode, and responsive styling. Help me plan the component structure and implementation order. Do not generate the entire project yet.

---

## 2. Data Model and Constants

**Prompt:**

> Create a `constants.js` file for my React TaskFlow application. Define task statuses, priorities, categories, filter options, and sorting options. Use arrays of objects with `label` and `value` properties so they can be reused in form select fields and filters. Keep the code simple and readable.

---

## 3. Create the Local Storage Hook

**Prompt:**

> Create a reusable React hook called `useLocalStorage`. It should accept a storage key and an initial value. It must safely read JSON data from localStorage, handle invalid JSON without crashing, update React state, and synchronize new values back to localStorage. Explain the code after generating it.

---

## 4. Create the Task Context

**Prompt:**

> Create a `TaskContext` for my TaskFlow React application. Use the existing `useLocalStorage` hook to persist tasks. Provide functions to add, update, delete, and toggle task completion. Generate IDs using `crypto.randomUUID()` when available, with a reasonable fallback. Avoid mutating arrays or task objects directly. Also calculate total, completed, pending, in-progress, overdue, and due-today task counts.

---

## 5. Build the Task Form

**Prompt:**

> Create a reusable `TaskForm` component for TaskFlow. It must support both adding and editing tasks. Include fields for title, description, status, priority, category, and due date. Add validation that rejects empty titles and prevents past due dates for newly created tasks. Show clear inline validation messages. Use controlled React inputs. Do not use external form libraries.

---

## 6. Build Task Cards and Task List

**Prompt:**

> Create `TaskCard` and `TaskList` components for TaskFlow. Each task card should display the title, description, category, priority, status, and formatted due date. Highlight overdue tasks that are not completed. Add actions for complete or reopen, edit, and delete. Keep the task card accessible and responsive. Do not place task-management logic directly inside the presentation component.

---

## 7. Add Search, Filters, and Sorting

**Prompt:**

> Create a `FilterBar` component for TaskFlow with a search field, status filter, priority filter, category filter, and sorting dropdown. Then show me how to derive a filtered and sorted task list without modifying the original tasks array. Search should be case-insensitive and should match the task title and description.

---

## 8. Add Dashboard Statistics

**Prompt:**

> Create a `DashboardStats` component for TaskFlow. Display total, completed, pending, in-progress, overdue, and due-today task counts. Also calculate the completion percentage safely, including when there are no tasks. Use reusable stat cards and Lucide React icons.

---

## 9. Add a Progress Chart

**Prompt:**

> Create a responsive Recharts pie chart for TaskFlow showing completed, pending, and in-progress tasks. The chart must handle an empty task list without displaying errors. Include labels or a legend and keep the component reusable.

---

## 10. Add Dark and Light Mode

**Prompt:**

> Add light and dark theme support to TaskFlow. Create a `ThemeToggle` component, store the selected theme in localStorage, apply it to the document root, and use CSS variables for background, surface, text, border, primary, and danger colors. The theme should remain selected after refreshing the page.

---

## 11. Improve the Interface

**Prompt:**

> Review the current TaskFlow user interface and improve its CSS so it looks like a professional productivity dashboard. Use a clean layout, consistent spacing, rounded cards, readable typography, clear badges, hover states, focus states, and responsive breakpoints. Do not change the existing application functionality.

---

## 12. Add Empty States

**Prompt:**

> Create a reusable `EmptyState` component for TaskFlow. It should support separate messages for an empty task list and for filters with no matching results. Include an icon and a button that can either add a task or clear filters.

---

## 13. Redesign the Layout

**Prompt:**

> I want to completely redesign the UI layout of my React application called TaskFlow. Do not change any functionality or business logic. Only improve the user interface and layout.
>
> Current issues:
>
> - Everything feels stacked vertically with too much empty whitespace.
> - There is no clear visual hierarchy.
> - The dashboard does not look like a modern productivity application.
> - The statistics cards feel disconnected.
> - The page does not use the available screen width effectively.
> - The progress chart occupies too much vertical space.
> - The empty state appears too far down the page.
> - Overall, the interface looks like a collection of separate components rather than one cohesive application.
>
> Redesign the layout using the following structure:
>
> ### 1. Sticky Top Header
>
> - TaskFlow logo
> - Small subtitle: “Organize your work efficiently”
> - Search bar in the header or directly below it
> - Theme toggle aligned to the right
>
> ### 2. Dashboard Summary
>
> - Responsive row of statistic cards
> - Equal card heights
> - Consistent spacing
> - Clear icons
> - Subtle hover animations
>
> ### 3. Main Content Area
>
> Use a responsive two-column layout on desktop.
>
> **Left column — 70% width**
>
> - Search and filters
> - Task list
>
> **Right column — 30% width**
>
> - Progress chart
> - Completion percentage
> - Quick statistics
> - Upcoming due tasks
>
> ### 4. Floating Add Task Button
>
> Place a floating Add Task button in the bottom-right corner.
>
> ### 5. Empty State
>
> Display the empty state inside the task-list area instead of allowing it to push the rest of the interface downward.
>
> ### 6. Responsive Behaviour
>
> **Desktop:**
>
> - Two-column layout
>
> **Tablet:**
>
> - Two columns with reduced spacing
>
> **Mobile:**
>
> - Stack all sections naturally
>
> Use CSS Grid and Flexbox where appropriate.
>
> Keep the design minimal, clean, and modern, inspired by productivity applications such as Notion, Linear, TickTick, and Todoist.
>
> Do not introduce random colors. Use the existing CSS variables.
>
> Only modify layout and styling. Do not rewrite business logic.

---

## 14. Improve the Visual Polish

**Prompt:**

> Improve the visual design of the TaskFlow interface without changing its functionality.
>
> Goals:
>
> - Create a premium modern SaaS appearance
> - Improve spacing
> - Improve typography
> - Improve alignment
> - Add subtle card shadows
> - Use softer borders
> - Use consistent rounded corners
> - Improve button hierarchy
> - Use consistent icon sizing
> - Improve the empty state
> - Improve the filter bar
>
> Use an 8-pixel spacing system throughout the application.
>
> Increase whitespace between major sections while keeping related controls visually grouped.
>
> Cards should use subtle shadows and gentle hover elevation.
>
> Buttons should include smooth transitions and clear primary, secondary, and destructive styles.
>
> Form inputs should have a modern appearance with clear hover and focus states.
>
> Statistics cards should be visually attractive without becoming overly colorful.
>
> Improve responsiveness across desktop, tablet, and mobile devices.
>
> Keep accessibility in mind by preserving readable contrast, visible keyboard focus states, semantic structure, and appropriately sized interactive controls.
>
> Do not change any application functionality or business logic.