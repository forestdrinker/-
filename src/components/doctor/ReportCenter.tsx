import React from 'react';
import { FileText, Download, Eye, CheckCircle, Clock } from 'lucide-react';

const reports = [
  { id: 'R001', patient: '王小明', type: '周报', date: '2024-04-14', status: '已审核', doctor: '王医生' },
  { id: 'R002', patient: '张华', type: '月报', date: '2024-04-14', status: '待审核', doctor: '王医生' },
  { id: 'R003', patient: '李雷', type: '周报', date: '2024-04-13', status: '已审核', doctor: '李医生' },
  { id: 'R004', patient: '赵敏', type: '周报', date: '2024-04-13', status: '已审核', doctor: '王医生' },
  { id: 'R005', patient: '孙悟空', type: '月报', date: '2024-04-12', status: '待审核', doctor: '张医生' },
];

export default function ReportCenter() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">报告中心</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
            批量导出
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl card-shadow flex items-center">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">156</div>
            <div className="text-sm text-slate-500">本月生成报告</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl card-shadow flex items-center">
          <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mr-4">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">12</div>
            <div className="text-sm text-slate-500">待审核报告</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl card-shadow flex items-center">
          <div className="w-12 h-12 bg-healing/10 rounded-xl flex items-center justify-center text-healing mr-4">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">144</div>
            <div className="text-sm text-slate-500">已审核报告</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl card-shadow overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">报告列表</h3>
          <div className="flex space-x-2">
            {['全部', '周报', '月报'].map((t) => (
              <button key={t} className={`px-3 py-1 rounded-lg text-xs font-bold ${
                t === '全部' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">报告编号</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">患者姓名</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">类型</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">生成日期</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">状态</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {reports.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">{r.id}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{r.patient}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{r.type}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{r.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    r.status === '已审核' ? 'bg-healing/10 text-healing' : 'bg-amber-100 text-amber-600'
                  }`}>
                    {r.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="查看">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="下载">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
