import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Play, FileText, Video, AlertCircle, ChevronRight } from 'lucide-react';

const data = [
  { name: 'Mon', value: 65 },
  { name: 'Tue', value: 59 },
  { name: 'Wed', value: 80 },
  { name: 'Thu', value: 81 },
  { name: 'Fri', value: 56 },
  { name: 'Sat', value: 55 },
  { name: 'Sun', value: 40 },
];

export default function FamilyHome() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-[24px] font-bold text-text-main">你好, 李女士</h1>
          <p className="text-text-sub mt-1 text-[14px]">今天也要给小明更多的陪伴哦</p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-green-50 text-healing text-[12px] font-semibold rounded-full border border-green-100">当前状态: 稳定</span>
          <span className="px-3 py-1 bg-bg text-text-sub text-[12px] font-semibold rounded-full border border-line">今日已监测</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-5">
        <button className="flex items-center justify-between p-5 bg-primary text-white rounded-xl shadow-sm hover:bg-primary/90 transition-all group">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
              <Play className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[16px]">开始监测</div>
              <div className="text-[11px] text-white/70">实时情绪追踪</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 opacity-50" />
        </button>
        <button className="flex items-center justify-between p-5 bg-card border border-line rounded-xl hover:bg-bg transition-all group">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-50 text-healing rounded-lg flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-bold text-text-main text-[16px]">查看报告</div>
              <div className="text-[11px] text-text-sub">本周情绪总结</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-text-sub" />
        </button>
        <button className="flex items-center justify-between p-5 bg-card border border-line rounded-xl hover:bg-bg transition-all group">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-50 text-[#8B5CF6] rounded-lg flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
              <Video className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-bold text-text-main text-[16px]">视频疗愈</div>
              <div className="text-[11px] text-text-sub">舒缓情绪内容</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-text-sub" />
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left: Trend & Overview */}
        <div className="col-span-2 space-y-6">
          <div className="bg-card p-6 rounded-xl border border-line">
            <h3 className="text-[16px] font-semibold text-text-main mb-6">最近 7 天情绪趋势</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#2563EB" 
                    strokeWidth={2} 
                    dot={{ r: 3, fill: '#2563EB' }}
                    activeDot={{ r: 5, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl border border-line">
              <h3 className="text-[16px] font-semibold text-text-main mb-4">今日情绪概览</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[32px] font-bold text-primary">82%</div>
                  <div className="text-[13px] text-text-sub">平均正面情绪</div>
                </div>
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center border border-primary/10">
                  <span className="text-2xl">😊</span>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-line border-l-4 border-l-warning">
              <h3 className="text-[16px] font-semibold text-text-main mb-2">异常提醒</h3>
              <p className="text-[13px] text-text-sub mb-4 leading-relaxed">今日 14:30 出现短暂情绪波动，建议关注。</p>
              <button className="text-[13px] font-semibold text-primary hover:underline">查看详情</button>
            </div>
          </div>
        </div>

        {/* Right: Records & Suggestions */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-xl border border-line">
            <h3 className="text-[16px] font-semibold text-text-main mb-4">最近监测记录</h3>
            <div className="space-y-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-bg transition-colors">
                  <div>
                    <div className="text-[14px] font-medium text-text-main">日常监测 #{i}</div>
                    <div className="text-[11px] text-text-sub">2024-04-14 10:30</div>
                  </div>
                  <div className="text-[13px] font-bold text-healing">稳定</div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-[13px] font-medium text-text-sub hover:text-primary transition-colors">查看全部记录</button>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-5 h-5 text-primary mr-2" />
              <h3 className="text-[16px] font-semibold text-text-main">医生建议</h3>
            </div>
            <p className="text-[13px] text-text-sub leading-relaxed italic">
              "近期小明的情绪表现非常稳定，建议继续保持目前的陪伴频率，并在周末尝试一些户外活动。"
            </p>
            <div className="mt-4 text-[11px] text-text-sub">— 王医生 · 2024-04-12</div>
          </div>
        </div>
      </div>
    </div>
  );
}
