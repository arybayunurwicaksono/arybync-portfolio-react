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

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Enable scroll smoother only once
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2, // higher = smoother (but more lag)
      effects: true,
    });

    // Simpan smoother di window agar bisa diakses global (misalnya oleh Navbar)
    window.smoother = smoother;

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
      setShowScrollTop(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      smoother.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
            <ThemeToggle />
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
