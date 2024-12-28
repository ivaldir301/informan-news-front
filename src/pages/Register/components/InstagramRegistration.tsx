import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Button } from '../../../components/ui/button';
import { Instagram } from 'lucide-react';
import { registerUser } from '../../../services/api';
import { InstagramService } from '../../../services/instagram';
import { ENV } from '../../../config/env';

interface InstagramRegistrationProps {
  onClose: () => void;
}

export const InstagramRegistration = ({ onClose }: InstagramRegistrationProps) => {
  const navigate = useNavigate();

  const handleInstagramLogin = async () => {
    try {
      // Check if Instagram is configured
      if (!ENV.INSTAGRAM_CLIENT_ID || !ENV.INSTAGRAM_CLIENT_SECRET) {
        toast.error('Instagram integration is not configured');
        return;
      }

      // Initiate Instagram login flow
      const authResponse = await InstagramService.initiateLogin();
      
      if (!authResponse.code) {
        throw new Error('No authorization code received');
      }

      // Exchange code for access token
      const tokenResponse = await InstagramService.exchangeCodeForToken(authResponse.code);
      
      // Get user profile data
      const profile = await InstagramService.getUserProfile(tokenResponse.access_token);

      // Register user in our system
      const user = await registerUser(`ig_${profile.id}`, {
        name: profile.username,
        instagramId: profile.id,
        instagramUsername: profile.username,
        instagramAccountType: profile.account_type,
        instagramMediaCount: profile.media_count,
        instagramUrl: `https://instagram.com/${profile.username}`
      });

      toast.success(`Welcome ${user.name}! You're now registered with Instagram.`);
      navigate('/dashboard');
    } catch (error) {
      console.error('Instagram registration error:', error);
      toast.error(error instanceof Error ? error.message : 'Instagram registration failed. Please try again.');
    } finally {
      onClose();
    }
  };

  return (
    <Button
      onClick={handleInstagramLogin}
      className="w-full bg-[#E4405F] hover:bg-[#D62E54] text-white"
    >
      <Instagram className="w-5 h-5 mr-2" />
      Continue with Instagram
    </Button>
  );
};