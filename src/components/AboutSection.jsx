import { Briefcase, Code, User } from 'lucide-react';
import { handleMotionClick } from '../lib/utils';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About
          <span className="ml-2 text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <h3 className="text-2xl font-bold">
              Passionate Mobile Developer. who loves to explore new skill and
              tech
            </h3>
            <p className="text-muted-foreground">
              Based in Yogyakarta with hands-on experience in Kotlin and Flutter
              and right now i'm exploring new way, which is React that help me
              build this portfolio.
            </p>
            <p className="text-muted-foreground">
              My journey as a developer started with a strong passion for
              creating mobile applications that are not only functional but
              impactful. With a background in Informatics from Amikom
              University, I’ve built experiences across various projects—face
              recognition SDKs, VPN applications, POS systems, and smart home
              solutions.
            </p>
            <p className="text-muted-foreground">
              I’ve had the privilege to contribute to applications used on
              national stages, such as Indonesia’s National Football Team
              matches. I’m always eager to explore new technologies, grow as a
              developer, and create solutions that improve people’s lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="cosmic-button"
                onClick={(e) => handleMotionClick(e, '#contact')}
              >
                Get in Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* TODO: move it the content into variable instead hardocede */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile Developer</h4>
                  <p className="text-muted-foreground">
                    Building responsive and user-friendly mobile applications
                    using Kotlin, Java and using flutter too, recently, React
                    Native
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Personal</h4>
                  <p className="text-muted-foreground">
                    I'm a dedicated and passionate person who loves to explore
                    new tech and improve my skills. I loves to play guitar and
                    reading tech blogs
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Where i work?</h4>
                  <p className="text-muted-foreground">
                    I am currently working at AssistX Enterprise as a Mobile
                    Developer, where I contribute to develop Pine VPN to Face
                    Recognition that used on National Football Team of Indonesia
                    match
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
