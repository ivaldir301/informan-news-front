import { ENV } from './env';

export const INSTAGRAM_CONFIG = {
  clientId: ENV.INSTAGRAM_CLIENT_ID,
  clientSecret: ENV.INSTAGRAM_CLIENT_SECRET,
  redirectUri: `${window.location.origin}/#/auth/instagram/callback`,
  scope: 'user_profile,user_media',
  responseType: 'code',
  authUrl: 'https://api.instagram.com/oauth/authorize'
} as const;