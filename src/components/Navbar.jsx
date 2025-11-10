import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificate', href: '#certificate' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ handler baru untuk scroll ke section dengan ScrollSmoother
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    // jarak atas (gap) agar tidak ketutup navbar
    const offset = 50;

    if (window.smoother) {
      // dapatkan posisi target di dalam smoother
      const targetY = window.smoother.offset(target, 'top', true) - offset;

      // scroll ke posisi dengan jarak atas
      window.smoother.scrollTo(targetY, true);
    } else {
      // fallback tanpa smoother
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    // tutup menu mobile jika sedang terbuka
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="tetxt-xl font-bold text-primary flex items-center cursor-pointer"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Arybync </span>{' '}
            Portfolio
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />} {''}
        </button>

        {/* Mobile menu overlay */}
        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
            'transition-all duration-300 md:hidden',
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
