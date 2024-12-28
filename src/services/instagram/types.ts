export interface InstagramAuthResponse {
  type: 'instagram-auth-success' | 'instagram-auth-error';
  code?: string;
  state?: string;
  error?: string;
  error_description?: string;
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