// src/components/Services.tsx
import { motion } from 'framer-motion';
import { 
  Search, 
  FileText, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  LineChart 
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "GEO Audits",
    description: "Deep analysis of your current content performance in generative AI engines — identify gaps and quick wins.",
    color: "sky",
  },
  {
    icon: FileText,
    title: "Content Optimization",
    description: "Rewrite and restructure existing content to rank higher in AI summaries, citations, and featured responses.",
    color: "oat",
  },
  {
    icon: BarChart3,
    title: "Entity & Keyword Research",
    description: "Advanced research focused on entities, context, and emerging AI search patterns — not just traditional keywords.",
    color: "sky-dark",
  },
  {
    icon: Zap,
    title: "Real-Time Monitoring",
    description: "Track brand visibility, citation rates, and traffic from generative sources with live dashboards.",
    color: "oat-dark",
  },
  {
    icon: ShieldCheck,
    title: "Technical GEO Setup",
    description: "Schema markup, structured data, crawl optimization — make your site AI-friendly from the ground up.",
    color: "sky",
  },
  {
    icon: LineChart,
    title: "Custom Strategies & Reporting",
    description: "Tailored GEO plans with monthly reports showing ROI from AI-driven traffic and citations.",
    color: "oat",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-cloud to-white">
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
            Our GEO Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            We help brands dominate the generative AI era — from audits to full-stack optimization and ongoing growth.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-sky/30 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:bg-${service.color}/20 transition-colors`}>
                <service.icon className={`w-8 h-8 text-${service.color}`} />
              </div>
              <h3 className="text-2xl font-semibold text-oat-dark mb-4 group-hover:text-sky transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 flex-1">
                {service.description}
              </p>
              <div className="mt-6">
                <a href="#contact" className="text-sky hover:text-sky-dark font-medium inline-flex items-center gap-2">
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-oat text-cloud px-10 py-5 rounded-full text-lg font-semibold hover:bg-oat-dark transition transform hover:scale-105 shadow-lg"
          >
            Get Your Free GEO Audit Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}