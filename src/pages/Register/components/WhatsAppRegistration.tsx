import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';
import { Dialog } from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { registerUser } from '../../../services/api';
import { PhoneInput } from './PhoneInput';

interface WhatsAppRegistrationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppRegistration = ({ isOpen, onClose }: WhatsAppRegistrationProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);
    try {
      const user = await registerUser(phoneNumber);
      toast.success(`Welcome! You're now registered with WhatsApp.`);
      navigate('/dashboard');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
      onClose();
    }
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Enter your WhatsApp number"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-base font-medium text-gray-700 mb-2"
          >
            WhatsApp Number
          </label>
          <PhoneInput
            value={phoneNumber}
            onChange={setPhoneNumber}
            onValidityChange={setIsValid}
          />
          <p className="mt-2 text-sm text-gray-500">
            We'll send you a verification code via WhatsApp
          </p>
        </div>
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="w-full py-3 text-base font-medium"
        >
          {isSubmitting ? 'Registering...' : 'Continue'}
        </Button>
      </form>
    </Dialog>
  );
};