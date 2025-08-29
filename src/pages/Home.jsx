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
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // enable scroll smoother only once
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2, // higher = smoother (but more lag)
      effects: true,
    });

    gsap.utils.toArray('.section').forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', // when section top hits 80% viewport height
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Floating box parallax effect
    gsap.to('.floating-box', {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      smoother.kill(); // cleanup when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navbar />

      <div
        id="smooth-wrapper"
        className="bg-background text-foreground overflow-x-hidden"
      >
        <div id="smooth-content">
          <nav className="min-h-screen">
            <ThemeToggle />
            <StarBackground />

            <main>
              <div className="section home-section">
                <HomeSection />
              </div>

              <div className="section about-section">
                <AboutSection />
              </div>

              <div className="section skills-section">
                <SkillsSection />
              </div>

              <div className="section project-section">
                <ProjectSection />
              </div>

              <div className="section contact-section">
                <ContactSection />
              </div>
            </main>

            <Footer />

            <a
              href="#smooth-wrapper"
              className={`p-2 fixed bottom-10 right-5 z-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary 
              transition-all duration-500 ease-in-out
              ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}
            `}
            >
              <ArrowUp size={20} />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};
