import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Feature } from './Feature';
import { featureIcons } from '../constants';

export const FeatureList = () => {
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