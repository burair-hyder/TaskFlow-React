import { ClipboardList, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header({ search, onSearchChange }) {
  return (
    <header className="app__header">
      <div className="app__header-left">
        <div className="app__logo-wrapper">
          <ClipboardList size={22} className="app__logo-icon" />
          <div className="app__logo-text">
            <h1 className="app__logo">
              Task<span className="app__logo-accent">Flow</span>
            </h1>
            <p className="app__subtitle">Organize your work efficiently</p>
          </div>
        </div>
      </div>

      <div className="app__header-center">
        <div className="app__search-wrapper">
          <Search size={16} className="app__search-icon" />
          <input
            id="header-search"
            name="search"
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search tasks..."
            className="app__search-input"
          />
        </div>
      </div>

      <div className="app__header-right">
        <ThemeToggle />
      </div>
    </header>
  );
}