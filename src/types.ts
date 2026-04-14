export type Role = 'family' | 'doctor' | 'admin';

export interface User {
  id: string;
  name: string;
  role: Role;
  avatar?: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  status: 'normal' | 'attention' | 'risk';
  lastMonitoring?: string;
  riskLevel: number; // 0-100
}

export interface EmotionData {
  timestamp: string;
  value: number; // 0-100
  label: string; // e.g., "Happy", "Sad", "Anxious"
}

export interface MonitoringSession {
  id: string;
  patientId: string;
  startTime: string;
  endTime?: string;
  duration: number; // minutes
  averageEmotion: number;
  peakEmotion: number;
  emotions: EmotionData[];
}

export interface Report {
  id: string;
  patientId: string;
  type: 'weekly' | 'monthly';
  date: string;
  summary: string;
  trends: { date: string; value: number }[];
  distribution: { name: string; value: number }[];
}
