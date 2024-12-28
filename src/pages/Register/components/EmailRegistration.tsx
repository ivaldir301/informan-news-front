import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';
import { Dialog } from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { registerUser } from '../../../services/api';

interface EmailRegistrationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailRegistration = ({ isOpen, onClose }: EmailRegistrationProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const user = await registerUser(email);
      toast.success(`Welcome ${user.name}! You're now registered.`);
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
      title="Enter your email to continue"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-base font-medium text-gray-700 mb-2"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full px-4 py-3 text-base rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 text-base font-medium"
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </Button>
      </form>
    </Dialog>
  );
};