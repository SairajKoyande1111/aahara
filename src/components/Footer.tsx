import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, ChevronRight, Leaf, ExternalLink } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Menu', href: '#menu' },
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
    <footer className="bg-[#7CB342] text-white pt-16 pb-8 overflow-hidden relative">
      <div className="container-custom mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Identity */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-none p-0">
                <img 
                  src={logo} 
                  alt="Aahara Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight">Aahara</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-semibold">
                  Pure Veg Multi Cuisine
                </p>
              </div>
            </motion.div>
            
            <p className="text-white/90 leading-relaxed text-sm">
              Experience the authentic flavors of multi-cuisine vegetarian excellence. We bring together tradition and taste in every dish we serve.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#7CB342]"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display border-b border-white/30 pb-2 inline-block">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/90 group">
                <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                <span>Shop No.04, GNP Arcadia, opp. to Pendharkar College, Dombivli East, 421203</span>
              </li>
              <li className="flex gap-3 text-sm text-white/90 group">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:underline transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex gap-3 text-sm text-white/90 group">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a href="mailto:hello@aahara.com" className="hover:underline transition-colors">hello@aahara.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display border-b border-white/30 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white text-sm flex items-center gap-2 group transition-all"
                  >
                    <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display border-b border-white/30 pb-2 inline-block">
              Hours
            </h4>
            <div className="space-y-3 bg-white/10 p-4 rounded-2xl border border-white/20">
              <div className="flex justify-between text-sm">
                <span>Mon - Fri</span>
                <span className="font-bold text-white">11 AM - 11 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Saturday</span>
                <span className="font-bold text-white">10 AM - 12 AM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sunday</span>
                <span className="font-bold text-white">10 AM - 11 PM</span>
              </div>
              <div className="pt-2 mt-2 border-t border-white/20 flex items-center gap-2 text-[10px] text-white uppercase tracking-wider font-bold">
                <Leaf className="w-3 h-3" />
                <span>100% Pure Vegetarian</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/20 flex flex-col items-center gap-6 text-xs text-white/70">
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm">© 2024 Aahara. All rights reserved.</p>
            <p className="flex items-center justify-center gap-2 group text-base">
              Developed by{' '}
              <a 
                href="https://www.airavatatechnologies.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-white hover:underline flex items-center gap-1.5"
              >
                Airavata Technologies
                <ExternalLink className="w-4 h-4" />
              </a>
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
