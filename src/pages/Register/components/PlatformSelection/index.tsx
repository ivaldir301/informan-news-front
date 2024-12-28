import { Mail, MessageCircle, Instagram, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from '../../../../components/ui/dialog';
import { PlatformButton } from './PlatformButton';
import { EmailRegistration } from '../EmailRegistration';
import { WhatsAppRegistration } from '../WhatsAppRegistration';
import { InstagramRegistration } from '../InstagramRegistration';
import { FacebookRegistration } from '../FacebookRegistration';

interface PlatformSelectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlatformSelection = ({ isOpen, onClose }: PlatformSelectionProps) => {
  const { t } = useTranslation();
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
  };

  const handleClose = () => {
    setSelectedPlatform(null);
    onClose();
  };

  const renderPlatformDialog = () => {
    switch (selectedPlatform) {
      case 'email':
        return (
          <EmailRegistration
            isOpen={true}
            onClose={handleClose}
          />
        );
      case 'whatsapp':
        return (
          <WhatsAppRegistration
            isOpen={true}
            onClose={handleClose}
          />
        );
      case 'instagram':
        return (
          <Dialog
            isOpen={true}
            onClose={handleClose}
            title="Connect with Instagram"
          >
            <div className="p-4">
              <p className="mb-6 text-sm text-gray-600">
                Connect your Instagram account to receive news updates.
              </p>
              <InstagramRegistration onClose={handleClose} />
            </div>
          </Dialog>
        );
      case 'messenger':
        return (
          <Dialog
            isOpen={true}
            onClose={handleClose}
            title="Connect with Facebook"
          >
            <div className="p-4">
              <p className="mb-6 text-sm text-gray-600">
                Connect your Facebook account to receive news updates through Messenger.
              </p>
              <FacebookRegistration onClose={handleClose} />
            </div>
          </Dialog>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Dialog
        isOpen={isOpen && !selectedPlatform}
        onClose={handleClose}
        title={t('register.platformSelection.title')}
      >
        <div className="grid grid-cols-2 gap-4">
          <PlatformButton
            icon={Mail}
            label="Email"
            onClick={() => handlePlatformSelect('email')}
          />
          <PlatformButton
            icon={MessageCircle}
            label="Facebook Messenger"
            onClick={() => handlePlatformSelect('messenger')}
          />
          <PlatformButton
            icon={Instagram}
            label="Instagram"
            onClick={() => handlePlatformSelect('instagram')}
          />
          <PlatformButton
            icon={MessageSquare}
            label="WhatsApp"
            onClick={() => handlePlatformSelect('whatsapp')}
          />
        </div>
      </Dialog>

      {renderPlatformDialog()}
    </>
  );
};