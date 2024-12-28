import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <MessageSquare className="h-8 w-8 text-blue-600" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -top-1 -right-1 transform rotate-12"
        >
          <MessageSquare className="h-6 w-6 text-blue-400" />
        </motion.div>
      </div>
      <span className="text-2xl font-bold text-blue-600">Informan</span>
    </div>
  );
};