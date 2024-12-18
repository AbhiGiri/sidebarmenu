'use client';

import { SidebarItem, sidebarData } from "@/components/sidebarData";
import { FiSun, FiMoon } from "react-icons/fi"; 
import { useState, useEffect } from "react";

type MainSidebarProps = {
  onMenuClick: (menuName: string | null) => void;
  activeMenu: string | null;
};

export default function MainSidebar({ onMenuClick, activeMenu }: MainSidebarProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const userPrefersDark = localStorage.getItem("theme") === "dark" || 
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(userPrefersDark);
  }, []);

  useEffect(() => {
    if (isDarkMode === null) return; 
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <aside className="h-screen w-20 bg-gray-100 dark:bg-gray-900 flex flex-col justify-between items-center p-2">
      <div className="flex flex-col items-center">
        {sidebarData.map((item: SidebarItem) => (
          <button
            key={item.name}
            onClick={() => onMenuClick(item.name === activeMenu ? null : item.name)}
            className={`p-3 text-2xl mb-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ${
              activeMenu === item.name ? "bg-gray-300 dark:bg-gray-700" : ""
            }`}
          >
            {item.icon && <item.icon />}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <button
          onClick={toggleDarkMode}
          className="p-3 text-2xl rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Toggle Dark Mode"
          aria-pressed={isDarkMode ?? false} 
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </aside>
  );
}
