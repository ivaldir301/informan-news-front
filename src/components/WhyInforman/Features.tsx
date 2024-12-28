import { motion } from 'framer-motion';
import { Clock, Newspaper, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Feature } from './Feature';

const featureIcons = {
  time: Clock,
  coverage: Newspaper,
  delivery: Smartphone,
} as const;

export const Features = () => {
  const { t } = useTranslation();
  
  const features = Object.entries(featureIcons).map(([key, Icon]) => ({
    icon: Icon,
    title: t(`whyInforman.features.${key}.title`),
    description: t(`whyInforman.features.${key}.description`)
  }));

  return (
    <div className="mt-12 space-y-10">
      {features.map((feature, index) => (
        <Feature 
          key={feature.title}
          {...feature}
          index={index}
        />
      ))}
    </div>
  );
};