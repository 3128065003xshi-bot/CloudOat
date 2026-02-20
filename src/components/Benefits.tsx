// src/components/Benefits.tsx
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart2, 
  Users, 
  Clock 
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Higher Visibility in AI Engines",
    description: "Increase citations, featured snippets, and direct answers in ChatGPT, Perplexity, and Google AI — driving more qualified traffic.",
    stat: "Up to 3× more AI mentions",
    color: "sky",
  },
  {
    icon: Shield,
    title: "Future-Proof Your Traffic",
    description: "Traditional SEO is changing fast. GEO protects your brand from algorithm shifts and keeps you visible in the generative era.",
    stat: "Stay ahead of AI evolution",
    color: "oat",
  },
  {
    icon: Zap,
    title: "Faster Results Than Traditional SEO",
    description: "Many clients see meaningful AI visibility improvements in weeks — not months — thanks to targeted entity and content optimization.",
    stat: "Results in 4–8 weeks",
    color: "sky-dark",
  },
  {
    icon: BarChart2,
    title: "Transparent, Data-Driven",
    description: "Real dashboards tracking AI citations, brand mentions, traffic sources, and ROI — no black box reporting.",
    stat: "Full visibility & analytics",
    color: "oat-dark",
  },
  {
    icon: Users,
    title: "Expert Team in LLMs & Content",
    description: "Our specialists combine deep knowledge of large language models with years of content marketing and SEO experience.",
    stat: "LLM + SEO experts",
    color: "sky",
  },
  {
    icon: Clock,
    title: "Ongoing Support & Iteration",
    description: "AI search evolves constantly — we monitor, adapt, and optimize continuously so your advantage never fades.",
    stat: "Monthly updates & reports",
    color: "oat",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
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
            Why Choose Cloud Oat for GEO?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            In the shift from traditional search to generative AI, we deliver the expertise, speed, and measurable results you need to win.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-cloud/40 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-sky/30 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-xl bg-${benefit.color}/10 flex items-center justify-center mb-6 group-hover:bg-${benefit.color}/20 transition-colors`}>
                <benefit.icon className={`w-8 h-8 text-${benefit.color}`} />
              </div>
              <h3 className="text-2xl font-semibold text-oat-dark mb-4 group-hover:text-sky transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-700 mb-6 flex-1">
                {benefit.description}
              </p>
              <div className={`text-sm font-medium text-${benefit.color} bg-${benefit.color}/10 px-4 py-2 rounded-full inline-block self-start`}>
                {benefit.stat}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust / Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-5xl font-bold text-sky mb-2">3×+</div>
            <p className="text-gray-700">Average increase in AI visibility</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-oat mb-2">4–8</div>
            <p className="text-gray-700">Weeks to see meaningful results</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-sky-dark mb-2">100%</div>
            <p className="text-gray-700">Transparent reporting & data access</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}