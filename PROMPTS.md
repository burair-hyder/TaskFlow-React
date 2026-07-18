# AI Prompts Used During Development

This document records the prompts used while developing TaskFlow. AI was used as a development assistant for planning, code generation, debugging, code review, and improvement suggestions.

## 1. Project Planning

Prompt:

> I am creating a portfolio-quality React task management dashboard called TaskFlow. The application should allow users to add, edit, delete, complete, search, filter, and sort tasks. Each task should have a title, description, status, priority, category, due date, and creation date. Data should be stored in localStorage. The application should also contain dashboard statistics, overdue detection, dark mode, and responsive styling. Help me plan the component structure and implementation order. Do not generate the entire project yet.

## 2. Data model and constants

> Create a constants.js file for my React TaskFlow application. Define task statuses, priorities, categories, filter options, and sorting options. Use arrays of objects with label and value properties so they can be reused in form select fields and filters. Keep the code simple and readable.