import { motion } from 'framer-motion';

interface StatItemProps {
  label: string;
  value: string;
  index: number;
}

export const StatItem = ({ label, value, index }: StatItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col text-center"
    >
      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
        {label}
      </dt>
      <dd className="order-1 text-4xl font-extrabold text-white">
        {value}
      </dd>
    </motion.div>
  );
};