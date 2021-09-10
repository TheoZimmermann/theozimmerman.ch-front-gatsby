/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import './dark-mode-toggle-button.scss';

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) return null;
        return (
          <div className="dark-button">
            <input
              id="toggle"
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <label htmlFor="toggle" />
          </div>
        );
      }}
    </ThemeToggler>
  );
}
