import { motion } from 'framer-motion';
import { Leaf, Heart, Utensils, Sparkles, Users, ShieldCheck } from 'lucide-react';

const highlights = [
  { icon: "/assets/veg-icon.png", text: '100% Pure Veg', color: 'bg-green-50' },
  { icon: "/assets/cuisine-icon.png", text: 'Multi Cuisine', color: 'bg-orange-50' },
  { icon: "/assets/family-icon.png", text: 'Family Friendly', color: 'bg-green-50' },
  { icon: "/assets/hygiene-icon.png", text: 'Hygienic & Fresh', color: 'bg-orange-50' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-soft overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src="/attached_assets/2025-04-28_1767853804006.jpg"
                alt="Aahara Restaurant Interior"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-background rounded-2xl shadow-card p-6 max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-champagne/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-champagne" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-leaf">2024</p>
                  <p className="text-xs text-muted-foreground">Established</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-leaf/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-champagne">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Nourishing Bodies,{' '}
                <span className="text-leaf">Delighting Souls</span>
              </h2>
            </div>

            {/* Story */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="font-display text-2xl text-foreground italic">"Aahara"</span> — 
                meaning nourishment in Sanskrit — embodies our philosophy of serving food that 
                feeds both body and soul.
              </p>
              <p>
                Born from a passion for authentic vegetarian cuisine, we bring together flavors 
                from around the world under one roof. From aromatic Indian curries to delicate 
                Italian pastas, from crispy Chinese stir-fries to hearty Mexican nachos — 
                every dish is crafted with love, using the freshest ingredients.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 group border border-leaf/5"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${item.color} shadow-sm overflow-hidden`}>
                    <img src={item.icon} alt={item.text} className="w-8 h-8 object-contain" />
                  </div>
                  <span className="font-semibold text-foreground text-sm tracking-tight">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
