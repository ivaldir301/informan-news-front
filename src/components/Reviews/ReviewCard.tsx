import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
  index: number;
}

export const ReviewCard = ({ name, role, content, avatar, rating, index }: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform rotate-1 rounded-2xl" />
      <div className="relative bg-white p-8 rounded-2xl shadow-xl">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full ring-4 ring-blue-50"
            src={avatar}
            alt={name}
          />
          <div className="ml-4">
            <h4 className="text-lg font-bold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <div className="flex mt-2">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="mt-4 text-gray-600 leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
};