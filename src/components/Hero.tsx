// src/components/Hero.tsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cloud via-sky/30 to-oat/10">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(125,211,252,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(197,169,133,0.2)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-oat-dark mb-6"
        >
          Future-Proof Your Content
          <br />
          <span className="bg-gradient-to-r from-sky to-sky-dark bg-clip-text text-transparent">
            for Generative AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10"
        >
          Cloud Oat helps your content rank and shine in ChatGPT, Perplexity, Google AI Overviews, and the next wave of generative search.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="bg-sky text-cloud px-10 py-5 rounded-full text-lg font-semibold hover:bg-sky-dark transition transform hover:scale-105 shadow-lg">
            Get Free GEO Audit
          </button>
          <button className="border-2 border-oat text-oat-dark px-10 py-5 rounded-full text-lg font-semibold hover:bg-oat/10 transition">
            Learn How It Works
          </button>
        </motion.div>
      </div>
    </section>
  );
}