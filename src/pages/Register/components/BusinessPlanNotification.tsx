import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { Mail } from 'lucide-react';

interface BusinessPlanNotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BusinessPlanNotification = ({ isOpen, onClose }: BusinessPlanNotificationProps) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <Mail className="mx-auto h-12 w-12 text-blue-600" />
        <h3 className="mt-4 text-lg font-medium text-gray-900">
          Coming Soon!
        </h3>
        {!isSubscribed ? (
          <>
            <p className="mt-2 text-sm text-gray-500">
              We are working on this feature right now. Subscribe to our email list to be updated when it's out.
            </p>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <>
            <p className="mt-2 text-sm text-gray-500">
              Thanks for subscribing! We'll notify you when business plans become available.
            </p>
            <div className="mt-4">
              <Button
                onClick={onClose}
                className="w-full"
              >
                Got it
              </Button>
            </div>
          </>
        )}
      </div>
    </Dialog>
  );
};