// src/components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-4 shadow-inner">
      <div className="max-w-screen-xl mx-auto flex justify-center space-x-6">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-white"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
