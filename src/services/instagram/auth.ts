import { INSTAGRAM_CONFIG } from '../../config/instagram';
import { InstagramAuthResponse } from './types';

export class InstagramAuth {
  static generateState(): string {
    return Math.random().toString(36).substring(7);
  }

  static createAuthUrl(state: string): string {
    if (!INSTAGRAM_CONFIG.clientId) {
      throw new Error('Instagram client ID is not configured');
    }

    const params = new URLSearchParams({
      client_id: INSTAGRAM_CONFIG.clientId,
      redirect_uri: INSTAGRAM_CONFIG.redirectUri,
      scope: INSTAGRAM_CONFIG.scope,
      response_type: INSTAGRAM_CONFIG.responseType,
      state
    });

    return `${INSTAGRAM_CONFIG.authUrl}?${params}`;
  }

  static openAuthWindow(url: string): Promise<InstagramAuthResponse> {
    return new Promise((resolve, reject) => {
      const width = 450;
      const height = 730;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;

      const popup = window.open(
        url,
        'instagram-auth',
        `width=${width},height=${height},left=${left},top=${top}`
      );

      if (!popup) {
        reject(new Error('Failed to open Instagram login window. Please allow popups and try again.'));
        return;
      }

      let popupTimer: number;

      const cleanup = () => {
        window.removeEventListener('message', handleMessage);
        clearInterval(popupTimer);
        popup.close();
      };

      const handleMessage = (event: MessageEvent<InstagramAuthResponse>) => {
        if (event.origin !== window.location.origin) return;

        if (event.data.type === 'instagram-auth-success' && event.data.code) {
          cleanup();
          resolve(event.data);
        }

        if (event.data.type === 'instagram-auth-error') {
          cleanup();
          reject(new Error(event.data.error_description || 'Instagram authentication failed'));
        }
      };

      // Check if popup was closed
      popupTimer = window.setInterval(() => {
        if (popup.closed) {
          cleanup();
          reject(new Error('Authentication cancelled'));
        }
      }, 1000);

      window.addEventListener('message', handleMessage);
    });
  }
}