import { INSTAGRAM_CONFIG } from '../config/instagram';

export class InstagramService {
  private static generateState() {
    return Math.random().toString(36).substring(7);
  }

  static initiateLogin() {
    const state = this.generateState();
    localStorage.setItem('instagramAuthState', state);

    const params = new URLSearchParams({
      client_id: INSTAGRAM_CONFIG.clientId,
      redirect_uri: INSTAGRAM_CONFIG.redirectUri,
      scope: INSTAGRAM_CONFIG.scope,
      response_type: INSTAGRAM_CONFIG.responseType,
      state
    });

    const authUrl = `${INSTAGRAM_CONFIG.authUrl}?${params.toString()}`;
    return this.openAuthWindow(authUrl);
  }

  private static openAuthWindow(url: string): Promise<InstagramAuthResponse> {
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

      const handleMessage = (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;

        if (event.data.type === 'instagram-auth-success') {
          const savedState = localStorage.getItem('instagramAuthState');
          if (event.data.state !== savedState) {
            reject(new Error('Invalid state parameter'));
            return;
          }

          localStorage.removeItem('instagramAuthState');
          window.removeEventListener('message', handleMessage);
          popup?.close();
          resolve(event.data);
        }

        if (event.data.type === 'instagram-auth-error') {
          localStorage.removeItem('instagramAuthState');
          window.removeEventListener('message', handleMessage);
          popup?.close();
          reject(new Error(event.data.error));
        }
      };

      window.addEventListener('message', handleMessage);
    });
  }

  static async exchangeCodeForToken(code: string): Promise<InstagramTokenResponse> {
    const response = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        client_id: INSTAGRAM_CONFIG.clientId,
        client_secret: 'YOUR_CLIENT_SECRET', // Replace with your client secret
        grant_type: 'authorization_code',
        redirect_uri: INSTAGRAM_CONFIG.redirectUri,
        code
      })
    });

    if (!response.ok) {
      throw new Error('Failed to exchange code for token');
    }

    return response.json();
  }

  static async getUserProfile(accessToken: string): Promise<InstagramUserProfile> {
    const response = await fetch(
      `https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${accessToken}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    return response.json();
  }
}

export interface InstagramAuthResponse {
  type: 'instagram-auth-success';
  code: string;
  state: string;
}

export interface InstagramTokenResponse {
  access_token: string;
  user_id: string;
}

export interface InstagramUserProfile {
  id: string;
  username: string;
  account_type?: string;
  media_count?: number;
}