import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar, Users, Coffee } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'Shop No.04, GNP Arcadia,\nopp. to Pendharkar College,\nSudarshan Nagar, Dombivli East,\nMaharashtra 421203',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 98765 43210',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@aahara.com',
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon-Sun: 11:00 AM - 11:00 PM',
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'message' | 'reservation'>('message');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    date: '',
    time: '',
    guests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: activeTab === 'message' ? "Message Sent! 🌿" : "Reservation Requested! 🍽️",
      description: activeTab === 'message' 
        ? "Thank you for reaching out. We'll get back to you soon!"
        : "Your table request has been received. We'll confirm shortly!",
    });
    
    setFormData({ name: '', phone: '', email: '', message: '', date: '', time: '', guests: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-12 bg-white overflow-hidden">
      <div className="container-custom mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#7CB342] bg-[#7CB342]/10 px-4 py-2 rounded-full"
          >
            <Coffee className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Contact & Reservations</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Connect with <span className="text-[#7CB342]">Aahara</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-xl mx-auto"
          >
            Whether it's a casual question or a special dinner reservation, we're here to make your experience exceptional.
          </motion.p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Form Side - First on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full order-1 lg:order-2 flex"
          >
            <div className="bg-white rounded-[3rem] shadow-2xl p-6 sm:p-10 border border-gray-100 w-full flex flex-col">
              {/* Form Tabs */}
              <div className="flex gap-4 mb-8 bg-gray-50 p-1.5 rounded-2xl">
                <button
                  onClick={() => setActiveTab('message')}
                  className={`flex-1 py-2.5 rounded-xl font-bold transition-all ${activeTab === 'message' ? 'bg-white text-[#7CB342] shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Send Message
                </button>
                <button
                  onClick={() => setActiveTab('reservation')}
                  className={`flex-1 py-2.5 rounded-xl font-bold transition-all ${activeTab === 'reservation' ? 'bg-white text-[#7CB342] shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Reserve Table
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#7CB342] focus:ring-[#7CB342]/20 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="h-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#7CB342] focus:ring-[#7CB342]/20 transition-all"
                      />
                    </div>
                  </div>

                  {activeTab === 'reservation' ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <label className="text-sm font-bold text-gray-700 ml-1">Date</label>
                          <div className="relative">
                            <Input
                              name="date"
                              type="date"
                              value={formData.date}
                              onChange={handleChange}
                              required
                              className="h-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#7CB342] focus:ring-[#7CB342]/20 transition-all pl-10"
                            />
                            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-sm font-bold text-gray-700 ml-1">Time</label>
                          <div className="relative">
                            <Input
                              name="time"
                              type="time"
                              value={formData.time}
                              onChange={handleChange}
                              required
                              className="h-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#7CB342] focus:ring-[#7CB342]/20 transition-all pl-10"
                            />
                            <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-sm font-bold text-gray-700 ml-1">Guests</label>
                          <div className="relative">
                            <Input
                              name="guests"
                              type="number"
                              min="1"
                              max="20"
                              value={formData.guests}
                              onChange={handleChange}
                              placeholder="2"
                              required
                              className="h-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#7CB342] focus:ring-[#7CB342]/20 transition-all pl-10"
                            />
                            <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#7CB342] focus:ring-[#7CB342]/20 transition-all"
                      />
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      {activeTab === 'reservation' ? 'Special Requests' : 'Your Message'}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={activeTab === 'reservation' ? "Any dietary requirements or special occasions?" : "How can we help you today?"}
                      rows={3}
                      required
                      className="rounded-[2rem] bg-gray-50 border-transparent focus:bg-white focus:border-[#7CB342] focus:ring-[#7CB342]/20 transition-all p-5 resize-none text-sm"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-[2rem] bg-[#7CB342] text-white text-base font-bold hover:bg-[#689f38] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#7CB342]/20 mt-6"
                >
                  {isSubmitting ? (
                    'Processing...'
                  ) : (
                    <span className="flex items-center gap-2">
                      {activeTab === 'message' ? <Send className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
                      {activeTab === 'message' ? 'Send Message' : 'Confirm Reservation'}
                    </span>
                  )}
                </Button>
              </form>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#7CB342]/5 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#7CB342]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Info Side - Below form on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full order-2 lg:order-1 flex"
          >
            <div className="bg-white rounded-[3rem] shadow-2xl p-6 sm:p-10 border border-gray-100 w-full flex flex-col space-y-8">
              {/* Contact Grid - 4 items in grid */}
              <div className="grid grid-cols-2 gap-6 flex-grow">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="space-y-2">
                    <div className="w-10 h-10 rounded-2xl bg-[#7CB342]/10 flex items-center justify-center text-[#7CB342]">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">
                      {info.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Map Preview - Last on mobile */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl h-[250px] lg:h-[280px] group border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.89209590515!2d73.1026023!3d19.2215206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7958744000001%3A0x6d8594d24f0c608b!2sGNP%20Arcadia!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Aahara Location"
                  className="w-full h-full transition-all duration-700"
                />
                <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-[2.5rem]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
