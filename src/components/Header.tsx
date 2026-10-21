import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO, CONTACT_LINKS } from '../lib/constants';
import Button from './Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-medium'
          : 'bg-navy'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt={COMPANY_INFO.name}
              className="w-12 h-12 object-contain rounded-xl shadow-soft group-hover:shadow-gold transition-all duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-base lg:text-lg font-bold leading-tight text-white group-hover:text-gold transition-colors">
                {COMPANY_INFO.name}
              </h1>
              <p className="text-xs text-gold font-medium tracking-wide">
                {COMPANY_INFO.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  isActive(item.path)
                    ? 'text-gold'
                    : 'text-white/90 hover:text-gold'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            ))}
            <a href={CONTACT_LINKS.phone}>
              <Button variant="gold" size="sm" icon={<Phone className="w-4 h-4" />}>
                Request a Consultation
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    isActive(item.path) ? 'text-gold' : 'text-white/90 hover:text-gold'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a href={CONTACT_LINKS.phone} onClick={() => setIsOpen(false)}>
                <Button variant="gold" size="md" icon={<Phone className="w-4 h-4" />} className="w-full">
                  Request a Consultation
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
