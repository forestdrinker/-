import React from 'react';
import { Search, Filter, MoreVertical, ChevronRight, User } from 'lucide-react';

const patients = [
  { id: 'P001', name: '王小明', age: 12, gender: '男', status: '风险', lastMonitoring: '2024-04-14 10:30', riskLevel: '高' },
  { id: 'P002', name: '张华', age: 15, gender: '女', status: '正常', lastMonitoring: '2024-04-14 09:15', riskLevel: '低' },
  { id: 'P003', name: '李雷', age: 10, gender: '男', status: '关注', lastMonitoring: '2024-04-13 16:45', riskLevel: '中' },
  { id: 'P004', name: '赵敏', age: 14, gender: '女', status: '正常', lastMonitoring: '2024-04-13 14:20', riskLevel: '低' },
  { id: 'P005', name: '孙悟空', age: 11, gender: '男', status: '风险', lastMonitoring: '2024-04-13 11:00', riskLevel: '高' },
];

export default function PatientArchives() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">患者档案</h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Filter className="w-4 h-4 mr-2" /> 筛选
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90">
            新增患者
          </button>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-line overflow-hidden">
        <table className="w-full text-left border-collapse font-sans">
          <thead>
            <tr className="border-b border-line">
              <th className="px-6 py-4 text-[14px] font-medium text-text-sub">患者信息</th>
              <th className="px-6 py-4 text-[14px] font-medium text-text-sub">状态</th>
              <th className="px-6 py-4 text-[14px] font-medium text-text-sub">风险等级</th>
              <th className="px-6 py-4 text-[14px] font-medium text-text-sub">最近监测</th>
              <th className="px-6 py-4 text-[14px] font-medium text-text-sub">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {patients.map((p) => (
              <tr key={p.id} className="hover:bg-bg transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs mr-3 shadow-sm border border-white">
                      {p.name[0]}
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-text-main">{p.name}</div>
                      <div className="text-[11px] text-text-sub">{p.id} · {p.gender} · {p.age}岁</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                    p.status === '正常' ? 'bg-green-50 text-healing' : 
                    p.status === '关注' ? 'bg-amber-50 text-warning' : 
                    'bg-red-50 text-danger'
                  }`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-16 h-1 bg-line rounded-full mr-2 overflow-hidden">
                      <div className={`h-full rounded-full ${
                        p.riskLevel === '高' ? 'bg-danger w-full' : 
                        p.riskLevel === '中' ? 'bg-warning w-2/3' : 
                        'bg-healing w-1/3'
                      }`} />
                    </div>
                    <span className="text-[12px] text-text-sub">{p.riskLevel}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-[14px] text-text-sub">
                  {p.lastMonitoring}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-text-sub hover:text-primary transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-text-sub hover:text-text-main transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 bg-bg border-t border-line flex items-center justify-between text-[12px] text-text-sub">
          显示 1 到 5 条，共 1,284 条记录
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-card border border-line rounded hover:bg-bg disabled:opacity-50" disabled>上一页</button>
            <button className="px-3 py-1 bg-card border border-line rounded hover:bg-bg">下一页</button>
          </div>
        </div>
      </div>
    </div>
  );
}
