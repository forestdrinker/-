import React, { useState, useEffect } from 'react';
import { Play, Square, Activity, AlertTriangle, Clock } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { motion } from 'motion/react';

export default function Monitoring() {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [data, setData] = useState<{ time: number; value: number }[]>([]);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isMonitoring) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
        setData((prev) => {
          const newData = [...prev, { time: prev.length, value: 40 + Math.random() * 40 }];
          if (newData.length > 20) return newData.slice(1);
          return newData;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isMonitoring]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">日常监测</h1>
          <p className="text-slate-500">实时追踪患者情绪波动，及时发现异常</p>
        </div>
        <button
          onClick={() => {
            setIsMonitoring(!isMonitoring);
            if (!isMonitoring) {
              setData([]);
              setTimer(0);
            }
          }}
          className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all ${
            isMonitoring 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          {isMonitoring ? (
            <><Square className="w-5 h-5 mr-2 fill-current" /> 停止监测</>
          ) : (
            <><Play className="w-5 h-5 mr-2 fill-current" /> 开始监测</>
          )}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-8 rounded-2xl card-shadow relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2" />
              <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">实时情绪曲线</span>
            </div>
            <div className="flex items-center text-slate-400 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              {formatTime(timer)}
            </div>
          </div>

          <div className="h-[300px] w-full">
            {isMonitoring ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <YAxis domain={[0, 100]} hide />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#2563EB" 
                    strokeWidth={4} 
                    dot={false}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-300">
                <Activity className="w-16 h-16 mb-4 opacity-20" />
                <p>点击上方按钮开始监测</p>
              </div>
            )}
          </div>

          {isMonitoring && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-8 right-8 bg-healing/10 text-healing px-4 py-2 rounded-full text-sm font-bold border border-healing/20"
            >
              当前状态: 平稳
            </motion.div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl card-shadow">
            <h3 className="text-sm font-bold text-slate-400 uppercase mb-4">当前情绪标签</h3>
            <div className="flex flex-wrap gap-2">
              {['平静', '专注', '愉悦'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl card-shadow">
            <h3 className="text-sm font-bold text-slate-400 uppercase mb-4">监测指标</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">专注度</span>
                  <span className="font-bold text-slate-900">85%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">焦虑值</span>
                  <span className="font-bold text-slate-900">12%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-healing w-[12%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
            <div className="flex items-center text-amber-600 mb-2">
              <AlertTriangle className="w-5 h-5 mr-2" />
              <span className="font-bold">异常预警</span>
            </div>
            <p className="text-xs text-amber-700 leading-relaxed">
              系统将自动识别剧烈的情绪波动并记录，如波动过大将通过短信提醒主治医生。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
