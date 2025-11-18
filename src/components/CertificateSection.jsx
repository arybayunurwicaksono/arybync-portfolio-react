import { ArrowRight, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 1,
    name: 'Pursue a career as a software developer',
    issuer: 'Dicoding',
    description:
      'This certificate verifies the completion of a career development course focused on guiding learners to build a professional path as a software developer.',
    image: '/certificates/dicoding-meniti-karir-sebagai-software-developer.jpg',
    date: 'July 2022',
    pdfUrl:
      'https://drive.google.com/file/d/1FpUyhAO2Odx-KiY1eNkIteREvknB9Kte/view?usp=sharing',
  },
  {
    id: 2,
    name: 'Internship Completion',
    issuer: 'Kecilin ID',
    description:
      'Completed intership program from Kecilin ID, by contributing into real developer environtment',
    image: '/certificates/kecilin-id-intership.jpg',
    date: 'October 2023',
    pdfUrl:
      'https://drive.google.com/file/d/19D69AQC23voGZrBKr4qg51ydZmL34CVc/view?usp=sharing',
  },
  {
    id: 3,
    name: 'Android Intermediate',
    issuer: 'Dicoding',
    description:
      'This certificate verifies the completion of an intermediate-level Android development course covering Paging implementation, FCM, and the creation of a Story App project.',
    image: '/certificates/dicoding-android-intermediate.jpg',
    date: 'May 2022',
    pdfUrl:
      'https://drive.google.com/file/d/1YCA3DC_KxkkN6l34HWO-RGkvYI2NfDBW/view?usp=sharing',
  },
  {
    id: 4,
    name: 'Android Fundamental',
    issuer: 'Dicoding',
    description:
      'This certificate verifies the completion of a android fundamental course covering the basics of android development, including activities, intents, layouts, and user input handling.',
    image: '/certificates/dicoding-android-fundamental.jpg',
    date: 'March 2022',
    pdfUrl:
      'https://drive.google.com/file/d/1gV_wDy42hHft0cqmvuxcIlCAw8xrjdNu/view?usp=sharing',
  },

  {
    id: 6,
    name: 'Internship Completion',
    issuer: 'Bangkit Academy',
    description:
      'This certificate verifies the completion of a Bangkit Academy program specializing in Mobile Development using Kotlin.',
    image: '/certificates/bangkit-completion.jpg',
    date: 'July 2022',
    pdfUrl:
      'https://drive.google.com/file/d/1m5psJDj15_F5j2x8pa2EAfEepSctgLky/view?usp=sharing',
  },
  {
    id: 6,
    name: 'SOLID Principles',
    issuer: 'Dicoding',
    description:
      'This certificate verifies the completion of a SOLID principles course covering the five key principles of object-oriented design: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.',
    image: '/certificates/dicoding-solid-principle.jpg',
    date: 'February 2022',
    pdfUrl:
      'https://drive.google.com/file/d/1L6iFH4YZ0AMjE48-G61gMbxtUxiLSEgR/view?usp=drive_link',
  },
];

export const CertificateSection = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of the certifications I’ve earned through courses,
          workshops, and professional programs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* 🔥 Image + Hover Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay muncul saat hover */}
                {certificate.pdfUrl && (
                  <a
                    href={certificate.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="text-white flex items-center gap-2 text-sm font-medium">
                      <ExternalLink size={18} />
                      View Certificate
                    </div>
                  </a>
                )}
              </div>

              {/* Card Content */}
              <div className="text-left p-6">
                <h3 className="text-xl font-semibold mb-1">
                  {certificate.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Issued by{' '}
                  <span className="font-medium">{certificate.issuer}</span>
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {certificate.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {certificate.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://www.linkedin.com/in/arybayunurwicaksono"
          >
            See More on LinkedIn <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
