import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";
import heroVideo from "@assets/hero_video.mp4";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Beverages | Burgers | Continental | Pizza | Sushi | Chinese | Japanese | North Indian";

  useEffect(() => {
    let currentIdx = 0;
    const timer = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Subtle Tint Overlay */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-16">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up animation-delay-300 drop-shadow-lg opacity-0 [animation-fill-mode:forwards]">
            <span
              className="text-[#7CB342] block mb-1 font-black text-6xl sm:text-8xl lg:text-9xl italic"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              Aahara
            </span>
            <span
              className="block text-white"
              style={{
                WebkitTextStroke: "1px #7CB342",
                textShadow: "0 0 1px #7CB342",
              }}
            >
              Multi Cuisine Est. 2024
            </span>
          </h1>

          {/* Subtitle */}
          <div className="min-h-[3em] sm:min-h-[2em] flex items-center justify-center animate-fade-up animation-delay-500 opacity-0 [animation-fill-mode:forwards]">
            <p className="text-white text-lg sm:text-2xl max-w-4xl mx-auto font-black tracking-wide">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 pt-6 sm:pt-8 animate-fade-up animation-delay-700 w-full max-w-[350px] sm:max-w-none mx-auto opacity-0 [animation-fill-mode:forwards]">
            <Button
              className="bg-[#7CB342] hover:bg-[#689F38] text-white font-bold text-sm sm:text-xl px-4 sm:px-12 py-4 sm:py-8 rounded-full shadow-lg transition-transform hover:scale-105 border-2 border-white flex-1 sm:flex-none"
              size="lg"
              asChild
            >
              <a href="#menu">View Menu</a>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-[#7CB342] hover:border-[#7CB342] font-bold text-sm sm:text-xl px-4 sm:px-12 py-4 sm:py-8 rounded-full shadow-lg transition-all hover:scale-105 flex-1 sm:flex-none"
              size="lg"
              asChild
            >
              <a href="#contact">Reserve Table</a>
            </Button>
          </div>

          {/* Highlights */}
          <div className="flex flex-row flex-nowrap justify-center gap-2 sm:gap-8 pt-8 sm:pt-12 overflow-x-hidden">
            {[
              { text: "100% Pure Veg 🌿", delay: "animation-delay-400" },
              { text: "Multi Cuisine", delay: "animation-delay-500" },
              { text: "Fresh & Hygienic", delay: "animation-delay-600" },
            ].map((item) => (
              <div
                key={item.text}
                className={`animate-fade-up ${item.delay} group flex-1 min-w-0`}
              >
                <span className="text-white font-black text-[10px] sm:text-xl flex items-center justify-center gap-1 sm:gap-3 drop-shadow-lg bg-white/10 px-2 py-2 sm:px-8 sm:py-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-[#7CB342]/20 hover:border-[#7CB342]/50 hover:scale-105 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 sm:w-3 sm:h-3 bg-[#7CB342] rounded-full shadow-[0_0_10px_#7CB342] animate-pulse flex-shrink-0" />
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
