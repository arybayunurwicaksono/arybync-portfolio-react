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
import { CertificateSection } from '../components/CertificateSection';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      effects: true,
    });

    window.smoother = smoother;

    // ANIMASI SECTION — tetap seperti kode kamu
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
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // ⬇️ FAB AUTO HIDE / SHOW (REAL-TIME)
    const unsubscribe = gsap.ticker.add(() => {
      const y = smoother ? smoother.scrollTop() : window.scrollY;
      setShowScrollTop(y > 200);
    });

    return () => {
      gsap.ticker.remove(unsubscribe);
      smoother.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      delete window.smoother;
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
            <StarBackground />

            <main>
              <div className="section home-section" id="home">
                <HomeSection />
              </div>

              <div className="section about-section" id="about">
                <AboutSection />
              </div>

              <div className="section skills-section" id="skills">
                <SkillsSection />
              </div>

              <div className="section certificate-section" id="certificate">
                <CertificateSection />
              </div>

              <div className="section project-section" id="projects">
                <ProjectSection />
              </div>

              <div className="section contact-section" id="contact">
                <ContactSection />
              </div>
            </main>

            <Footer />
          </nav>
        </div>
      </div>

      {/* 🌙 THEME TOGGLE FAB */}
      <ThemeToggle showScrollTop={showScrollTop} />

      {/* ⬆️ SCROLL TO TOP FAB */}
      <button
        onClick={() => {
          if (window.smoother) {
            window.smoother.scrollTo(0, true);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }

          // sembunyikan FAB setelah user klik scroll-to-top
          setTimeout(() => setShowScrollTop(false), 500);
        }}
        className={cn(
          'p-3 fixed bottom-10 right-6 z-50 rounded-full shadow-lg',
          'bg-primary text-primary-foreground hover:bg-primary/90',
          'transition-all duration-300',
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5 pointer-events-none'
        )}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};
