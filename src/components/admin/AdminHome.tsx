import React from 'react';
import { Users, Activity, Video, AlertCircle, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: '04-08', users: 400, tasks: 240 },
  { name: '04-09', users: 300, tasks: 139 },
  { name: '04-10', users: 200, tasks: 980 },
  { name: '04-11', users: 278, tasks: 390 },
  { name: '04-12', users: 189, tasks: 480 },
  { name: '04-13', users: 239, tasks: 380 },
  { name: '04-14', users: 349, tasks: 430 },
];

export default function AdminHome() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-5">
        {[
          { label: '今日监测人数', value: '1,284', icon: <Users />, color: 'text-primary', trend: '+12%', up: true },
          { label: '异常预警人数', value: '24', icon: <AlertCircle />, color: 'text-danger', trend: '-5%', up: false },
          { label: '本周疗愈使用', value: '3,562', icon: <Video />, color: 'text-[#8B5CF6]', trend: '+18%', up: true },
          { label: '风险患者数量', value: '12', icon: <Activity />, color: 'text-warning', trend: '+2%', up: true },
        ].map((stat, i) => (
          <div key={i} className="bg-card p-5 rounded-xl border border-line flex flex-col gap-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[12px] text-text-sub">{stat.label}</span>
              <div className={`flex items-center text-[11px] font-bold ${stat.up ? 'text-healing' : 'text-danger'}`}>
                {stat.up ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                {stat.trend}
              </div>
            </div>
            <div className="text-[24px] font-bold text-text-main">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-card p-6 rounded-xl border border-line">
          <h3 className="text-[16px] font-semibold text-text-main mb-6">平台活跃度分析</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                <Line type="monotone" dataKey="users" stroke="#2563EB" strokeWidth={2} dot={{ r: 3, fill: '#2563EB' }} />
                <Line type="monotone" dataKey="tasks" stroke="#10B981" strokeWidth={2} dot={{ r: 3, fill: '#10B981' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-line flex flex-col gap-6">
          <div>
            <h3 className="text-[16px] font-semibold text-text-main mb-4">机构统计摘要</h3>
            <div className="space-y-5">
              {[
                { label: '合作医院', value: '12', color: 'bg-primary' },
                { label: '入驻医生', value: '84', color: 'bg-secondary' },
                { label: '康复机构', value: '26', color: 'bg-healing' },
                { label: '覆盖社区', value: '150+', color: 'bg-[#8B5CF6]' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[13px] mb-1.5">
                    <span className="text-text-sub">{item.label}</span>
                    <span className="font-semibold text-text-main">{item.value}</span>
                  </div>
                  <div className="h-1.5 bg-bg rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} w-3/4`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-auto p-4 bg-bg rounded-lg border border-line">
            <div className="text-[11px] text-text-sub mb-3 uppercase font-bold tracking-wider">最近告警日志</div>
            <div className="space-y-2.5">
              <div className="text-[12px] text-text-main flex justify-between">
                <span className="truncate mr-2">● [预警] P001 情绪剧烈波动</span>
                <span className="text-text-sub flex-shrink-0">14:30</span>
              </div>
              <div className="text-[12px] text-text-main flex justify-between">
                <span className="truncate mr-2">● [任务] 监测任务 #1024 未完成</span>
                <span className="text-text-sub flex-shrink-0">12:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
