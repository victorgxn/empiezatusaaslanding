"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sword, ArrowRight, Sparkles, Shield } from "lucide-react";
import Image from "next/image";

export function CTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background Image - Arena de batalla */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagen-batalla.jpg"
          alt="Battle arena"
          fill
          className="object-cover object-center"
          quality={85}
        />
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/80" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Efectos de luz de antorchas */}
      <div className="absolute top-1/2 left-[20%] w-[250px] h-[250px] bg-primary/30 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute top-1/2 right-[20%] w-[250px] h-[250px] bg-gold/25 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-3 rounded-full bg-background/70 backdrop-blur-sm border-3 border-gold/50 cartoon-shadow-sm"
          >
            <Sparkles className="w-5 h-5 text-gold float" />
            <span className="text-base text-gold font-bold">Tu aventura te espera</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 drop-shadow-2xl">
            ¿Listo para comenzar tu{" "}
            <span className="text-gradient">expedición</span>?
          </h2>
          <p className="text-xl sm:text-2xl text-foreground/90 mb-10 max-w-2xl mx-auto drop-shadow-lg">
            Únete a <span className="text-foreground font-black">+20 builders</span> que ya están
            construyendo sus SaaS. Empieza hoy y lanza tu primer producto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button
              size="lg"
              className="glow text-xl px-12 py-8 group font-black uppercase tracking-wide cartoon-btn rounded-2xl"
            >
              <Sword className="w-6 h-6 mr-3" />
              Comenzar Expedición
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-base">
            <div className="flex items-center gap-2 bg-background/60 backdrop-blur-sm px-4 py-2 rounded-xl border-2 border-border/50">
              <Shield className="w-5 h-5 text-emerald" />
              <span className="font-semibold">Pago único</span>
            </div>
            <div className="flex items-center gap-2 bg-background/60 backdrop-blur-sm px-4 py-2 rounded-xl border-2 border-border/50">
              <Shield className="w-5 h-5 text-emerald" />
              <span className="font-semibold">Sin suscripciones</span>
            </div>
            <div className="flex items-center gap-2 bg-background/60 backdrop-blur-sm px-4 py-2 rounded-xl border-2 border-border/50">
              <Shield className="w-5 h-5 text-emerald" />
              <span className="font-semibold">Garantía 14 días</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
