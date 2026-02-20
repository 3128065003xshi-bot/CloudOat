// src/components/Footer.tsx
import { Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-oat-dark text-cloud py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-sky">Cloud</span>
              <span className="text-3xl font-bold text-oat">Oat</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering Generative Engine Optimization — helping brands thrive in AI-powered search and generative answers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-sky transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky transition">
                <Linkedin size={24} />
              </a>
              <a href="mailto:3128065003xshi@gmail.com" className="text-gray-300 hover:text-sky transition">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#what-is-geo" className="hover:text-sky transition">What is GEO?</a></li>
              <li><a href="#services" className="hover:text-sky transition">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-sky transition">How It Works</a></li>
              <li><a href="#benefits" className="hover:text-sky transition">Benefits</a></li>
              <li><a href="#testimonials" className="hover:text-sky transition">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:3128065003xshi@gmail.com">3128065003xshi@gmail.com</a>
              </li>
              <li>Chicago, IL, USA</li>
            </ul>

            <div className="mt-8">
              <h4 className="font-medium mb-2">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-sky transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-sky transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup Tease */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get GEO insights, AI search trends, and exclusive tips delivered monthly.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
              />
              <button
                type="submit"
                className="bg-sky text-cloud px-6 py-4 rounded-xl font-semibold hover:bg-sky-dark transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Cloud Oat. All rights reserved. 
        </div>
      </div>
    </footer>
  );
}