'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('dark') === 'true';
    setDark(saved);
    document.documentElement.classList.toggle('dark', saved);
  }, []);

  const toggle = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem('dark', String(newDark));
    document.documentElement.classList.toggle('dark', newDark);
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-all hover:scale-110"
    >
      {dark ? 'Light' : 'Dark'}
    </button>
  );
}
