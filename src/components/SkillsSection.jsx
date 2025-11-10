import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Kotlin', level: 85, category: 'mobile' },
  { name: 'Java', level: 75, category: 'mobile' },
  { name: 'Dart/Flutter', level: 85, category: 'multi-platform' },
  { name: 'HTML/CSS', level: 65, category: 'frontend' },
  { name: 'JavaScript', level: 60, category: 'frontend' },
  { name: 'TailwindCSS', level: 50, category: 'frontend' },
  { name: 'React', level: 45, category: 'frontend' },

  { name: 'Android Studio', level: 90, category: 'tools' },
  { name: 'Visual Studio Code', level: 85, category: 'tools' },
  { name: 'Git/Github/Gitlab', level: 80, category: 'tools' },

  { name: 'Indonesian', level: 90, category: 'language' },
  { name: 'English', level: 75, category: 'language' },
];

const categories = [
  'all',
  'mobile',
  'multi-platform',
  'frontend',
  'tools',
  'language',
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  useEffect(() => {
    const triggers = [];

    gsap.utils.toArray('.skill-card').forEach((card, i) => {
      const anim = gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      if (anim.scrollTrigger) {
        triggers.push(anim.scrollTrigger);
      }
    });

    return () => {
      // cleanup only skill triggers
      triggers.forEach((t) => t.kill());
    };
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                'cursor-pointer px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background/70 text-foreground hover:bg-secondary hover:bg-primary/70 hover:text-white'
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="skill-card bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left"
                  data-width={skill.level}
                  style={{ width: skill.level + '%' }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
