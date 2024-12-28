import { motion } from 'framer-motion';
import { HeroContent } from './HeroContent';
import { UserStats } from './UserStats';
import { HeroImage } from './HeroImage';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-8 md:pb-24">
        <div className="relative">
          <HeroContent />
          <UserStats />
          <div className="hidden md:block">
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
  );
};