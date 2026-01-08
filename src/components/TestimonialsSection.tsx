import { motion } from 'framer-motion';
import { Star, Quote, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    name: 'Kavita Salian',
    text: 'Delicious food, quick service, reasonable price, & nice experience. We ordered Veg Lemon coriander soup, kurkure momos, veg crispy, masala papad, manchurian rice & Ramen noodles. All were very tasty. Ramen was the best.',
    rating: 5,
    role: 'Dinner | ₹400–600',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop'
  },
  {
    name: 'Yash Jadhav',
    text: 'Delicious vegetarian food! The Mushroom Croquettes were crispy, flavorful, and a must-try. Other dishes were equally fresh and tasty. Highly recommend this place!',
    rating: 5,
    role: 'Dinner | ₹400–600',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop'
  },
  {
    name: 'Namrata Mahajan',
    text: 'Very good ambience, tasty delicious japanese food, pot rice, staff and owner are warm welcome.',
    rating: 5,
    role: 'Dinner | ₹1,200–1,400',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop'
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-12 sm:py-20 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-leaf/5 -skew-x-12 transform origin-top-right" />
      <div className="absolute bottom-10 left-10 text-9xl opacity-5 select-none">🌿</div>
      
      <div className="container-custom mx-auto relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-16">
          {/* Left Side: Content */}
          <div className="lg:w-1/3 space-y-4 sm:space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-leaf bg-leaf/10 px-4 py-2 rounded-full"
            >
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              Loved by Our <span className="text-leaf">Guests</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Don't just take our word for it. Here's what our wonderful guests have to say about their experience.
            </motion.p>
          </div>

          {/* Right Side: Carousel */}
          <div className="lg:w-2/3 relative h-[300px] sm:h-[400px] w-full flex items-center justify-center mt-0 sm:mt-0 lg:mt-0">
            <div className="relative w-full max-w-lg perspective-1000">
              {testimonials.map((testimonial, index) => {
                const isActive = index === currentIndex;
                const isNext = index === (currentIndex + 1) % testimonials.length;
                const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length;
                
                let positionClass = "opacity-0 scale-90 translate-x-0 pointer-events-none";
                if (isActive) positionClass = "opacity-100 scale-100 z-30 translate-x-0 pointer-events-auto";
                if (isNext) positionClass = "opacity-0 md:opacity-40 scale-90 z-20 translate-x-32 hidden md:block";
                if (isPrev) positionClass = "opacity-0 md:opacity-40 scale-90 z-20 -translate-x-32 hidden md:block";

                return (
                  <motion.div
                    key={testimonial.name}
                    className={`absolute top-1/2 left-0 w-full -translate-y-1/2 transition-all duration-700 ease-in-out ${positionClass}`}
                  >
                    <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden border border-leaf/5">
                      <div className="absolute top-0 right-0 p-4 sm:p-6 text-leaf/10">
                        <Quote className="w-12 h-12 sm:w-20 sm:h-20 rotate-180" />
                      </div>
                      
                      <div className="flex gap-1 mb-4 sm:mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 fill-champagne text-champagne" />
                        ))}
                      </div>

                      <p className="text-base sm:text-lg md:text-xl text-foreground font-medium mb-6 sm:mb-8 leading-relaxed italic line-clamp-4 sm:line-clamp-none">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-3 sm:gap-5">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-leaf/20 to-leaf/5 flex items-center justify-center text-leaf font-bold text-lg sm:text-2xl shadow-inner overflow-hidden border-2 border-white">
                          {testimonial.image ? (
                            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="relative z-10">{testimonial.name.charAt(0)}</span>
                          )}
                        </div>
                        <div>
                          <h4 className="text-base sm:text-xl font-bold text-foreground">{testimonial.name}</h4>
                          <p className="text-leaf font-medium text-xs sm:text-sm uppercase tracking-wider">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;