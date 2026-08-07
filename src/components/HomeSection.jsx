import { useState } from 'react';
import { ArrowDown, Download, Frown } from 'lucide-react';
import { handleMotionClick } from '../lib/utils';
import { DefaultModalMessage } from './DefaultModalMessage';

export const HomeSection = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I am</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {' '}
              Ary
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Bayu
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Passionate Mobile developer with experience in creating
            stunning and responsive mobile applications. I love turning ideas
            into reality using code.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              onClick={(e) => handleMotionClick(e, '#projects')}
              className="w-44 sm:w-48 py-3 rounded-full bg-primary text-primary-foreground font-medium text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              View My Work
            </a>

            <button
              onClick={() => setIsCvModalOpen(true)}
              className="w-44 sm:w-48 py-3 rounded-full border border-primary/40 bg-secondary/30 text-foreground font-medium text-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={18} />
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* Modal Pesan Download CV */}
      <DefaultModalMessage
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        title="Sorry :("
        description="i haven't update my CV yet, please contact me if you need it"
        buttonText="OK"
        icon={<Frown size={28} />}
      />
    </section>
  );
};
