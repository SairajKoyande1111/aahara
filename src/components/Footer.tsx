import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, ChevronRight, Leaf } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-[#E4405F]' },
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-[#FF0000]' },
];

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7CB342] to-transparent opacity-30" />
      
      <div className="container-custom mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Identity */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-white p-1 shadow-lg shadow-black/20">
                <img 
                  src={logo} 
                  alt="Aahara Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold tracking-tight text-[#7CB342]">Aahara</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-semibold">
                  Pure Veg Multi Cuisine
                </p>
              </div>
            </motion.div>
            
            <p className="text-gray-400 leading-relaxed text-sm">
              Experience the authentic flavors of multi-cuisine vegetarian excellence. We bring together tradition and taste in every dish we serve.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-300 ${social.color} hover:shadow-lg`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display border-b border-[#7CB342]/30 pb-2 inline-block">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400 group">
                <MapPin className="w-5 h-5 text-[#7CB342] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Shop No.04, GNP Arcadia, opp. to Pendharkar College, Dombivli East, 421203</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400 group">
                <Phone className="w-5 h-5 text-[#7CB342] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400 group">
                <Mail className="w-5 h-5 text-[#7CB342] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@aahara.com" className="hover:text-white transition-colors">hello@aahara.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display border-b border-[#7CB342]/30 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#7CB342] text-sm flex items-center gap-2 group transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display border-b border-[#7CB342]/30 pb-2 inline-block">
              Hours
            </h4>
            <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Mon - Fri</span>
                <span className="font-medium text-[#7CB342]">11 AM - 11 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Saturday</span>
                <span className="font-medium text-[#7CB342]">10 AM - 12 AM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Sunday</span>
                <span className="font-medium text-[#7CB342]">10 AM - 11 PM</span>
              </div>
              <div className="pt-2 mt-2 border-t border-white/10 flex items-center gap-2 text-[10px] text-[#7CB342] uppercase tracking-tighter font-bold">
                <Leaf className="w-3 h-3" />
                <span>100% Pure Vegetarian</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Aahara. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
