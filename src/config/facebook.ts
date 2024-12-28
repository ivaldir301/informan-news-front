import { ENV } from './env';

export const FACEBOOK_CONFIG = {
  appId: ENV.FACEBOOK_APP_ID,
  version: 'v19.0',
  scope: 'public_profile,email',
  fields: ['id', 'name', 'email', 'picture'].join(','),
  returnScopes: true,
  enableProfileSelector: true
} as const;