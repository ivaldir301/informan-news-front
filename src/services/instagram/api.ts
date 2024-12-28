import { INSTAGRAM_CONFIG } from '../../config/instagram';
import { INSTAGRAM_API_ENDPOINTS, INSTAGRAM_ERROR_MESSAGES } from './constants';
import { InstagramTokenResponse, InstagramUserProfile } from './types';

export class InstagramAPI {
  static async exchangeCodeForToken(code: string): Promise<InstagramTokenResponse> {
    if (!INSTAGRAM_CONFIG.clientId || !INSTAGRAM_CONFIG.clientSecret) {
      throw new Error(INSTAGRAM_ERROR_MESSAGES.MISSING_CREDENTIALS);
    }

    const response = await fetch(INSTAGRAM_API_ENDPOINTS.TOKEN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        client_id: INSTAGRAM_CONFIG.clientId,
        client_secret: INSTAGRAM_CONFIG.clientSecret,
        grant_type: 'authorization_code',
        redirect_uri: INSTAGRAM_CONFIG.redirectUri,
        code
      })
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error_message || INSTAGRAM_ERROR_MESSAGES.TOKEN_EXCHANGE_FAILED);
    }

    return response.json();
  }

  static async getUserProfile(accessToken: string): Promise<InstagramUserProfile> {
    const response = await fetch(
      `${INSTAGRAM_API_ENDPOINTS.USER_PROFILE}?fields=id,username,account_type,media_count&access_token=${accessToken}`
    );

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error_message || INSTAGRAM_ERROR_MESSAGES.PROFILE_FETCH_FAILED);
    }

    return response.json();
  }
}