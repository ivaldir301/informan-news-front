import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { PricingCardProps } from './types';
import { cn } from '../../lib/utils';

export const PricingCard = ({ 
  planType, 
  name, 
  price, 
  features = [], // Provide default empty array
  ctaText,
  highlighted = false,
  onClick
}: PricingCardProps) => {
  return (
    <motion.div
      className={cn(
        "relative bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-all duration-300",
        highlighted && "ring-2 ring-blue-500 shadow-xl"
      )}
      whileHover={{ 
        scale: 1.05,
        zIndex: 1,
        transition: { duration: 0.2 }
      }}
    >
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="mt-4 flex items-baseline">
        <span className="text-4xl font-extrabold tracking-tight text-gray-900">
          ${price}
        </span>
        <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
      </p>
      <ul className="mt-6 space-y-4 flex-1">
        {Array.isArray(features) && features.map((feature) => (
          <li key={feature} className="flex">
            <Check className="h-5 w-5 text-green-500 shrink-0" />
            <span className="ml-3 text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'default' : 'outline'}
        className={`mt-8 w-full ${
          highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''
        }`}
        onClick={onClick}
      >
        {ctaText}
      </Button>
    </motion.div>
  );
};