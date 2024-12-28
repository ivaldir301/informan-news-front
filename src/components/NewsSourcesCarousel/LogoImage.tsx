import { Newspaper } from 'lucide-react';
import { NewsSource } from './types';

interface LogoImageProps {
  source: NewsSource;
}

export const LogoImage = ({ source }: LogoImageProps) => {
  return (
    <img
      src={source.logo}
      alt={source.name}
      className="max-w-[120px] max-h-[60px] object-contain"
      loading="lazy"
      draggable={false}
      onError={(e) => {
        e.currentTarget.onerror = null;
        const fallback = document.createElement('div');
        fallback.className = 'flex flex-col items-center justify-center';
        fallback.innerHTML = `
          <div class="text-blue-600">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
              <path d="M18 14v4"/>
              <path d="M18 10h.01"/>
            </svg>
          </div>
          <span class="mt-2 text-sm font-medium text-gray-900">${source.name}</span>
        `;
        e.currentTarget.parentElement?.replaceChild(fallback, e.currentTarget);
      }}
    />
  );
};