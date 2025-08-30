import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Pine VPN',
    description:
      'A secure VPN app that protects privacy and offers fast browsing with media compression.',
    image: '/projects/pine-vpn.png',
    tag: ['Kotlin', 'MVVM', 'Firebase'],
    demoUrl:
      'https://play.google.com/store/apps/details?id=com.pine.vpn&hl=en&gl=US',
    githubUrl: '',
  },
  {
    id: 2,
    name: 'FR Access',
    description:
      'Face recognition and ticket scanning system integrated with GarudaID for Indonesia’s National Team matches.',
    image: '/projects/pine-vpn.png',
    tag: ['Kotlin', 'TensorFlow Lite', 'Firebase'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    name: 'Pine VPN',
    description:
      'A secure VPN app that protects privacy and offers fast browsing with media compression.',
    image: '/projects/pine-vpn.png',
    tag: ['Kotlin', 'MVVM', 'Firebase'],
    demoUrl:
      'https://play.google.com/store/apps/details?id=com.pine.vpn&hl=en&gl=US',
    githubUrl: '#',
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently. Click on the
          links to view the live demo or the source code on GitHub.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-left p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center items-center">
                  {project.tag.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/arybayunurwicaksono"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
