"use client";
import { useState } from "react";
import MainSidebar from "@/components/MainSidebar";
import ExpandedSidebar from "@/components/ExpandedSidebar";

export default function SidebarWrapper() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className="flex">
      <MainSidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
      <ExpandedSidebar activeMenu={activeMenu} />
    </div>
  );
}
