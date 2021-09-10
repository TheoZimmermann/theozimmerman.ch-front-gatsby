/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) return null;
        return (
          <label>
            <input
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            {' '}
            <span />
          </label>
        );
      }}
    </ThemeToggler>
  );
}
