import React from 'react';
import { Play, Clock, Star, ArrowRight, Video } from 'lucide-react';

export default function HealingSession() {
  const sessions = [
    { title: '晨间冥想：开启平静的一天', duration: '15:00', type: '冥想', image: 'https://picsum.photos/seed/meditation/400/250' },
    { title: '舒缓白噪音：森林雨声', duration: '30:00', type: '白噪音', image: 'https://picsum.photos/seed/forest/400/250' },
    { title: '情绪引导：应对突发焦虑', duration: '10:00', type: '引导', image: 'https://picsum.photos/seed/relax/400/250' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">视频疗愈</h1>
        <p className="text-slate-500">精选专业疗愈内容，帮助患者舒缓情绪压力</p>
      </div>

      <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white flex items-center justify-between">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-2">今日推荐：深度放松引导</h2>
          <p className="text-white/80 mb-6">由专业心理咨询师录制，适合在睡前或情绪波动时观看。</p>
          <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold flex items-center hover:bg-white/90 transition-colors">
            <Play className="w-5 h-5 mr-2 fill-current" /> 立即播放
          </button>
        </div>
        <div className="hidden md:block w-64 h-40 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <Video className="w-16 h-16 opacity-50" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {sessions.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden card-shadow group cursor-pointer">
            <div className="relative h-40">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {s.duration}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center text-xs font-bold text-primary uppercase tracking-wider mb-2">
                <Star className="w-3 h-3 mr-1 fill-current" /> {s.type}
              </div>
              <h3 className="font-bold text-slate-900 mb-4 line-clamp-2">{s.title}</h3>
              <div className="flex items-center justify-between text-slate-400 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> 最近使用: 2天前
                </div>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
