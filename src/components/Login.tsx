import React from 'react';
import { Role } from '../types';
import { Heart, Stethoscope, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

interface LoginProps {
  onLogin: (role: Role) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const roles: { id: Role; title: string; desc: string; icon: React.ReactNode; color: string }[] = [
    {
      id: 'family',
      title: '家属端',
      desc: '陪伴、监测、查看报告与疗愈内容',
      icon: <Heart className="w-8 h-8" />,
      color: 'bg-healing text-white',
    },
    {
      id: 'doctor',
      title: '医生端',
      desc: '患者档案、趋势分析、干预评估',
      icon: <Stethoscope className="w-8 h-8" />,
      color: 'bg-primary text-white',
    },
    {
      id: 'admin',
      title: '管理端',
      desc: '全局监管、任务管理、可视化大屏',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'bg-[#8B5CF6] text-white',
    },
  ];

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-main mb-4">◈ 心境守望</h1>
          <p className="text-text-sub text-lg">面向抑郁症 / 自闭症患者的心理情绪监测平台</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => onLogin(r.id)}
              className="group relative bg-card p-8 rounded-xl border border-line hover:border-primary/40 hover:shadow-sm transition-all duration-300 text-left"
            >
              <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105", r.color)}>
                {r.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main mb-2">{r.title}</h3>
              <p className="text-text-sub text-sm leading-relaxed">{r.desc}</p>
              <div className="mt-6 flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                点击进入
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
