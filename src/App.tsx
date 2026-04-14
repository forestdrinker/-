/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Role } from './types';
import Login from './components/Login';
import FamilyDashboard from './components/family/FamilyDashboard';
import DoctorDashboard from './components/doctor/DoctorDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [role, setRole] = useState<Role | null>(null);

  const handleLogout = () => setRole(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <AnimatePresence mode="wait">
        {!role ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Login onLogin={setRole} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-screen flex flex-col"
          >
            {role === 'family' && <FamilyDashboard onLogout={handleLogout} />}
            {role === 'doctor' && <DoctorDashboard onLogout={handleLogout} />}
            {role === 'admin' && <AdminDashboard onLogout={handleLogout} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
