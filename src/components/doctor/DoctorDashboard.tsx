import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar';
import { Home, Users, BarChart2, Video, FileText, Search } from 'lucide-react';
import DoctorHome from './DoctorHome';
import PatientArchives from './PatientArchives';
import ComprehensiveAnalysis from './ComprehensiveAnalysis';
import ReportCenter from './ReportCenter';

interface DoctorDashboardProps {
  onLogout: () => void;
}

export default function DoctorDashboard({ onLogout }: DoctorDashboardProps) {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: '首页概览', icon: <Home className="w-5 h-5" /> },
    { id: 'archives', label: '患者档案', icon: <Users className="w-5 h-5" /> },
    { id: 'analysis', label: '综合分析', icon: <BarChart2 className="w-5 h-5" /> },
    { id: 'healing', label: '视频疗愈联动', icon: <Video className="w-5 h-5" /> },
    { id: 'reports', label: '报告中心', icon: <FileText className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-full overflow-hidden">
      <Sidebar
        title="心境守望 · 医生端"
        items={navItems}
        activeId={activeTab}
        onSelect={setActiveTab}
        onLogout={onLogout}
      />
      <main className="flex-1 overflow-y-auto bg-bg flex flex-col">
        {/* Top Search Bar */}
        <header className="h-16 bg-card border-b border-line px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="relative w-[400px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-sub" />
            <input 
              type="text" 
              placeholder="搜索患者姓名、编号或风险等级..." 
              className="w-full h-10 pl-10 pr-4 bg-[#F1F5F9] border-none rounded-lg text-[14px] focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-[14px] font-semibold text-text-main">林清悦 医生</div>
              <div className="text-[11px] text-text-sub">神经内科主任</div>
            </div>
            <div className="w-9 h-9 rounded-full bg-primary border-2 border-white shadow-sm flex items-center justify-center text-white font-bold text-xs">
              DR
            </div>
          </div>
        </header>

        <div className="p-6 flex-1 flex flex-col gap-6">
          {activeTab === 'home' && <DoctorHome />}
          {activeTab === 'archives' && <PatientArchives />}
          {activeTab === 'analysis' && <ComprehensiveAnalysis />}
          {activeTab === 'healing' && (
            <div className="flex items-center justify-center h-full text-slate-400">
              疗愈联动模块开发中...
            </div>
          )}
          {activeTab === 'reports' && <ReportCenter />}
        </div>
      </main>
    </div>
  );
}
