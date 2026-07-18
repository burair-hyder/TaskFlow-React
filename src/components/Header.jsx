import { ClipboardList } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header({ onAddTask }) {
  return (
    <header className="app__header">
      <div className="app__header-left">
        <ClipboardList size={28} className="app__logo-accent" />
        <h1 className="app__logo">
          Task<span className="app__logo-accent">Flow</span>
        </h1>
      </div>
      <ThemeToggle />
    </header>
  );
}