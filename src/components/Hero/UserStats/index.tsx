import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { UserAvatar } from './UserAvatar';
import { StarRating } from './StarRating';

const USER_AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
];

export const UserStats = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8 sm:mt-16"
    >
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="flex items-center">
          <div className="flex">
            {USER_AVATARS.map((url, i) => (
              <UserAvatar key={i} url={url} index={i} />
            ))}
          </div>
          <span className="ml-3 text-xs sm:text-sm font-medium text-gray-500">
            {t('hero.users')}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <StarRating />
          <span className="text-xs sm:text-sm font-medium text-gray-500">
            {t('hero.rating')}
          </span>
        </div>
      </div>
    </motion.div>
  );
};