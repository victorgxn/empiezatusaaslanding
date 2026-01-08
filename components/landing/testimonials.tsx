"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Testimonial, Stat } from "@/types";

const testimonials: Testimonial[] = [
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

const stats: Stat[] = [
  { value: "20+", label: "Builders en el gremio" },
  { value: "10k+", label: "Líneas de código" },
  { value: "4.9/5", label: "Rating promedio" },
  { value: "+15", label: "Funcionalidades listas" },
];

export function Testimonials() {
  const memoizedTestimonials = useMemo(() => testimonials, []);
  const memoizedStats = useMemo(() => stats, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-gradient">usuarios</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            +20 builders ya están en la expedición con EmpiezaTuSaaS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-6">
          {memoizedTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 relative group hover:glow-sm transition-all h-full flex flex-col"
            >
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm leading-relaxed flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between gap-2 mt-auto">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
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
          className="mt-16 grid grid-cols-4 gap-4 sm:gap-8"
        >
          {memoizedStats.map((stat) => (
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
