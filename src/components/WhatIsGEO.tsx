// src/components/WhatIsGEO.tsx
import { motion } from 'framer-motion';
import { Brain, Search, Zap, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-First Optimization",
    description: "Tailored for generative engines like ChatGPT, Perplexity, and Google AI Overviews — not just traditional search.",
    color: "sky",
  },
  {
    icon: Search,
    title: "Entity & Context Focus",
    description: "We optimize content structure, entities, and semantics so AI understands and cites your brand accurately.",
    color: "oat",
  },
  {
    icon: Zap,
    title: "Real-Time Adaptation",
    description: "Stay ahead of rapid changes in AI search algorithms with continuous monitoring and updates.",
    color: "sky-dark",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description: "Track visibility, citations, and traffic from generative sources — transparent reporting you can trust.",
    color: "oat-dark",
  },
];

export default function WhatIsGEO() {
  return (
    <section id="what-is-geo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-oat-dark mb-6"
          >
            What is <span className="text-sky">GEO</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Generative Engine Optimization (GEO) is the next evolution of SEO. Instead of optimizing only for traditional search engines, GEO ensures your content is discovered, understood, and cited by <strong>AI-powered generative engines</strong> like ChatGPT, Perplexity, Claude, and Google AI Overviews.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cloud/50 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-6 group-hover:bg-${feature.color}/20 transition-colors`}>
                <feature.icon className={`w-8 h-8 text-${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-oat-dark mb-4">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-sky text-cloud px-10 py-5 rounded-full text-lg font-semibold hover:bg-sky-dark transition transform hover:scale-105 shadow-lg"
          >
            Ready to Optimize for the Future?
          </a>
        </motion.div>
      </div>
    </section>
  );
}