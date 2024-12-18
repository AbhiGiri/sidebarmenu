import { IconType } from "react-icons";
import { FiHome, FiBarChart2, FiFolder, FiCheckSquare, FiSettings, FiGrid } from "react-icons/fi";

export type SidebarItem = {
  name: string;
  href?: string | undefined;
  icon?: IconType; 
  children?: SidebarItem[]; 
};

export const sidebarData: SidebarItem[] = [
  {
    name: "Home",
    icon: FiHome,
    children: [
      { name: "Home", href: "/dashboard/home", icon: FiHome },
      { name: "Projects", href: "/dashboard/projects", icon: FiFolder },
      { name: "Tasks", href: "/dashboard/tasks", icon: FiCheckSquare },
      { name: "Settings", href: "/dashboard/settings", icon: FiSettings },
    ],
  },
  {
    name: "Dashboard",
    icon: FiBarChart2,
    children: [
      {
        name: "Main Dashboard",
        icon: FiHome,
        children: [
          { name: "Main Home", href: "/dashboard/home"},
          { name: "Projects", href: "/dashboard/projects"},
          { name: "Tasks", href: "/dashboard/tasks"},
        ],
      },
      { name: "Projects", href: "/projects", icon: FiFolder },
      { name: "Tasks", href: "/dashboard/tasks", icon: FiCheckSquare },
      { name: "Settings", icon: FiSettings, children: [
        { name: "My Profile", href: "/settings/profile" },
        { name: "My Details", href: "/dashboard/projects" },
        { name: "Security", href: "/dashboard/tasks" },
        { name: "Integration", href: "/dashboard/settings" },
        { name: "Billing", href: "/dashboard/settings" },
      ], },
    ],
  },
  {
    name: "Apps",
    icon: FiGrid,
    children: [
      { name: "Home", href: "/dashboard/home", icon: FiHome },
      { name: "Projects", href: "/dashboard/projects", icon: FiFolder },
      { name: "Tasks", href: "/dashboard/tasks", icon: FiCheckSquare },
      { name: "Settings", href: "/dashboard/settings", icon: FiSettings },
    ],
  }
];
