// src/components/Testimonials.tsx
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Cloud Oat transformed how we appear in AI search results. Our brand mentions in generative answers increased dramatically in just 6 weeks.",
    author: "Sarah L.",
    role: "Head of Content, E-commerce Brand",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5,
  },
  {
    quote: "The GEO audit alone uncovered opportunities we never knew existed. Their ongoing monitoring keeps us ahead in this fast-moving space.",
    author: "Michael R.",
    role: "Digital Marketing Director, SaaS Company",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
  },
  {
    quote: "Finally, someone who truly understands how LLMs cite sources. The results speak for themselves — more traffic from AI sources than traditional search.",
    author: "Emma K.",
    role: "Growth Lead, Tech Startup",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-cloud to-white">
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
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Brands working with Cloud Oat are already seeing stronger presence in generative AI answers and higher ROI from AI-driven traffic.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sky text-sky" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-gray-800 flex-1 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-sky/30"
                />
                <div>
                  <div className="font-semibold text-oat-dark">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-oat text-cloud px-10 py-5 rounded-full text-lg font-semibold hover:bg-oat-dark transition transform hover:scale-105 shadow-lg"
          >
            See If GEO Is Right for You
          </a>
        </motion.div>
      </div>
    </section>
  );
}