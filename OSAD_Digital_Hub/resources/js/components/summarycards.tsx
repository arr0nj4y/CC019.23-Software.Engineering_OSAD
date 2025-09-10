import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, FileText, CheckCircle } from "lucide-react"; // New icons

// --- Individual Card Component ---
interface SummaryCardProps {
  icon: React.ElementType;
  title: string;
  value: number;
  color: string;
  delay: number;
}

const SummaryCard = ({ icon: Icon, title, value, color, delay }: SummaryCardProps) => {
  return (
    <motion.div
      className="backdrop-blur-xl bg-white/30 border border-white/20 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${color}55` }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="p-4 rounded-full mb-4"
        style={{ backgroundColor: `${color}20`, color }}
        whileHover={{ rotate: 15, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <Icon size={40} strokeWidth={2.5} />
      </motion.div>
      <motion.p
        className="text-4xl font-extrabold text-gray-900"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {value}
      </motion.p>
      <p className="text-sm font-medium text-gray-600">{title}</p>
    </motion.div>
  );
};

// --- Main Component to hold all cards ---
const SummaryCards = () => {
  const stats = [
    {
      icon: BookOpen,
      title: "Total Bookings",
      value: 847,
      color: "#3B82F6", // Blue
    },
    {
      icon: Clock,
      title: "Pending Concerns",
      value: 24,
      color: "#F97316", // Orange
    },
    {
      icon: FileText,
      title: "Concerns Submitted",
      value: 56,
      color: "#8B5CF6", // Purple
    },
    {
      icon: CheckCircle,
      title: "Resolved Concerns",
      value: 423,
      color: "#10B981", // Green
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <SummaryCard
          key={stat.title}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
          color={stat.color}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
};

export default SummaryCards;
