// src/components/Contact.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Placeholder — replace with real API call later (e.g., to AWS SES/Lambda)
    setTimeout(() => {
      // Simulate success
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1500);

    /*
    // Real example (uncomment when ready)
    try {
      const res = await fetch('https://YOUR-API-GATEWAY.execute-api.us-east-1.amazonaws.com/prod/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    */
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-cloud to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-oat-dark mb-6"
          >
            Ready to Optimize for AI?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Get in touch for a free GEO audit or to discuss how we can help your content thrive in generative search.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-sky focus:ring-2 focus:ring-sky/30 outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-sky focus:ring-2 focus:ring-sky/30 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company / Website (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-sky focus:ring-2 focus:ring-sky/30 outline-none transition"
                  placeholder="Company name or website URL"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-sky focus:ring-2 focus:ring-sky/30 outline-none transition resize-none"
                  placeholder="Tell us about your goals, current challenges, or what you'd like to achieve with GEO..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full px-8 py-5 rounded-full text-lg font-bold transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 min-w-[180px] ${
                    status === 'loading'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-oat hover:bg-oat-dark text-cloud'
                }`}
                >
                {status === 'loading' ? (
                    'Sending...'
                ) : (
                    <>
                    Send <Send size={20} className="ml-2" />
                    </>
                )}
                </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-green-600 font-medium mt-4"
                >
                  Thank you! We'll get back to you within 24 hours.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-red-600 font-medium mt-4"
                >
                  Something went wrong. Please try again or email us directly.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 h-fit sticky top-24"
          >
            <h3 className="text-2xl font-bold text-oat-dark mb-8">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-sky" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:hello@cloudoat.com" className="text-sky hover:text-sky-dark transition">
                    hello@cloudoat.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-oat/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-oat" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-700">(+1) 555-123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-dark/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-sky-dark" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-700">Chicago, IL, USA</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                We usually reply within 24 hours. For urgent inquiries, email us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}