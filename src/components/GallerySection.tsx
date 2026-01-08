import { Camera } from 'lucide-react';
import foodVariety from '@/assets/food-variety.jpg';
import restaurantInterior from '@/assets/restaurant-interior.jpg';
import dishPasta from '@/assets/dish-pasta.jpg';
import dishPizza from '@/assets/dish-pizza.jpg';
import dishThali from '@/assets/dish-thali.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const galleryVideos = [
  { src: '/videos/video1.mp4', alt: 'Restaurant Celebration' },
  { src: '/videos/video2.mp4', alt: 'Food Experience' },
  { src: '/videos/video3.mp4', alt: 'Kitchen Art' },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-cream-dark">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-fade-up">
          <div className="inline-flex items-center gap-2 text-champagne">
            <Camera className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Gallery</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            A Feast for the <span className="text-leaf">Eyes</span>
          </h2>
          <p className="text-muted-foreground">
            Take a visual journey through our restaurant, dishes, and the love we put into every plate.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryVideos.map((video, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-card group animate-fade-up aspect-[9/16]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <video
                src={video.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground font-medium text-lg">
                  {video.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
