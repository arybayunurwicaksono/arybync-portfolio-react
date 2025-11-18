import { ArrowDown } from 'lucide-react';
import { handleMotionClick } from '../lib/utils';

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4x sm:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'am</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {' '}
              Ary
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Bayu
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2--2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
            I'm a passionate Mobile developer with experience in creating
            stunning and responsive mobile applications. I love turning ideas
            into reality using code.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button"
              onClick={(e) => handleMotionClick(e, '#projects')}
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h5 w-5 text-primary" />
      </div>
    </section>
  );
};
