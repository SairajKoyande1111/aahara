import { motion } from 'framer-motion';
import { Utensils, Award, Clock, Play } from 'lucide-react';
import aboutVideo from '@assets/about_video.mp4';
import kebabImg from '@assets/sekh_kebab.jpg';
import paneerImg from '@assets/paneer_tikka.jpg';
import pastaImg from '@assets/white_sauce_pasta.jpg';
import kajuMasalaImg from '@assets/kaju_masala.jpg';
import roseMilkImg from '@assets/rose_milkshake.jpg';

const AboutSection = () => {
  const carouselImages = [kebabImg, paneerImg, pastaImg, kajuMasalaImg, roseMilkImg];

  return (
    <section id="about" className="py-12 lg:py-20 bg-cream relative overflow-hidden">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Side: Portrait Video & Overlaid Photos */}
          <div className="relative group perspective-1000 w-full flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-black aspect-[2/3] w-full max-w-[480px]"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={aboutVideo} type="video/mp4" />
              </video>
              
              <div className="absolute bottom-6 left-6 right-6 z-30">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20"
                >
                  <p className="text-black font-medium text-lg leading-relaxed">
                    "Every dish at Aahara is a story of tradition, crafted with passion and served with love."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Top Left Overlays (2 images) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -15, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -10, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -top-6 -left-4 md:-left-10 w-24 h-32 md:w-32 md:h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-50"
            >
              <img src={kajuMasalaImg} alt="Kaju Masala" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -25, x: -40 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -20, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute top-24 -left-8 md:-left-16 w-20 h-28 md:w-28 md:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-40"
            >
              <img src={pastaImg} alt="Pasta" className="w-full h-full object-cover" />
            </motion.div>

            {/* Bottom Right Overlays (2 images) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 15, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 10, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-10 right-4 md:right-6 w-28 h-36 md:w-36 md:h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-50"
            >
              <img src={roseMilkImg} alt="Rose Milkshake" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 25, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 20, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute bottom-20 -right-4 md:right-0 w-24 h-32 md:w-32 md:h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-40"
            >
              <img src={paneerImg} alt="Paneer Tikka" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] w-full text-center lg:text-left">
                Crafting <span className="text-[#7CB342]">Memories</span><br className="hidden lg:block" /> Over Global Plates
              </h2>
              <p className="text-lg text-black leading-relaxed max-w-[550px] mx-auto lg:mx-0 text-center lg:text-left">
                Aahara is more than just a restaurant; it's a celebration of pure vegetarian culinary excellence. From the streets of Tokyo to the hearths of North India, we bring the world's most beloved flavours to your table.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: Utensils, title: "100% Pure Veg", desc: "No meat, no compromise. Just pure goodness." },
                { icon: Award, title: "Premium Taste", desc: "Hand-picked ingredients for royal flavours." },
                { icon: Clock, title: "Est. 2024", desc: "Building a legacy of vegetarian indulgence." },
                { icon: Play, title: "Global Menu", desc: "From Sushi to Pasta, we serve it all." }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-4 md:p-6 rounded-2xl bg-white shadow-soft hover:shadow-hover transition-all duration-300 border border-transparent hover:border-[#7CB342]/20 group"
                >
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#7CB342] mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-base md:text-xl mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-black text-xs md:text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Visual Strip - Seamless Full-Width Portrait Images */}
      <div className="mt-20 relative overflow-hidden h-[500px] w-full">
        <motion.div
          animate={{ x: [0, -2250] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex absolute whitespace-nowrap"
        >
          {[...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages].map((img, i) => (
            <div key={i} className="w-[375px] h-[500px] flex-shrink-0">
              <img src={img} alt="Dish" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
