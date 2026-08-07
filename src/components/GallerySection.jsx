import { useState } from 'react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { GalleryModal } from './GalleryModal';
import { MapPin, Calendar, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // 8 foto awal yang diminta untuk tampilan desktop sebelum di-expand
  const initialDesktopIds = [
    'gallery-01',
    'gallery-02',
    'gallery-03',
    'gallery-04',
    'gallery-05',
    'gallery-06',
    'gallery-08',
    'gallery-09',
  ];

  // 3 foto awal di mobile
  const mobileInitialIds = ['gallery-02', 'gallery-10', 'gallery-26'];

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Visual <span className="text-primary">Gallery</span>
        </h2>
        <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto text-sm sm:text-base">
          A collection of memorable events, gatherings, life moments, and visual experiences.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              className={cn(
                'px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 cursor-pointer',
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-105'
                  : 'bg-secondary/60 text-foreground/70 hover:bg-secondary hover:text-foreground'
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[280px] grid-flow-dense">
        {filteredItems.map((item) => {
          const isDimmed = hoveredId !== null && hoveredId !== item.id;
          const isLargeCard = item.isFeatured || item.spanClass?.includes('row-span-2');

          // Cek visibilitas kondisional saat category = 'All' & showAll = false
          const isDesktopHidden =
            selectedCategory === 'All' &&
            !showAll &&
            !initialDesktopIds.includes(item.id);

          const isMobileHidden =
            selectedCategory === 'All' &&
            !showAll &&
            !mobileInitialIds.includes(item.id);

          const visibilityClass =
            selectedCategory !== 'All' || showAll
              ? 'block'
              : isDesktopHidden && isMobileHidden
              ? 'hidden'
              : isDesktopHidden
              ? 'block md:hidden'
              : isMobileHidden
              ? 'hidden md:block'
              : 'block';

          return (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={cn(
                'group relative rounded-3xl overflow-hidden cursor-pointer bg-black/40',
                'shadow-lg hover:shadow-2xl hover:shadow-primary/15',
                'transition-all duration-500 ease-out transform-gpu min-h-[280px] h-full',
                selectedCategory === 'All' ? item.spanClass : 'col-span-1 row-span-1',
                isDimmed ? 'opacity-60 scale-[0.98]' : 'opacity-100 scale-100',
                visibilityClass
              )}
            >
              {/* Image Background */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Badge Kategori Kiri Atas */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-black/40 text-white/90 backdrop-blur-md border border-white/10 opacity-75 group-hover:opacity-100 group-hover:bg-primary/80 transition-all duration-300">
                  {item.category}
                </span>
              </div>

              {/* Gradient Dark Overlay & Backdrop Blur */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 backdrop-blur-[2px] group-hover:backdrop-blur-sm transition-all duration-300 flex flex-col justify-end p-5 sm:p-7">
                
                {/* Content Container dengan Stagger Animation */}
                <div className="space-y-2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  {/* Judul Foto */}
                  <h3
                    className={cn(
                      'font-semibold text-white tracking-tight leading-snug',
                      isLargeCard ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
                    )}
                  >
                    {item.title}
                  </h3>

                  {/* Deskripsi Singkat */}
                  <p className="text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Metadata Icons */}
                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-white/75">
                    {item.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-primary-foreground/90 shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    )}
                    {item.date && (
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-primary-foreground/90 shrink-0" />
                        <span>{item.date}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Link Bottom Right */}
                  <div className="pt-2 flex items-center justify-end">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/90 group-hover:text-primary-foreground transition-colors">
                      View
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Button (See More / Show Less) - Berlaku Desktop & Mobile */}
      {selectedCategory === 'All' && (
        <div className="mt-12 flex justify-center items-center relative z-20">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2.5 cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-primary/50"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp size={18} />
              </>
            ) : (
              <>
                See More Photos ({galleryItems.length - 8} More){' '}
                <ChevronDown size={18} />
              </>
            )}
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedItem && (
        <GalleryModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
};
