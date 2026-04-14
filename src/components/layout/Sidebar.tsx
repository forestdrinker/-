import React from 'react';
import { cn } from '../../lib/utils';
import { LogOut } from 'lucide-react';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  items: SidebarItem[];
  activeId: string;
  onSelect: (id: string) => void;
  onLogout: () => void;
  title: string;
}

export default function Sidebar({ items, activeId, onSelect, onLogout, title }: SidebarProps) {
  return (
    <div className="w-[220px] bg-card border-r border-line flex flex-col h-full py-6">
      <div className="px-6 pb-8">
        <h2 className="text-xl font-bold text-primary flex items-center gap-2">
          <span className="text-xl">◈</span> {title.split(' · ')[0]}
        </h2>
      </div>
      
      <nav className="flex-1 space-y-0">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={cn(
              "w-full flex items-center px-6 py-3 text-[14px] transition-all duration-200",
              activeId === item.id
                ? "bg-[#EFF6FF] text-primary border-r-3 border-primary font-semibold"
                : "text-text-sub hover:bg-bg hover:text-text-main"
            )}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="px-4 pt-4 border-t border-line">
        <button
          onClick={onLogout}
          className="w-full flex items-center px-4 py-3 text-[14px] font-medium text-text-sub rounded-lg hover:bg-red-50 hover:text-danger transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          退出登录
        </button>
      </div>
    </div>
  );
}
