import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar';
import { Home, Video, Activity, FileText, Settings } from 'lucide-react';
import FamilyHome from './FamilyHome';
import HealingSession from './HealingSession';
import Monitoring from './Monitoring';
import EmotionReports from './EmotionReports';

interface FamilyDashboardProps {
  onLogout: () => void;
}

export default function FamilyDashboard({ onLogout }: FamilyDashboardProps) {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: '首页', icon: <Home className="w-5 h-5" /> },
    { id: 'healing', label: '视频疗愈', icon: <Video className="w-5 h-5" /> },
    { id: 'monitoring', label: '日常监测', icon: <Activity className="w-5 h-5" /> },
    { id: 'reports', label: '情绪报告', icon: <FileText className="w-5 h-5" /> },
    { id: 'settings', label: '我的/设置', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-full overflow-hidden">
      <Sidebar
        title="心境守望 · 家属端"
        items={navItems}
        activeId={activeTab}
        onSelect={setActiveTab}
        onLogout={onLogout}
      />
      <main className="flex-1 overflow-y-auto bg-[#F8FAFC] p-8">
        {activeTab === 'home' && <FamilyHome />}
        {activeTab === 'healing' && <HealingSession />}
        {activeTab === 'monitoring' && <Monitoring />}
        {activeTab === 'reports' && <EmotionReports />}
        {activeTab === 'settings' && (
          <div className="flex items-center justify-center h-full text-slate-400">
            设置模块开发中...
          </div>
        )}
      </main>
    </div>
  );
}
