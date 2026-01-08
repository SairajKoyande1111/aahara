import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import logo from '@/assets/logo.png';
import heroVideo from '@assets/hero_video.mp4';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Subtle Tint Overlay */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 text-6xl opacity-20 animate-float">🌿</div>
      <div className="absolute bottom-32 left-10 text-5xl opacity-20 animate-float animation-delay-200">🍃</div>
      <div className="absolute top-1/3 right-1/4 text-4xl opacity-15 animate-float animation-delay-400">🌱</div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 sm:pt-20">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up animation-delay-100">
            <span className="text-primary italic">A Celebration of</span>
            <span className="block mt-1 sm:mt-2">Pure Vegetarian Flavours</span>
          </h1>

          {/* Subtitle */}
          <p className="text-primary-foreground/80 text-base sm:text-xl max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Multi-Cuisine • Fresh • Pure Veg
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 animate-fade-up animation-delay-300 w-full max-w-[280px] sm:max-w-none mx-auto">
            <Button variant="hero" size="lg" className="w-full sm:w-auto px-10" asChild>
              <a href="#menu">View Menu</a>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto px-10" asChild>
              <a href="#contact">Reserve Table</a>
            </Button>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 pt-6 sm:pt-8 animate-fade-up animation-delay-400">
            {['100% Pure Veg 🌿', 'Multi Cuisine', 'Fresh & Hygienic'].map((item) => (
              <span
                key={item}
                className="text-white font-bold text-xs sm:text-lg flex items-center gap-2 drop-shadow-md bg-black/20 px-3 py-1 sm:px-4 sm:py-1 rounded-full backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#7CB342] rounded-full" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
