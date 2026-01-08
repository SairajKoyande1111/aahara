import { motion } from 'framer-motion';
import { Camera, Instagram, Play } from 'lucide-react';

const galleryVideos = [
  { 
    src: '/attached_assets/The_aroma,_the_sizzle,_the_satisfaction._Experience_the_art_of_1767851076762.mp4', 
    title: 'Culinary Art',
    category: 'Kitchen'
  },
  { 
    src: '/attached_assets/🚨‼️WAIT_TILL_END_‼️🚨#food_#foodie_#foodporn_#foodstagram_#in_1767851076761.mp4', 
    title: 'Food Experience',
    category: 'Vibe'
  },
  { 
    src: '/attached_assets/End_this_31st_with_your_friends_&_family_at_Ahara_Restaurant_✨_1767851076760.mp4', 
    title: 'Celebrations',
    category: 'Events'
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden">
      <div className="container-custom mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#7CB342] bg-[#7CB342]/10 px-4 py-2 rounded-full"
          >
            <Camera className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Visual Journey</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
          >
            A Feast for the <span className="text-[#7CB342]">Eyes</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Experience the vibrant atmosphere and culinary excellence of Aahara through our curated visual gallery.
          </motion.p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-black aspect-[9/16] cursor-pointer"
            >
              <video
                src={video.src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                autoPlay
                muted
                loop
                playsInline
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[#7CB342] text-xs font-bold uppercase tracking-widest mb-2">
                  {video.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {video.title}
                </h3>
                <div className="h-1 w-0 bg-[#7CB342] transition-all duration-500 group-hover:w-12" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-[#7CB342] transition-colors font-medium"
          >
            <Instagram className="w-5 h-5" />
            Follow us for more updates @aahara
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
