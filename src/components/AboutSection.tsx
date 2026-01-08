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
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Visual Side: Portrait Video & Overlaid Photos */}
          <div className="relative group perspective-1000">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-[3/4] md:w-[80%] mx-auto"
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
              
              <div className="absolute bottom-8 left-8 right-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
                >
                  <p className="text-white font-medium text-lg leading-relaxed">
                    "Every dish at Aahara is a story of tradition, crafted with passion and served with love."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Overlaid Photos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -15, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -10, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-10 -left-6 w-40 h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block z-10"
            >
              <img src={kajuMasalaImg} alt="Kaju Masala" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 15, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 10, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 w-44 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block z-10"
            >
              <img src={roseMilkImg} alt="Rose Milkshake" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute top-1/2 -right-12 w-36 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden lg:block z-10 -translate-y-1/2"
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
              <h2 className="font-display text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Crafting <span className="text-[#7CB342] italic">Memories</span> Over Global Plates
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Aahara is more than just a restaurant; it's a celebration of pure vegetarian culinary excellence. From the streets of Tokyo to the hearths of North India, we bring the world's most beloved flavours to your table.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  className="p-6 rounded-3xl bg-white shadow-soft hover:shadow-hover transition-all duration-300 border border-transparent hover:border-[#7CB342]/20 group"
                >
                  <item.icon className="w-10 h-10 text-[#7CB342] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sliding Visual Strip - Seamless Portrait Images */}
        <div className="mt-32 relative overflow-hidden h-[600px]">
          <motion.div
            animate={{ x: [0, -2250] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex absolute whitespace-nowrap"
          >
            {[...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages].map((img, i) => (
              <div key={i} className="w-[450px] h-[600px] flex-shrink-0">
                <img src={img} alt="Dish" className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
