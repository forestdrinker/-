import React from 'react';
import { Search, Filter, MoreVertical, User, Shield, CheckCircle } from 'lucide-react';

const patients = [
  { id: 'P001', name: '王小明', group: '青少年组', status: '监测中', doctor: '王医生', risk: '高' },
  { id: 'P002', name: '张华', group: '成人组', status: '空闲', doctor: '李医生', risk: '低' },
  { id: 'P003', name: '李雷', group: '青少年组', status: '监测中', doctor: '王医生', risk: '中' },
  { id: 'P004', name: '赵敏', group: '成人组', status: '空闲', doctor: '张医生', risk: '低' },
  { id: 'P005', name: '孙悟空', group: '特殊护理组', status: '监测中', doctor: '李医生', risk: '高' },
];

export default function AdminPatientManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">患者管理</h1>
        <div className="flex space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="搜索患者..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm" />
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold">批量导入</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl card-shadow overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">患者/编号</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">分组</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">当前状态</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">主治医生</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">风险等级</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {patients.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mr-3">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{p.name}</div>
                      <div className="text-xs text-slate-400">{p.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{p.group}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-sm">
                    <div className={`w-2 h-2 rounded-full mr-2 ${p.status === '监测中' ? 'bg-primary animate-pulse' : 'bg-slate-300'}`} />
                    {p.status}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{p.doctor}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    p.risk === '高' ? 'bg-red-50 text-red-500' : 
                    p.risk === '中' ? 'bg-amber-50 text-amber-500' : 
                    'bg-healing/10 text-healing'
                  }`}>
                    {p.risk}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 text-slate-400 hover:text-slate-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
