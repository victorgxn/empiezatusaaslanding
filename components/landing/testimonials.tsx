"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Indie Hacker",
    avatar: "MG",
    content:
      "Lancé mi SaaS en 3 días. Ya tengo $2,400 MRR y sigo creciendo. El mejor dinero que he invertido.",
    revenue: "$2,400 MRR",
  },
  {
    name: "Carlos Rodríguez",
    role: "Full Stack Developer",
    avatar: "CR",
    content:
      "El código es increíblemente limpio. Se nota que está hecho por alguien que realmente ha construido SaaS.",
    revenue: "$800 MRR",
  },
  {
    name: "Ana Martínez",
    role: "Founder @ DataViz",
    avatar: "AM",
    content:
      "Probé 5 boilerplates diferentes. Este es el único que realmente funciona out of the box sin bugs.",
    revenue: "$5,200 MRR",
  },
  {
    name: "David López",
    role: "CTO @ Startup",
    avatar: "DL",
    content:
      "Lo uso como base para todos los proyectos de la empresa. Nos ahorra semanas de desarrollo en cada proyecto.",
    revenue: "$12,000 MRR",
  },
  {
    name: "Laura Sánchez",
    role: "Solopreneur",
    avatar: "LS",
    content:
      "Como no-dev, temía que fuera complicado. Pero la documentación es tan clara que lo tuve funcionando en horas.",
    revenue: "$1,100 MRR",
  },
  {
    name: "Pedro Hernández",
    role: "AI Developer",
    avatar: "PH",
    content:
      "Perfecto para herramientas AI. Ya lancé 3 productos diferentes con este boilerplate.",
    revenue: "$3,500 MRR",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-gradient">usuarios</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            +500 builders ya están en la expedición con EmpiezaTuSaaS
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 relative group hover:glow-sm transition-all"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center text-sm font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">
                    {testimonial.revenue}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Builders en el gremio" },
            { value: "$2.5M+", label: "Revenue generado" },
            { value: "4.9/5", label: "Rating promedio" },
            { value: "50+", label: "Países" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
