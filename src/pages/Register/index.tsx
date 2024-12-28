import { motion } from 'framer-motion';
import { RegisterHeader } from './components/RegisterHeader';
import { RegisterPricing } from './components/RegisterPricing';

export const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <RegisterHeader />
        <RegisterPricing />
      </div>
    </div>
  );
};