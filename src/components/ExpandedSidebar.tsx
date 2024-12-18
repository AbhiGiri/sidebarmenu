'use client';

import { useState } from "react";
import { SidebarItem, sidebarData } from "@/components/sidebarData";
import Link from "next/link";

type ExpandedSidebarProps = {
  activeMenu: string | null;
};

export default function ExpandedSidebar({ activeMenu }: ExpandedSidebarProps) {
  const activeSection = sidebarData.find((section) => section.name === activeMenu);

  const [collapsedItems, setCollapsedItems] = useState<{ [key: string]: boolean }>(() => {
    const initialState: { [key: string]: boolean } = {};
    const setInitialCollapse = (items: SidebarItem[]) => {
      items.forEach((item) => {
        initialState[item.name] = true;
        if (item.children) {
          setInitialCollapse(item.children);
        }
      });
    };
    setInitialCollapse(sidebarData);
    return initialState;
  });

  const [activeItem, setActiveItem] = useState<string | null>(null); 

  const toggleCollapse = (itemName: string) => {
    setCollapsedItems((prevState) => ({
      ...prevState,
      [itemName]: !prevState[itemName],
    }));
  };

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName); 
  };

  const renderSidebarItems = (items: SidebarItem[]) => {
    return items.map((item) => (
      <li key={item.name} className="mb-2">
        <div
          className={`flex items-center justify-between p-2 rounded-md ${
            activeItem === item.name ? "bg-gray-300 dark:bg-gray-700" : "hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          <button
            className="flex items-center w-full text-left"
            onClick={() => {
              toggleCollapse(item.name);
              handleItemClick(item.name);
            }}
          >
            <Link href={item.href || "#"} className="flex items-center w-full text-left">
              {item.icon && <item.icon className="mr-2 text-lg" />}
              {item.name}
            </Link>
          </button>

          {item.children && (
            <button
              className="ml-2 text-lg"
              onClick={(e) => {
                e.stopPropagation();
                toggleCollapse(item.name);
              }}
              aria-expanded={!collapsedItems[item.name]}
              aria-controls={`${item.name}-submenu`}
            >
              {collapsedItems[item.name] ? "+" : "-"}
            </button>
          )}
        </div>

        {item.children && !collapsedItems[item.name] && (
          <ul id={`${item.name}-submenu`} className="pl-6">
            {renderSidebarItems(item.children)}
          </ul>
        )}
      </li>
    ));
  };

  if (!activeSection || !activeSection.children) return null;

  return (
    <aside className="h-screen w-64 bg-gray-50 dark:bg-gray-800 p-4">
      <h2 className="text-gray-700 dark:text-gray-300 mb-4 font-bold">{activeSection.name}</h2>
      <nav>
        <ul>{renderSidebarItems(activeSection.children)}</ul>
      </nav>
    </aside>
  );
}
