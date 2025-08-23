import { useState } from 'react';
import { cn } from '../lib/utils';

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

  const filteredSkills = skills.filter((skill) => activeCategory === 'all' || skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background/70 text-foreground hover:bg-secondary'
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
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
