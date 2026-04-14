import React, { useState, useEffect } from 'react';
import { ArrowLeft, Maximize2, Activity, Users, AlertCircle, Video, TrendingUp, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const pieData = [
  { name: '正常', value: 75, color: '#10B981' },
  { name: '关注', value: 15, color: '#F59E0B' },
  { name: '预警', value: 7, color: '#EF4444' },
  { name: '高风险', value: 3, color: '#991B1B' },
];

const trendData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  value: 40 + Math.random() * 40,
}));

interface BigScreenProps {
  onBack: () => void;
}

export default function BigScreen({ onBack }: BigScreenProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0A0F1E] text-white z-50 overflow-hidden flex flex-col font-sans">
      {/* Header */}
      <header className="h-20 border-b border-white/10 flex items-center justify-between px-8 bg-[#0D1425]">
        <div className="flex items-center">
          <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-lg mr-4 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-wider text-primary">心理情绪监测管理可视化大屏</h1>
            <div className="text-xs text-slate-500 uppercase tracking-widest mt-0.5">MIND WATCH EMOTION MONITORING DASHBOARD</div>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="text-right">
            <div className="text-xl font-mono font-bold text-primary">{time.toLocaleTimeString()}</div>
            <div className="text-xs text-slate-500">{time.toLocaleDateString()}</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <span className="w-2 h-2 bg-healing rounded-full mr-2 animate-pulse" />
              在线: 1,284
            </div>
            <div className="flex items-center text-sm">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              监测中: 48
            </div>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 grid grid-cols-4 gap-6 overflow-hidden">
        {/* Left Column */}
        <div className="space-y-6 flex flex-col">
          <div className="bg-[#121B33] border border-white/5 p-6 rounded-xl flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-slate-400 mb-6 flex items-center">
              <Users className="w-4 h-4 mr-2 text-primary" /> 患者总览
            </h3>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {[
                { label: '总人数', value: '12,840', color: 'text-white' },
                { label: '今日监测', value: '1,284', color: 'text-primary' },
                { label: '异常预警', value: '24', color: 'text-red-500' },
                { label: '本周报告', value: '3,562', color: 'text-healing' },
              ].map((s, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-lg flex flex-col justify-center">
                  <div className="text-xs text-slate-500 mb-1">{s.label}</div>
                  <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#121B33] border border-white/5 p-6 rounded-xl flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-slate-400 mb-6 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 text-amber-500" /> 风险等级分布
            </h3>
            <div className="flex-1 flex flex-col justify-center">
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#121B33', border: 'none', borderRadius: '8px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {pieData.map((item) => (
                  <div key={item.name} className="flex items-center text-[10px] text-slate-400">
                    <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                    {item.name}: {item.value}%
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="col-span-2 space-y-6 flex flex-col">
          <div className="bg-[#121B33] border border-white/5 p-6 rounded-xl flex-[2] flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-bold text-slate-400 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-primary" /> 实时情绪趋势大图
              </h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-primary text-white text-xs rounded font-bold">当天</button>
                <button className="px-3 py-1 bg-white/5 text-slate-400 text-xs rounded font-bold hover:bg-white/10 transition-colors">本周</button>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="colorBig" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#475569', fontSize: 10 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#475569', fontSize: 10 }} />
                  <Tooltip contentStyle={{ backgroundColor: '#121B33', border: 'none', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)' }} />
                  <Area type="monotone" dataKey="value" stroke="#2563EB" fillOpacity={1} fill="url(#colorBig)" strokeWidth={4} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 flex-1">
            <div className="bg-[#121B33] border border-white/5 p-6 rounded-xl flex flex-col">
              <h3 className="text-sm font-bold text-slate-400 mb-6 flex items-center">
                <Activity className="w-4 h-4 mr-2 text-healing" /> 九类情绪分布
              </h3>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { name: '愉悦', val: 85 },
                    { name: '平静', val: 72 },
                    { name: '专注', val: 90 },
                    { name: '焦虑', val: 45 },
                    { name: '悲伤', val: 30 },
                  ]}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#475569', fontSize: 10 }} />
                    <Bar dataKey="val" fill="#10B981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-[#121B33] border border-white/5 p-6 rounded-xl flex flex-col">
              <h3 className="text-sm font-bold text-slate-400 mb-6 flex items-center">
                <Video className="w-4 h-4 mr-2 text-soft-purple" /> 视频疗愈统计
              </h3>
              <div className="flex-1 flex flex-col justify-center space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">今日使用次数</div>
                    <div className="text-2xl font-bold text-white">1,562</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-healing font-bold mb-1">+12.5%</div>
                    <div className="text-[10px] text-slate-500">较昨日</div>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">情绪改善率</div>
                    <div className="text-2xl font-bold text-white">78.4%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-healing font-bold mb-1">+5.2%</div>
                    <div className="text-[10px] text-slate-500">较上周</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 flex flex-col">
          <div className="bg-[#121B33] border border-white/5 p-6 rounded-xl flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-slate-400 mb-6 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 text-red-500" /> 异常患者榜单
            </h3>
            <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
              {[
                { name: '王小明', status: '高风险', time: '14:30', level: '剧烈波动' },
                { name: '李雷', status: '预警', time: '15:12', level: '焦虑上升' },
                { name: '孙悟空', status: '高风险', time: '16:05', level: '心率异常' },
                { name: '张华', status: '关注', time: '16:45', level: '持续低落' },
              ].map((p, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-lg flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">{p.name}</div>
                    <div className="text-[10px] text-slate-500">{p.time} · {p.level}</div>
                  </div>
                  <div className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                    p.status === '高风险' ? 'bg-red-500/20 text-red-500' : 'bg-amber-500/20 text-amber-500'
                  }`}>
                    {p.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#121B33] border border-white/5 p-6 rounded-xl flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-slate-400 mb-6 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-primary" /> 最近预警日志
            </h3>
            <div className="flex-1 space-y-3 overflow-hidden">
              {[
                { time: '16:45:12', msg: '患者 P004 情绪稳定性下降' },
                { time: '16:40:05', msg: '监测任务 #1028 已开始' },
                { time: '16:35:22', msg: '系统自动生成周报 12 份' },
                { time: '16:30:00', msg: '患者 P001 预警解除' },
                { time: '16:25:10', msg: '疗愈视频 #024 播放量激增' },
              ].map((l, i) => (
                <div key={i} className="flex items-start space-x-3 text-[10px]">
                  <span className="text-primary font-mono flex-shrink-0">{l.time}</span>
                  <span className="text-slate-400 truncate">{l.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}
