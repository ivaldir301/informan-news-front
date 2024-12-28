import { InstagramAuth } from './auth';
import { InstagramAPI } from './api';
import type { InstagramAuthResponse, InstagramTokenResponse, InstagramUserProfile } from './types';

export class InstagramService {
  static async initiateLogin(): Promise<InstagramAuthResponse> {
    const state = InstagramAuth.generateState();
    localStorage.setItem('instagramAuthState', state);

    try {
      const authUrl = InstagramAuth.createAuthUrl(state);
      return await InstagramAuth.openAuthWindow(authUrl);
    } catch (error) {
      localStorage.removeItem('instagramAuthState');
      throw error;
    }
  }

  static async exchangeCodeForToken(code: string): Promise<InstagramTokenResponse> {
    return InstagramAPI.exchangeCodeForToken(code);
  }

  static async getUserProfile(accessToken: string): Promise<InstagramUserProfile> {
    return InstagramAPI.getUserProfile(accessToken);
  }
}

export type { InstagramAuthResponse, InstagramTokenResponse, InstagramUserProfile };