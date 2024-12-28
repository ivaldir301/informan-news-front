import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface PlatformButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export const PlatformButton = ({ icon: Icon, label, onClick }: PlatformButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
    >
      <Icon className="h-8 w-8 text-blue-600 mb-2" />
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </motion.button>
  );
};