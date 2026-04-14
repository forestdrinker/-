import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Brain, Smile, Activity, Zap } from 'lucide-react';

const radarData = [
  { subject: '愉悦', A: 120, B: 110, fullMark: 150 },
  { subject: '平静', A: 98, B: 130, fullMark: 150 },
  { subject: '专注', A: 86, B: 130, fullMark: 150 },
  { subject: '焦虑', A: 99, B: 100, fullMark: 150 },
  { subject: '愤怒', A: 85, B: 90, fullMark: 150 },
  { subject: '悲伤', A: 65, B: 85, fullMark: 150 },
];

const trendData = [
  { time: '10:00', eeg: 45, facial: 40 },
  { time: '10:05', eeg: 52, facial: 48 },
  { time: '10:10', eeg: 48, facial: 60 },
  { time: '10:15', eeg: 70, facial: 65 },
  { time: '10:20', eeg: 65, facial: 55 },
  { time: '10:25', eeg: 58, facial: 50 },
  { time: '10:30', eeg: 50, facial: 45 },
];

export default function ComprehensiveAnalysis() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">综合情绪分析</h1>
          <p className="text-slate-500">结合 EEG 脑电波与面部表情识别的多维情绪评估</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl border border-slate-200">
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold">实时分析</button>
          <button className="px-4 py-2 text-slate-500 rounded-lg text-sm font-medium hover:bg-slate-50">历史回溯</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl card-shadow">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-slate-900 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-primary" />
                多模态情绪同步趋势
              </h3>
              <div className="flex space-x-4">
                <div className="flex items-center text-xs text-slate-400">
                  <div className="w-3 h-3 bg-primary rounded-full mr-1" /> EEG 脑电
                </div>
                <div className="flex items-center text-xs text-slate-400">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-1" /> 面部识别
                </div>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                  <Line type="monotone" dataKey="eeg" stroke="#2563EB" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="facial" stroke="#06B6D4" strokeWidth={3} dot={false} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl card-shadow">
              <div className="flex items-center mb-4">
                <Brain className="w-5 h-5 text-soft-purple mr-2" />
                <h3 className="font-bold text-slate-900">EEG 关键指标</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Alpha 波 (放松)</span>
                    <span className="font-bold text-slate-900">良好</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-healing w-3/4" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Beta 波 (专注)</span>
                    <span className="font-bold text-slate-900">活跃</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl card-shadow">
              <div className="flex items-center mb-4">
                <Smile className="w-5 h-5 text-amber-500 mr-2" />
                <h3 className="font-bold text-slate-900">面部微表情分析</h3>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-center px-4">
                  <div className="text-2xl font-bold text-slate-900">82%</div>
                  <div className="text-xs text-slate-400">表情一致性</div>
                </div>
                <div className="w-px h-12 bg-slate-100" />
                <div className="text-center px-4">
                  <div className="text-2xl font-bold text-slate-900">1.2s</div>
                  <div className="text-xs text-slate-400">平均反应时长</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl card-shadow">
            <h3 className="text-lg font-bold text-slate-900 mb-8">九类情绪多维分布</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#F1F5F9" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94A3B8', fontSize: 10 }} />
                  <Radar
                    name="当前状态"
                    dataKey="A"
                    stroke="#2563EB"
                    fill="#2563EB"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="基准状态"
                    dataKey="B"
                    stroke="#94A3B8"
                    fill="#94A3B8"
                    fillOpacity={0.2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-center space-x-6">
              <div className="flex items-center text-xs text-slate-400">
                <div className="w-3 h-3 bg-primary rounded-full mr-1 opacity-60" /> 当前
              </div>
              <div className="flex items-center text-xs text-slate-400">
                <div className="w-3 h-3 bg-slate-300 rounded-full mr-1 opacity-60" /> 基准
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-white">
            <div className="flex items-center mb-4">
              <Zap className="w-5 h-5 text-amber-400 mr-2" />
              <h3 className="font-bold">智能评估结论</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              当前 EEG 与面部表情同步率较高，未发现明显的认知负荷过载。建议维持当前干预强度。
            </p>
            <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold transition-colors">
              生成临床诊断建议
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
