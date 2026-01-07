"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Crown, Users, BookOpen, Swords, type LucideIcon } from "lucide-react";
import Image from "next/image";

const tiers = [
  {
    id: "solo",
    name: "Solo Quest",
    icon: "/pricing/solo-quest.webp",
    price: 199,
    description: "Todo lo que necesitas para lanzar tu primer SaaS. El código, las herramientas, la magia.",
    tagline: "La aventura en solitario",
    color: "primary",
    glowClass: "tier-solo",
    features: [
      { text: "NextJS Boilerplate completo", included: true },
      { text: "SEO & Blog integrado", included: true },
      { text: "Mailgun emails", included: true },
      { text: "Stripe / Lemon Squeezy", included: true },
      { text: "MongoDB / Supabase", included: true },
      { text: "Google OAuth & Magic Links", included: true },
      { text: "Components & animations", included: true },
      { text: "ChatGPT prompts (terms & privacy)", included: true },
      { text: "Discord community", included: false },
      { text: "12h de curso", included: false },
    ],
    cta: "Empezar Aventura",
  },
  {
    id: "guild",
    name: "Guild Pass",
    icon: "/pricing/guild-pass.webp",
    price: 249,
    description: "Únete al gremio de builders. No estás solo en esta aventura.",
    tagline: "Acceso al gremio de builders",
    color: "accent",
    glowClass: "tier-guild",
    features: [
      { text: "NextJS Boilerplate completo", included: true },
      { text: "SEO & Blog integrado", included: true },
      { text: "Mailgun emails", included: true },
      { text: "Stripe / Lemon Squeezy", included: true },
      { text: "MongoDB / Supabase", included: true },
      { text: "Google OAuth & Magic Links", included: true },
      { text: "Components & animations", included: true },
      { text: "ChatGPT prompts (terms & privacy)", included: true },
      { text: "Discord community", included: true, highlight: true },
      { text: "12h de curso", included: false },
    ],
    cta: "Unirse al Gremio",
  },
  {
    id: "dragon",
    name: "Dragon Slayer",
    icon: "/pricing/dragon-slayer.webp",
    price: 299,
    description: "El camino completo del héroe. Desde cero hasta tu primer € online.",
    tagline: "El héroe que domina todo",
    color: "gold",
    glowClass: "tier-dragon",
    featured: true,
    badge: "PACK COMPLETO",
    features: [
      { text: "NextJS Boilerplate completo", included: true },
      { text: "SEO & Blog integrado", included: true },
      { text: "Mailgun emails", included: true },
      { text: "Stripe / Lemon Squeezy", included: true },
      { text: "MongoDB / Supabase", included: true },
      { text: "Google OAuth & Magic Links", included: true },
      { text: "Components & animations", included: true },
      { text: "ChatGPT prompts (terms & privacy)", included: true },
      { text: "Discord community", included: true },
      { text: "12h de curso completo", included: true },
    ],
    course: {
      title: "Curso Completo (12h)",
      items: [
        { icon: BookOpen, text: "Build a SaaS from 0" },
        { icon: Swords, text: "Entrepreneur mindset" },
        { icon: Crown, text: "De idea a tu primer €" },
      ],
    },
    cta: "Obtener Pack Completo",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      {/* Background Image - Cofre del tesoro */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagen-con-cofre.jpg"
          alt="Treasure room"
          fill
          className="object-cover object-center"
          quality={85}
        />
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Efectos de luz de antorchas */}
      <div className="absolute top-1/3 left-[15%] w-[300px] h-[300px] bg-primary/25 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-1/3 right-[15%] w-[300px] h-[300px] bg-gold/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Cartoon style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-5 py-3 text-base border-3 border-gold/50 bg-gold/15 rounded-full cartoon-shadow-sm"
            >
              <Crown className="w-5 h-5 mr-2 text-gold float" />
              <span className="font-bold text-gold">Elige tu destino</span>
            </Badge>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            Selecciona tu{" "}
            <span className="text-gradient">clase de aventurero</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Cada camino lleva al mismo destino: tu SaaS lanzado.
            <br />
            <span className="text-foreground font-semibold">La diferencia está en cómo quieres recorrerlo.</span>
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => {
            const colorMap = {
              primary: {
                icon: "text-primary bg-primary/20",
                check: "text-primary bg-primary/20",
                button: "bg-primary hover:bg-primary/90",
                badge: "border-primary/40 bg-primary/10 text-primary",
              },
              accent: {
                icon: "text-accent bg-accent/20",
                check: "text-accent bg-accent/20",
                button: "bg-accent hover:bg-accent/90 text-accent-foreground",
                badge: "border-accent/40 bg-accent/10 text-accent",
              },
              gold: {
                icon: "text-gold bg-gold/20",
                check: "text-gold bg-gold/20",
                button: "bg-gold hover:bg-gold/90 text-gold-foreground",
                badge: "border-gold/40 bg-gold/10 text-gold",
              },
            };
            const colorClasses = colorMap[tier.color as keyof typeof colorMap];

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30, rotate: index === 1 ? 0 : index === 0 ? -1 : 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
                className={`relative glass-card p-6 sm:p-8 ${tier.glowClass} ${
                  "featured" in tier && tier.featured ? "md:-mt-8 md:mb-8 ring-4 ring-gold/60 scale-[1.02]" : ""
                }`}
              >
                {/* Featured badge - Cartoon style */}
                {"featured" in tier && tier.featured && (
                  <motion.div
                    className="absolute -top-5 left-1/2 -translate-x-1/2 z-10"
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="bg-gradient-to-r from-gold via-primary to-gold text-white px-6 py-2 shadow-xl text-base font-black tracking-wider uppercase cartoon-shadow-gold rounded-full pulse-glow">
                      <Crown className="w-5 h-5 mr-2" />
                      {"badge" in tier ? tier.badge : "RECOMENDADO"}
                    </Badge>
                  </motion.div>
                )}

                {/* Header - Cartoon style */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-16 h-16 rounded-2xl overflow-hidden"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={tier.icon}
                        alt={tier.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-black">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{tier.tagline}</p>
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground mb-6">
                    {tier.description}
                  </p>

                  {/* Price - Cartoon style */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl sm:text-6xl font-black">{tier.price}</span>
                    <span className="text-2xl text-muted-foreground font-bold">EUR</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Pago único, acceso de por vida
                  </p>
                </div>

                {/* CTA - Cartoon button */}
                <Button
                  size="lg"
                  className={`w-full mb-8 py-6 font-black text-lg uppercase tracking-wide cartoon-btn rounded-2xl ${colorClasses.button} ${
                    tier.id === "dragon" ? "glow-gold" : tier.id === "guild" ? "glow-cyan" : "glow-sm"
                  }`}
                >
                  {tier.cta}
                </Button>

                {/* Features */}
                <div className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 + featureIndex * 0.03 }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-3 ${
                        !feature.included ? "opacity-40" : ""
                      } ${"highlight" in feature && feature.highlight ? "font-medium" : ""}`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        feature.included ? colorClasses.check : "bg-muted"
                      }`}>
                        <Check className={`w-3 h-3 ${feature.included ? "" : "text-muted-foreground"}`} />
                      </div>
                      <span className={`text-sm ${
                        "highlight" in feature && feature.highlight ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {feature.text}
                      </span>
                      {"highlight" in feature && feature.highlight && (
                        <Badge variant="outline" className={`text-xs py-0 px-2 ${colorClasses.badge}`}>
                          Nuevo
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Course section for Dragon Slayer */}
                {"course" in tier && tier.course && (
                  <div className="mt-6 pt-6 border-t border-gold/30">
                    <div className="bg-gradient-to-br from-gold/20 to-primary/10 rounded-xl p-4 border border-gold/30">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-gold/30 flex items-center justify-center">
                          <BookOpen className="w-4 h-4 text-gold" />
                        </div>
                        <span className="font-bold text-gold">{tier.course.title}</span>
                      </div>
                      <div className="space-y-2">
                        {tier.course.items.map((item: { icon: LucideIcon; text: string }) => {
                          const CourseIcon = item.icon;
                          return (
                            <div key={item.text} className="flex items-center gap-2">
                              <CourseIcon className="w-4 h-4 text-gold/80" />
                              <span className="text-sm text-foreground font-medium">{item.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald" />
            <span>Pago seguro con Stripe</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald" />
            <span>Garantía de 14 días</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald" />
            <span>+20 builders confían en nosotros</span>
          </div>
        </motion.div>

        {/* FAQ teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground">
            ¿Tienes preguntas?{" "}
            <a href="#faq" className="text-primary hover:underline font-medium">
              Lee nuestras FAQ
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
