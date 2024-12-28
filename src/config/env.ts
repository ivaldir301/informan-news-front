export const getEnvVar = (key: string): string => {
  const value = import.meta.env[key];
  return value || '';
};

export const ENV = {
  INSTAGRAM_CLIENT_ID: getEnvVar('VITE_INSTAGRAM_CLIENT_ID'),
  INSTAGRAM_CLIENT_SECRET: getEnvVar('VITE_INSTAGRAM_CLIENT_SECRET'),
  FACEBOOK_APP_ID: getEnvVar('VITE_FACEBOOK_APP_ID'),
  MODE: getEnvVar('MODE'),
  DEV: getEnvVar('DEV'),
  PROD: getEnvVar('PROD'),
} as const;