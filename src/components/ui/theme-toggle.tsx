import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-9 px-0"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-gray-600" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600" />
      )}
    </Button>
  );
};