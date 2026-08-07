import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, MapPin, Calendar, Camera, Tag } from 'lucide-react';

export const GalleryModal = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const targetRoot = document.getElementById('portal-root') || document.body;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Container Modal */}
      <div
        className="relative w-full max-w-5xl bg-background/95 border border-white/10 rounded-3xl overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh] text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 backdrop-blur-md transition-all duration-200 shadow-md"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Sisi Kiri / Atas: Foto Full */}
        <div className="w-full md:w-3/5 relative bg-black/90 flex items-center justify-center shrink-0 min-h-[220px] max-h-[42vh] md:max-h-[85vh] md:min-h-[500px] p-2 md:p-0">
          <img
            src={item.image}
            alt={item.title}
            className="max-w-full max-h-[40vh] md:max-h-[85vh] w-auto h-auto object-contain md:object-cover md:w-full md:h-full transition-all duration-300"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/80 text-primary-foreground backdrop-blur-md shadow-sm">
              {item.category}
            </span>
          </div>
        </div>

        {/* Sisi Kanan / Bawah: Detail & Metadata */}
        <div className="w-full md:w-2/5 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto shrink-0 md:shrink border-t md:border-t-0 md:border-l border-white/10">
          <div className="space-y-5 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>

            <hr className="border-white/10" />

            {/* Metadata List */}
            <div className="space-y-3 text-xs sm:text-sm text-foreground/80">
              {item.location && (
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-primary shrink-0" />
                  <span>{item.location}</span>
                </div>
              )}
              {item.date && (
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-primary shrink-0" />
                  <span>{item.date}</span>
                </div>
              )}
              {(item.camera || item.lens) && (
                <div className="flex items-start gap-3">
                  <Camera size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    {item.camera && <div>{item.camera}</div>}
                    {item.lens && (
                      <div className="text-xs text-foreground/60">
                        {item.lens}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="pt-2">
                <div className="flex items-center gap-1.5 text-xs text-foreground/50 mb-2">
                  <Tag size={14} />
                  <span>Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-foreground/90 border border-white/10 hover:bg-white/15 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    targetRoot
  );
};
