import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Button } from '../../../components/ui/button';
import { Facebook } from 'lucide-react';
import { registerUser } from '../../../services/api';

interface FacebookRegistrationProps {
  onClose: () => void;
}

export const FacebookRegistration = ({ onClose }: FacebookRegistrationProps) => {
  const navigate = useNavigate();

  const handleFacebookLogin = async () => {
    try {
      // Open Facebook login popup
      const FB = (window as any).FB;
      
      if (!FB) {
        toast.error('Facebook SDK not loaded. Please try again later.');
        return;
      }

      FB.login(async (response: any) => {
        if (response.status === 'connected') {
          FB.api('/me', { fields: 'name,email,link' }, async (userData: any) => {
            try {
              const user = await registerUser(`fb_${userData.id}`, {
                name: userData.name,
                email: userData.email,
                facebookId: userData.id,
                facebookUrl: userData.link || `https://facebook.com/${userData.id}`,
              });

              toast.success(`Welcome ${user.name}! You're now registered with Facebook.`);
              navigate('/dashboard');
            } catch (error) {
              toast.error('Registration failed. Please try again.');
            }
          });
        } else {
          toast.error('Facebook login failed. Please try again.');
        }
      }, { scope: 'public_profile,email' });
    } catch (error) {
      toast.error('Facebook login failed. Please try again.');
    } finally {
      onClose();
    }
  };

  return (
    <Button
      onClick={handleFacebookLogin}
      className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white"
    >
      <Facebook className="w-5 h-5 mr-2" />
      Continue with Facebook
    </Button>
  );
};