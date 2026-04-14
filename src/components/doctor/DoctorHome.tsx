import React from 'react';
import { Users, AlertCircle, TrendingUp, ArrowRight, UserPlus } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../../lib/utils';

const data = [
  { name: '04-08', normal: 40, risk: 5 },
  { name: '04-09', normal: 45, risk: 8 },
  { name: '04-10', normal: 42, risk: 12 },
  { name: '04-11', normal: 48, risk: 6 },
  { name: '04-12', normal: 50, risk: 4 },
  { name: '04-13', normal: 47, risk: 7 },
  { name: '04-14', normal: 52, risk: 3 },
];

export default function DoctorHome() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-5">
        {[
          { label: '当前负责患者', value: '128', unit: '人', color: 'text-text-main' },
          { label: '待处理异常', value: '06', unit: '例', color: 'text-danger' },
          { label: '今日监测次数', value: '342', unit: '次', color: 'text-text-main' },
          { label: '疗愈有效率', value: '82%', unit: '', color: 'text-healing' },
        ].map((stat, i) => (
          <div key={i} className="bg-card p-5 rounded-xl border border-line flex flex-col gap-2">
            <span className="text-[12px] text-text-sub">{stat.label}</span>
            <div className={`text-[24px] font-bold flex items-baseline gap-1 ${stat.color}`}>
              {stat.value} {stat.unit && <span className="text-[12px] font-normal text-text-sub">{stat.unit}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
        <div className="col-span-2 bg-card rounded-xl border border-line flex flex-col overflow-hidden">
          <div className="p-4 border-b border-line flex justify-between items-center">
            <h2 className="text-[16px] font-semibold text-text-main">重点关注患者</h2>
            <span className="text-[12px] text-primary cursor-pointer hover:underline">查看全部档案 →</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="text-text-sub font-medium border-b border-line">
                  <th className="p-4">姓名</th>
                  <th className="p-4">风险等级</th>
                  <th className="p-4">当前情绪</th>
                  <th className="p-4">最近监测</th>
                  <th className="p-4">干预状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {[
                  { name: '张小凡 (ID: 021)', risk: '极高风险', emotion: '重度焦虑', time: '10分钟前', status: '待接诊', type: 'danger' },
                  { name: '李美铃 (ID: 045)', risk: '关注', emotion: '中度抑郁', time: '35分钟前', status: '疗愈中', type: 'warning' },
                  { name: '王大伟 (ID: 102)', risk: '正常', emotion: '平静', time: '1小时前', status: '定期随访', type: 'success' },
                  { name: '赵思琴 (ID: 089)', risk: '高风险', emotion: '自闭倾向', time: '12分钟前', status: '已干预', type: 'danger' },
                  { name: '孙博文 (ID: 056)', risk: '关注', emotion: '情感淡漠', time: '2小时前', status: '定期随访', type: 'warning' },
                ].map((p, i) => (
                  <tr key={i} className="hover:bg-bg transition-colors">
                    <td className="p-4 font-medium">{p.name}</td>
                    <td className="p-4">
                      <span className={cn(
                        "px-2.5 py-1 rounded-full text-[11px] font-semibold",
                        p.type === 'danger' ? "bg-red-50 text-danger" : 
                        p.type === 'warning' ? "bg-amber-50 text-warning" : 
                        "bg-green-50 text-healing"
                      )}>
                        {p.risk}
                      </span>
                    </td>
                    <td className="p-4 text-text-sub">{p.emotion}</td>
                    <td className="p-4 text-text-sub">{p.time}</td>
                    <td className="p-4 text-text-sub">{p.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-card p-5 rounded-xl border border-line">
            <h2 className="text-[16px] font-semibold text-text-main mb-4">实时预警日志</h2>
            <div className="space-y-0">
              {[
                { name: '张小凡', msg: '出现高频β波波动，面部识别判定为“极度恐惧”。', time: '刚刚 · 监测室-A', type: 'red' },
                { name: '赵思琴', msg: '监测中断，请家属端确认设备连接状态。', time: '14:20 · 远程监测', type: 'warning' },
                { name: '李美铃', msg: '心率持续上升至115bpm，伴随负面情绪信号。', time: '13:55 · 视频疗愈室', type: 'red' },
              ].map((alert, i) => (
                <div key={i} className="py-3 border-b border-dashed border-line last:border-none flex gap-3 items-start">
                  <div className={cn(
                    "w-2 h-2 rounded-full mt-1.5 flex-shrink-0",
                    alert.type === 'red' ? "bg-danger shadow-[0_0_6px_var(--color-danger)]" : "bg-warning"
                  )} />
                  <div className="text-[13px] leading-relaxed">
                    <strong className="text-text-main">{alert.name}</strong> {alert.msg}
                    <div className="text-[11px] text-text-sub mt-1">{alert.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-5 rounded-xl border border-line flex-1 flex flex-col">
            <h2 className="text-[16px] font-semibold text-text-main mb-4">整体情绪趋势</h2>
            <div className="h-40 bg-gradient-to-r from-transparent to-primary/5 rounded-xl relative overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <Area type="monotone" dataKey="normal" stroke="#2563EB" fill="transparent" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
              <div className="absolute bottom-2 left-2 text-[10px] text-text-sub">08:00</div>
              <div className="absolute bottom-2 right-2 text-[10px] text-text-sub">16:00</div>
            </div>
            <p className="text-[12px] text-text-sub mt-3 leading-relaxed">
              本机构今日整体情绪指数处于 <strong className="text-text-main">稳定期</strong>，峰值出现在午后14点，建议增加午后疗愈频次。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
