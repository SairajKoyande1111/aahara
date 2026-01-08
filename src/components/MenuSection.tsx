import { motion } from 'framer-motion';
import { ChefHat, Utensils } from 'lucide-react';
import { useState } from 'react';
import sekhKebabImg from '@assets/sekh_kebab.jpg';
import paneerTikkaImg from '@assets/paneer_tikka.jpg';
import pastaImg from '@assets/white_sauce_pasta.jpg';
import kajuMasalaImg from '@assets/kaju_masala.jpg';
import roseMilkImg from '@assets/rose_milkshake.jpg';

const menuCategories = [
  { 
    name: 'Sekh Kebab', 
    image: sekhKebabImg,
    price: '₹349',
    description: 'Juicy, flame-grilled vegetarian kebabs with aromatic spices.',
    tag: 'Starter'
  },
  { 
    name: 'Paneer Tikka', 
    image: paneerTikkaImg,
    price: '₹299',
    description: 'Soft paneer cubes marinated in yogurt and traditional spices.',
    tag: 'Classic'
  },
  { 
    name: 'White Sauce Pasta', 
    image: pastaImg,
    price: '₹269',
    description: 'Creamy, cheesy pasta tossed with fresh garden vegetables.',
    tag: 'Italian'
  },
  { 
    name: 'Kaju Masala', 
    image: kajuMasalaImg,
    price: '₹399',
    description: 'Rich, creamy curry made with premium roasted cashews.',
    tag: 'Premium'
  },
  { 
    name: 'Rose Milkshake', 
    image: roseMilkImg,
    price: '₹189',
    description: 'Refreshing rose-infused milkshake with a touch of sweetness.',
    tag: 'Signature'
  },
  { 
    name: 'Vegetable Sushi', 
    image: '/attached_assets/stock_images/premium_vegetarian_s_f582cd3b.jpg',
    price: '₹399',
    description: 'Fresh, hand-rolled vegetarian sushi with premium ingredients.',
    tag: 'Gourmet',
    mobileOnly: true
  },
];

const MenuSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="menu" className="py-20 bg-white overflow-hidden">
      <div className="container-custom mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-[#7CB342] bg-[#7CB342]/10 px-4 py-2 rounded-full">
            <ChefHat className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Our Specialities</span>
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Flavours of <span className="text-[#7CB342]">Aahara</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Indulge in our handpicked selection of global vegetarian delicacies, crafted with premium ingredients and authentic spices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer ${category.mobileOnly ? 'md:hidden' : ''}`}
            >
              <motion.div 
                className="relative w-full h-full"
                animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-80'}`} />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[#7CB342] text-xs font-bold uppercase tracking-widest mb-2"
                  >
                    {category.tag}
                  </motion.span>
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-[#7CB342] transition-colors">
                    {category.name}
                  </h3>
                  
                  <motion.div
                    initial={false}
                    animate={hoveredIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                  </motion.div>
                  
                  <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/20">
                    <span className="text-xl font-bold text-white">{category.price}</span>
                    <motion.div
                      animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                      className="bg-white/20 p-2 rounded-full backdrop-blur-sm"
                    >
                      <Utensils className="w-4 h-4 text-[#7CB342]" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-4 bg-[#7CB342] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#689f38] transition-all hover:scale-105 shadow-lg shadow-[#7CB342]/30 group"
          >
            Explore Full Menu
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
          <p className="text-gray-500 mt-6 text-sm italic">
            100% Pure Vegetarian Kitchen • Global Culinary Excellence
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
