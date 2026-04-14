import React from 'react';
import { ClipboardList, CheckCircle2, Circle, AlertCircle, Clock } from 'lucide-react';

const tasks = [
  { id: 'T1024', patient: '王小明', time: '10:00 - 11:00', status: '已完成', type: '日常监测' },
  { id: 'T1025', patient: '李雷', time: '14:00 - 15:00', status: '进行中', type: '深度分析' },
  { id: 'T1026', patient: '张华', time: '16:00 - 17:00', status: '待开始', type: '日常监测' },
  { id: 'T1027', patient: '孙悟空', time: '09:00 - 10:00', status: '异常', type: '日常监测' },
];

export default function MonitoringTasks() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">监测任务管理</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
            任务排程
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl card-shadow border-b-4 border-primary">
          <div className="text-sm text-slate-400 font-bold mb-1">今日总任务</div>
          <div className="text-3xl font-bold text-slate-900">48</div>
        </div>
        <div className="bg-white p-6 rounded-2xl card-shadow border-b-4 border-healing">
          <div className="text-sm text-slate-400 font-bold mb-1">已完成</div>
          <div className="text-3xl font-bold text-slate-900">32</div>
        </div>
        <div className="bg-white p-6 rounded-2xl card-shadow border-b-4 border-secondary">
          <div className="text-sm text-slate-400 font-bold mb-1">进行中</div>
          <div className="text-3xl font-bold text-slate-900">6</div>
        </div>
        <div className="bg-white p-6 rounded-2xl card-shadow border-b-4 border-red-500">
          <div className="text-sm text-slate-400 font-bold mb-1">异常中断</div>
          <div className="text-3xl font-bold text-slate-900">2</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl card-shadow overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-bold text-slate-900">今日任务清单</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {tasks.map((t) => (
            <div key={t.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                  t.status === '已完成' ? 'bg-healing/10 text-healing' : 
                  t.status === '进行中' ? 'bg-primary/10 text-primary' : 
                  t.status === '异常' ? 'bg-red-100 text-red-600' : 
                  'bg-slate-100 text-slate-400'
                }`}>
                  {t.status === '已完成' ? <CheckCircle2 className="w-5 h-5" /> : 
                   t.status === '进行中' ? <Clock className="w-5 h-5 animate-spin-slow" /> : 
                   t.status === '异常' ? <AlertCircle className="w-5 h-5" /> : 
                   <Circle className="w-5 h-5" />}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.patient} · {t.type}</div>
                  <div className="text-xs text-slate-400">任务编号: {t.id} · 时间窗: {t.time}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right mr-8">
                  <div className="text-xs text-slate-400 font-bold uppercase mb-1">进度</div>
                  <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${
                      t.status === '已完成' ? 'bg-healing w-full' : 
                      t.status === '进行中' ? 'bg-primary w-1/2' : 
                      t.status === '异常' ? 'bg-red-500 w-1/3' : 
                      'bg-slate-200 w-0'
                    }`} />
                  </div>
                </div>
                <button className="px-4 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors">
                  查看详情
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
