import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

export const handleMotionClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    // jarak atas (gap) agar tidak ketutup navbar
    const offset = 50;

    if (window.smoother) {
      // dapatkan posisi target di dalam smoother
      const targetY = window.smoother.offset(target, 'top', true) - offset;

      // scroll ke posisi dengan jarak atas
      window.smoother.scrollTo(targetY, true);
    } else {
      // fallback tanpa smoother
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    // tutup menu mobile jika sedang terbuka
    setIsMenuOpen(false);
  };