import { motion } from 'framer-motion';
import { Leaf, Instagram, Facebook, Twitter, Youtube, Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  return (
    <footer className="bg-[#7CB342] text-[#fdfcf0] overflow-hidden">
      <div className="container-custom mx-auto px-6 sm:px-12 lg:px-16 py-8 md:py-12 pb-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-gold border-2 border-white/20">
                <img 
                  src={logo} 
                  alt="Aahara Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">Aahara</h3>
                <p className="text-xs text-[#fdfcf0]/80 uppercase tracking-wider">
                  Pure Veg Multi Cuisine • Est. 2024
                </p>
              </div>
            </div>
            <p className="text-[#fdfcf0]/90 max-w-md leading-relaxed">
              Shop No.04, GNP Arcadia, opp. to Pendharkar College, Sudarshan Nagar, Dombivli East, Maharashtra 421203
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#fdfcf0] hover:text-[#7CB342] transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-[#fdfcf0]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#fdfcf0]/80 hover:text-[#fdfcf0] transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#fdfcf0]/50 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-[#fdfcf0]">
              Opening Hours
            </h4>
            <ul className="space-y-3 text-[#fdfcf0]/80">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-[#fdfcf0]">11 AM - 11 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-[#fdfcf0]">10 AM - 12 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-[#fdfcf0]">10 AM - 11 PM</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
              <p className="text-sm text-[#fdfcf0] font-medium">
                🎉 Special Weekend Brunch
              </p>
              <p className="text-xs text-[#fdfcf0]/80 mt-1">
                Saturdays & Sundays, 10 AM - 1 PM
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-4 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#fdfcf0]/60 text-sm">
              © 2024 Aahara – Pure Veg Multi Cuisine. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;