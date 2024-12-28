import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { NavLink } from './ui/nav-link';
import { Logo } from './Logo';
import { LanguageToggle } from './ui/language-toggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center justify-center flex-1 px-16">
            <div className="flex space-x-2">
              <NavLink 
                href="#home" 
                active={activeLink === 'home'}
                onClick={() => setActiveLink('home')}
              >
                {t('nav.home')}
              </NavLink>
              <NavLink 
                href="#pricing" 
                active={activeLink === 'pricing'}
                onClick={() => setActiveLink('pricing')}
              >
                {t('nav.pricing')}
              </NavLink>
              <NavLink 
                href="#about" 
                active={activeLink === 'about'}
                onClick={() => setActiveLink('about')}
              >
                {t('nav.about')}
              </NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <LanguageToggle variant="navbar" />
            <div className="ml-2 flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="text-gray-700"
                onClick={() => navigate('/login')}
              >
                {t('nav.login')}
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate('/register')}
              >
                {t('nav.start')}
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              href="#home" 
              active={activeLink === 'home'}
              onClick={() => {
                setActiveLink('home');
                setIsOpen(false);
              }}
              className="block w-full"
            >
              {t('nav.home')}
            </NavLink>
            <NavLink 
              href="#pricing" 
              active={activeLink === 'pricing'}
              onClick={() => {
                setActiveLink('pricing');
                setIsOpen(false);
              }}
              className="block w-full"
            >
              {t('nav.pricing')}
            </NavLink>
            <NavLink 
              href="#about" 
              active={activeLink === 'about'}
              onClick={() => {
                setActiveLink('about');
                setIsOpen(false);
              }}
              className="block w-full"
            >
              {t('nav.about')}
            </NavLink>
            <div className="mt-4 space-y-2">
              <div className="flex justify-center space-x-2 mb-4">
                <LanguageToggle variant="navbar" />
              </div>
              <Button 
                variant="outline" 
                className="w-full text-gray-700"
                onClick={() => {
                  navigate('/login');
                  setIsOpen(false);
                }}
              >
                {t('nav.login')}
              </Button>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  navigate('/register');
                  setIsOpen(false);
                }}
              >
                {t('nav.start')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};