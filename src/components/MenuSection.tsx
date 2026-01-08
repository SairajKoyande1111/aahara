import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Flame } from 'lucide-react';
import { useState } from 'react';

const menuCategories = [
  { 
    name: 'Sushi', 
    image: '/attached_assets/stock_images/premium_vegetarian_s_f582cd3b.jpg',
    rawImage: '/attached_assets/stock_images/premium_vegetarian_s_f582cd3b.jpg',
    price: '₹399',
    description: 'Our signature vegetarian sushi platter.'
  },
  { 
    name: 'Soups', 
    image: '/attached_assets/stock_images/vegetable_soup_bowl__4731a9ea.jpg',
    rawImage: '/attached_assets/stock_images/vegetable_soup_bowl__4731a9ea.jpg',
    price: '₹149',
    description: 'Warm, comforting, and packed with garden-fresh vegetables.'
  },
  { 
    name: 'Main Course', 
    image: '/attached_assets/stock_images/vegetarian_main_cour_d15eb3da.jpg',
    rawImage: '/attached_assets/stock_images/vegetarian_main_cour_d15eb3da.jpg',
    price: '₹399',
    description: 'Hearty vegetarian delights from our chef.'
  },
  { 
    name: 'Pastas', 
    image: '/attached_assets/stock_images/italian_vegetarian_p_ac192e1e.jpg',
    rawImage: '/attached_assets/stock_images/italian_vegetarian_p_ac192e1e.jpg',
    price: '₹269',
    description: 'Authentic Italian flavors with fresh herbs.'
  },
  { 
    name: 'Pizza', 
    image: '/attached_assets/stock_images/vegetarian_pizza_gou_4e5e8984.jpg',
    rawImage: '/attached_assets/stock_images/vegetarian_pizza_gou_4e5e8984.jpg',
    price: '₹259',
    description: 'Thin crust with garden-fresh toppings.'
  },
];

const MenuSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const playSizzle = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {}); // Ignore autoplay blocks
  };

  return (
    <section id="menu" className="section-padding bg-background overflow-hidden">
      <div className="container-custom mx-auto px-1 sm:px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-[#7CB342]">
            <ChefHat className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Live Kitchen Experience</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            From Farm to <span className="text-[#7CB342]">Plate</span>
          </h2>
          <p className="text-muted-foreground">
            Hover over a dish to see it cook! Swipe to flip through our signature creations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-6">
          {menuCategories.map((category, index) => (
            <div
              key={category.name}
              className="perspective-1000 h-[280px] sm:h-[400px]"
              onClick={() => {
                setHoveredIndex(hoveredIndex === index ? null : index);
                if (hoveredIndex !== index) playSizzle();
              }}
              onMouseEnter={() => {
                if (window.innerWidth >= 1024) {
                  setHoveredIndex(index);
                  playSizzle();
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024) {
                  setHoveredIndex(null);
                }
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                animate={hoveredIndex === index ? { rotateY: 180 } : { rotateY: 0 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="group relative h-full w-full cursor-pointer"
              >
                {/* Front Side: Cooking Animation */}
                <div className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl overflow-hidden shadow-card w-full">
                  <motion.div 
                    className="relative w-full h-full"
                    animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    
                    {/* Steam/Smoke Overlay */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.4 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-t from-[#7CB342]/40 to-transparent"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{ 
                                y: [-10, -50], 
                                opacity: [0, 1, 0],
                                scale: [1, 1.2]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Flame className="w-8 h-8 sm:w-12 sm:h-12 text-white/50 blur-sm" />
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-4 sm:p-6 text-center">
                      <h3 className="font-display text-base sm:text-2xl text-white font-bold tracking-wide leading-tight">
                        {category.name}
                      </h3>
                      {/* Elastic Price Tag */}
                      <motion.div
                        className="bg-[#7CB342] text-white px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-sm font-bold mt-1 sm:mt-2"
                        animate={hoveredIndex === index ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {category.price}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Back Side: Chef Toss Flip */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl overflow-hidden bg-[#7CB342] p-4 sm:p-8 flex flex-col justify-center items-center text-center text-white"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <motion.div
                    animate={hoveredIndex === index ? { y: [0, -10, 0] } : {}}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <ChefHat className="w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-4" />
                  </motion.div>
                  <h3 className="font-display text-lg sm:text-2xl font-bold mb-1 sm:mb-2">{category.name}</h3>
                  <p className="text-white/90 text-[10px] sm:text-sm line-clamp-3 sm:line-clamp-none">{category.description}</p>
                  <div className="mt-2 sm:mt-6 font-bold text-sm sm:text-xl tracking-wider">{category.price}</div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Experience our 100% Pure Veg Multi-Cuisine! 🍽️
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-[#7CB342] font-medium hover:text-[#7CB342]/80 transition-colors"
          >
            View Digital Menu
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default MenuSection;