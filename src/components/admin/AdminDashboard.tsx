import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar';
import { LayoutDashboard, Users, ClipboardList, FileBarChart, Monitor, Settings } from 'lucide-react';
import AdminHome from './AdminHome';
import AdminPatientManagement from './AdminPatientManagement';
import MonitoringTasks from './MonitoringTasks';
import BigScreen from './BigScreen';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: '管理概览', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'patients', label: '患者管理', icon: <Users className="w-5 h-5" /> },
    { id: 'tasks', label: '监测任务', icon: <ClipboardList className="w-5 h-5" /> },
    { id: 'reports', label: '报告汇总', icon: <FileBarChart className="w-5 h-5" /> },
    { id: 'bigscreen', label: '可视化大屏', icon: <Monitor className="w-5 h-5" /> },
    { id: 'settings', label: '系统设置', icon: <Settings className="w-5 h-5" /> },
  ];

  if (activeTab === 'bigscreen') {
    return <BigScreen onBack={() => setActiveTab('home')} />;
  }

  return (
    <div className="flex h-full overflow-hidden">
      <Sidebar
        title="心境守望 · 管理端"
        items={navItems}
        activeId={activeTab}
        onSelect={setActiveTab}
        onLogout={onLogout}
      />
      <main className="flex-1 overflow-y-auto bg-[#F8FAFC] p-8">
        {activeTab === 'home' && <AdminHome />}
        {activeTab === 'patients' && <AdminPatientManagement />}
        {activeTab === 'tasks' && <MonitoringTasks />}
        {activeTab === 'reports' && (
          <div className="flex items-center justify-center h-full text-slate-400">
            报告汇总模块开发中...
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="flex items-center justify-center h-full text-slate-400">
            系统设置模块开发中...
          </div>
        )}
      </main>
    </div>
  );
}
