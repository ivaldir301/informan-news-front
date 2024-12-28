import { motion } from 'framer-motion';
import { MessageCircle, MessagesSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FloatingMessage = ({ children, className }: { children: React.ReactNode; className: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: 1, 
      y: [0, -10, 0],
      rotate: [-2, 2, -2]
    }}
    transition={{ 
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse"
    }}
    className={`absolute ${className}`}
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="relative">
          <FloatingMessage className="left-1/4 -top-12">
            <div className="bg-blue-500 text-white p-4 rounded-lg rounded-bl-none shadow-lg">
              <MessageCircle className="h-6 w-6" />
            </div>
          </FloatingMessage>
          
          <FloatingMessage className="right-1/4 -top-8">
            <div className="bg-green-500 text-white p-4 rounded-lg rounded-br-none shadow-lg">
              <MessagesSquare className="h-6 w-6" />
            </div>
          </FloatingMessage>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{t('hero.title')}</span>
              <span className="block text-blue-600">{t('hero.subtitle')}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {t('hero.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
                  ].map((url, i) => (
                    <img
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src={`${url}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                      alt=""
                    />
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium text-gray-500">
                  {t('hero.users')}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {t('hero.rating')}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8"
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt="App preview"
              className="w-full h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};