# AI Usage and Manual Improvements

## How AI Helped

AI was used as a development assistant throughout the TaskFlow project. It helped with:

- Planning the component structure
- Designing the task data model
- Generating initial component implementations
- Explaining React state and context usage
- Creating localStorage persistence
- Suggesting search, filtering, and sorting logic
- Reviewing date calculations
- Identifying accessibility issues
- Detecting duplicated code
- Improving the responsive layout

All AI-generated code was reviewed, tested, and modified before being included in the final application.

## Manual Improvements and Corrections

### 1. Task Validation

The generated form initially accepted titles containing only spaces. I corrected this by trimming the title before validation and saving.

### 2. Date Validation

I improved the generated due-date logic to prevent past dates when creating new tasks while still allowing existing tasks to be edited.

### 3. Safe Local Storage

I added error handling so corrupted localStorage data does not crash the application.

### 4. State Immutability

I corrected sorting logic to copy the tasks array before sorting instead of mutating the original state.

### 5. Unique Task IDs

I used crypto.randomUUID when available instead of array indexes.

### 6. Delete Confirmation

I added a confirmation step to prevent accidental task deletion.

### 7. Responsive Design

I manually adjusted spacing, card sizes, controls, and breakpoints for mobile screens.

### 8. Accessibility

I added proper form labels, button titles, keyboard focus styles, and accessible text for icon-only controls.

### 9. Empty States

I added separate messages for an empty task list and a filtered list with no matching results.

### 10. Code Organization

I moved repeated logic into reusable components, utilities, and hooks.