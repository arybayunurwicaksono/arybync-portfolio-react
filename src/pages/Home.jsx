import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { HomeSection } from '../components/HomeSection';
import { Navbar } from '../components/Navbar';
import { ProjectSection } from '../components/ProjectSection';
import { SkillsSection } from '../components/SkillsSection';
import { StarBackground } from '../components/StarBackground';
import { ThemeToggle } from '../components/ThemeToggle';

export const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // cleanup wheen the component is unmounted
  }, []);

  return (
    <nav className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>

      <Footer />

      <a
        href="#home"
        className={`p-2 fixed bottom-10 right-5 z-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary 
          transition-all duration-500 ease-in-out
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}
        `}
      >
        <ArrowUp size={20} />
      </a>
    </nav>
  );
};
