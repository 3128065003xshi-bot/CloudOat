// src/components/HowItWorks.tsx
import { motion } from 'framer-motion';
import { Search, FileSearch, Settings2, Rocket, LineChart } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Audit",
    description: "We analyze your current content, visibility in AI engines, and identify opportunities for improvement.",
    color: "sky",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Entity & Strategy Mapping",
    description: "Deep research on entities, context, and custom GEO strategy tailored to your brand and goals.",
    color: "oat",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Content Optimization & Implementation",
    description: "Rewrite, restructure, and enhance content with AI-friendly schema, structure, and language patterns.",
    color: "sky-dark",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Testing & Launch",
    description: "Validate in real generative engines, iterate quickly, and deploy optimized content live.",
    color: "oat-dark",
  },
  {
    number: "05",
    icon: LineChart,
    title: "Monitoring & Iteration",
    description: "Ongoing tracking of citations, rankings, and traffic from AI sources — continuous refinement.",
    color: "sky",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-cloud">
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
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Our proven 5-step process turns your content into AI-powered visibility and traffic.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } gap-8 md:gap-12 relative z-10`}
              >
                {/* Step circle */}
                <div className="relative z-10 flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-sky">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-sky-dark">{step.number}</div>
                    <step.icon className={`w-8 h-8 md:w-12 md:h-12 text-${step.color} mx-auto mt-1`} />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl md:text-3xl font-semibold text-oat-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-sky to-sky-dark text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-xl transition transform hover:scale-105"
          >
            Start Your GEO Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}