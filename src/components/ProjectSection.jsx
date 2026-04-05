import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const projects = [
  {
    id: 1,
    name: 'Pine VPN',
    description:
      'A secure VPN app that protects privacy and offers fast browsing with media compression.',
    image: '/projects/pine-vpn.png',
    tag: ['Kotlin', 'MVVM', 'Firebase'],
    techStack: [
      'Kotlin',
      'MVVM',
      'Firebase',
      'Retrofit',
      'OkHttp',
      'Coroutines',
      'Koin',
      'Room',
      'Jetpack Compose',
      'WorkManager',
      'ExoPlayer',
    ],

    demoUrl:
      'https://play.google.com/store/apps/details?id=com.pine.vpn&hl=en&gl=US',
    githubUrl: '',
  },
  {
    id: 2,
    name: 'FR Access',
    description:
      'Face recognition and ticket scanning system integrated with GarudaID.',
    image: '/projects/fr-access.png',
    tag: ['Kotlin', 'TensorFlow Lite', 'Firebase'],
    techStack: [
      'Kotlin',
      'TensorFlow Lite',
      'ML Kit',
      'CameraX',
      'Retrofit',
      'OkHttp',
      'Koin',
      'Room',
      'Coroutines',
      'Firebase',
    ],
    demoUrl: '',
    githubUrl: '',
  },
  {
    id: 3,
    name: 'Garuda ID Mobile',
    description:
      'Official digital identity for Indonesian National Team supporters.',
    image: '/projects/garuda-id-mobile.png',
    tag: ['Flutter', 'MobX', 'Firebase'],
    techStack: [
      'Flutter',
      'MobX',
      'GetIt',
      'AutoRoute',
      'Dio',
      'ObjectBox',
      'Firebase',
      'RxDart',
      'Freezed',
    ],
    demoUrl: '',
    githubUrl: '',
  },
];

export const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 200); 
  };

  const modalContent = selectedProject && (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto transition-all duration-200
    ${isClosing ? 'bg-black/0' : 'bg-black/60 backdrop-blur-sm'}`}
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-card w-full max-w-4xl rounded-xl overflow-hidden transition-all duration-200
      ${
        isClosing
          ? 'opacity-0 scale-95 translate-y-4'
          : 'opacity-100 scale-100 translate-y-0'
      }
      flex flex-col md:flex-row`}
      >
        <div className="md:w-1/2 w-full h-56 md:h-auto">
          <img
            src={selectedProject.image}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full p-6 relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-lg"
          >
            ✕
          </button>

          <h3 className="text-2xl font-bold mb-2">{selectedProject.name}</h3>

          <p className="text-muted-foreground mb-4">
            {selectedProject.description}
          </p>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {selectedProject.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs border rounded-full bg-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    if (selectedProject) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'relative';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.paddingRight = '';
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              onClick={() => openModal(project)}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white text-sm font-medium">
                    View Detail
                  </span>
                </div>
              </div>

              <div className="text-left p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tag.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs border rounded-full bg-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                  )}
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
      {selectedProject &&
        createPortal(modalContent, document.getElementById('modal-root'))}
    </section>
  );
};
