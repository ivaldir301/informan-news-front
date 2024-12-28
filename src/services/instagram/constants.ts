export const INSTAGRAM_API_ENDPOINTS = {
  TOKEN: 'https://api.instagram.com/oauth/access_token',
  USER_PROFILE: 'https://graph.instagram.com/me'
} as const;

export const INSTAGRAM_POPUP_CONFIG = {
  width: 450,
  height: 730,
  features: (left: number, top: number) => 
    `width=450,height=730,left=${left},top=${top}`
} as const;

export const INSTAGRAM_ERROR_MESSAGES = {
  POPUP_BLOCKED: 'Failed to open Instagram login window. Please allow popups and try again.',
  AUTH_CANCELLED: 'Authentication cancelled',
  INVALID_STATE: 'Invalid state parameter',
  TOKEN_EXCHANGE_FAILED: 'Failed to exchange code for token',
  PROFILE_FETCH_FAILED: 'Failed to fetch user profile',
  MISSING_CREDENTIALS: 'Instagram credentials are not configured'
} as const;