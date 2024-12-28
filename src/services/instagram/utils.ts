import { INSTAGRAM_POPUP_CONFIG } from './constants';

export const generateState = (): string => 
  Math.random().toString(36).substring(7);

export const calculatePopupPosition = () => {
  const { width, height } = INSTAGRAM_POPUP_CONFIG;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  return { left, top };
};

export const createAuthUrl = (baseUrl: string, params: Record<string, string>): string => {
  const searchParams = new URLSearchParams(params);
  return `${baseUrl}?${searchParams}`;
};