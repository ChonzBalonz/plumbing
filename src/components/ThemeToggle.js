import React from 'react';
import PropTypes from 'prop-types';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-blue-500 dark:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
    </button>
  );
};

ThemeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggle; 