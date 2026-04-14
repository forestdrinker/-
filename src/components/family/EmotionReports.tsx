import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Download, Calendar, TrendingUp } from 'lucide-react';

const pieData = [
  { name: '平静', value: 45, color: '#10B981' },
  { name: '愉悦', value: 30, color: '#06B6D4' },
  { name: '焦虑', value: 15, color: '#F59E0B' },
  { name: '愤怒', value: 5, color: '#EF4444' },
  { name: '其他', value: 5, color: '#94A3B8' },
];

const barData = [
  { name: '周一', value: 85 },
  { name: '周二', value: 72 },
  { name: '周三', value: 90 },
  { name: '周四', value: 65 },
  { name: '周五', value: 88 },
  { name: '周六', value: 95 },
  { name: '周日', value: 82 },
];

export default function EmotionReports() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">情绪报告</h1>
          <p className="text-slate-500">基于监测数据的深度分析，帮助您了解患者的情绪周期</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl font-medium hover:bg-slate-50 transition-colors">
          <Download className="w-4 h-4 mr-2" /> 导出 PDF 报告
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl card-shadow">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-slate-900">本周情绪波动趋势</h3>
              <div className="flex items-center text-sm text-slate-400">
                <Calendar className="w-4 h-4 mr-1" /> 2024.04.08 - 2024.04.14
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
                  <Tooltip cursor={{ fill: '#F8FAFC' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                  <Bar dataKey="value" fill="#2563EB" radius={[4, 4, 0, 0]} barSize={32} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl card-shadow">
            <h3 className="text-lg font-bold text-slate-900 mb-6">专家总结</h3>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed">
                本周患者整体情绪状态处于<strong>“稳定”</strong>区间。周三下午出现了一次明显的焦虑峰值，可能与当天的天气变化或环境嘈杂有关。
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                  正面情绪占比提升了 12%，显示出目前的干预方案有效。
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                  睡眠质量与情绪稳定性呈正相关，建议继续保持规律作息。
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl card-shadow">
            <h3 className="text-lg font-bold text-slate-900 mb-8">情绪分布占比</h3>
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 space-y-3">
              {pieData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                    {item.name}
                  </div>
                  <div className="text-sm font-bold text-slate-900">{item.value}%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary p-6 rounded-2xl text-white shadow-lg shadow-primary/20">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 mr-2" />
              <h3 className="text-lg font-bold">改善建议</h3>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              基于本周数据，建议增加 15% 的户外互动时间，并尝试引入新的视觉疗愈素材。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
