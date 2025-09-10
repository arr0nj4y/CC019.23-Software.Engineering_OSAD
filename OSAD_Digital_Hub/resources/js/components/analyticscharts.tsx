import React from "react";
import { motion } from "framer-motion";

// --- Reusable Bar Chart Card Component ---
interface BarChartCardProps {
  title: string;
  data: {
    label: string;
    value: number;
  }[];
  colors?: string[];
}

const BarChartCard = ({ title, data, colors }: BarChartCardProps) => {
  return (
    <motion.div
      className="backdrop-blur-xl bg-white/40 border border-white/20 p-6 rounded-2xl shadow-md"
      whileHover={{ scale: 1.02, boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-lg font-bold text-gray-800 mb-6">{title}</h3>
      <div className="space-y-5">
        {data.map((item, index) => {
          const barColor =
            colors && colors[index % colors.length]
              ? colors[index % colors.length]
              : "#3B82F6"; // fallback blue

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                <span className="text-sm font-semibold text-gray-600">{item.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-3 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${barColor}aa, ${barColor})`,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

// --- Main Analytics Charts Component ---
const AnalyticsCharts = () => {
  const concernTrendsData = [
    { label: "Incomplete Uniform", value: 75 },
    { label: "Grooming Violation", value: 50 },
    { label: "Facility Misuse", value: 25 },
    { label: "Escalated", value: 25 },
  ];

  const mostBookedData = [
    { label: "Main Auditorium", value: 75 },
    { label: "Mini Auditorium", value: 50 },
    { label: "Main Lobby", value: 25 },
    { label: "Farmville", value: 25 },
  ];

  const compliantOrgsData = [
    { label: "F.A.C.E.S.", value: 75 },
    { label: "GDG", value: 50 },
    { label: "SITES", value: 25 },
    { label: "RS", value: 25 },
  ];

  return (
    <div className="flex flex-col gap-6">
      <BarChartCard
        title="Concern Trends"
        data={concernTrendsData}
        colors={["#EF4444", "#F59E0B", "#3B82F6", "#8B5CF6"]}
      />
      <BarChartCard
        title="Most Booked Facility"
        data={mostBookedData}
        colors={["#10B981", "#3B82F6", "#F59E0B", "#6366F1"]}
      />
      <BarChartCard
        title="Fully Compliant Organizations"
        data={compliantOrgsData}
        colors={["#F97316", "#06B6D4", "#10B981", "#8B5CF6"]}
      />
    </div>
  );
};

export default AnalyticsCharts;
