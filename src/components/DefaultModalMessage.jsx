import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, AlertCircle } from 'lucide-react';

export const DefaultModalMessage = ({
  isOpen,
  onClose,
  title = 'Information',
  description = '',
  buttonText = 'OK',
  icon,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const targetRoot =
    typeof document !== 'undefined'
      ? document.getElementById('portal-root') || document.body
      : null;

  if (!targetRoot) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-background/95 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-foreground text-center flex flex-col items-center space-y-5 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Close Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-foreground/60 hover:text-foreground hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Icon (Optional / Default AlertCircle) */}
        <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
          {icon || <AlertCircle size={28} />}
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* OK Button */}
        <div className="pt-2 w-full">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>,
    targetRoot
  );
};
