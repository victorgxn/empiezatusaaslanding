"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Star, Users, Map, Trophy, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { SparklePosition } from "@/types";

// Predefined sparkle positions to avoid hydration mismatch
const sparklePositions: SparklePosition[] = [
  { left: 12, top: 8, duration: 4.2, delay: 0.5 },
  { left: 85, top: 15, duration: 3.8, delay: 1.2 },
  { left: 25, top: 72, duration: 5.1, delay: 0.8 },
  { left: 92, top: 45, duration: 3.5, delay: 2.1 },
  { left: 8, top: 35, duration: 4.8, delay: 1.5 },
  { left: 68, top: 88, duration: 3.9, delay: 0.3 },
  { left: 45, top: 22, duration: 5.5, delay: 2.8 },
  { left: 78, top: 68, duration: 4.1, delay: 1.8 },
  { left: 32, top: 55, duration: 3.6, delay: 0.9 },
  { left: 55, top: 12, duration: 4.5, delay: 2.3 },
  { left: 18, top: 92, duration: 5.2, delay: 1.1 },
  { left: 88, top: 78, duration: 3.7, delay: 0.6 },
  { left: 42, top: 42, duration: 4.9, delay: 2.5 },
  { left: 62, top: 58, duration: 3.4, delay: 1.7 },
  { left: 5, top: 65, duration: 5.8, delay: 0.2 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image - Puerta cerrada */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagen1.jpg"
          alt="Dungeon entrance"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Overlay gradient para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Efectos de luz de antorcha */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />

      {/* Floating sparkles - CSS animated for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {sparklePositions.map((sparkle, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-1.5 h-1.5 bg-gold/60 rounded-full sparkle"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              "--sparkle-duration": `${sparkle.duration}s`,
              "--sparkle-delay": `${sparkle.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="text-center"
        >
          {/* Badge RPG */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-8 px-5 py-3 text-sm border-3 border-gold/50 bg-background/80 backdrop-blur-sm hover:bg-gold/20 transition-colors rounded-full cartoon-shadow-sm"
            >
              <Rocket className="w-5 h-5 mr-2 text-gold float" />
              <span className="text-gold font-bold">Nueva Expedición</span>
              <span className="mx-3 text-muted-foreground">•</span>
              <span className="text-foreground/90">Tu aventura SaaS comienza aquí</span>
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9] drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Tu aventura hacia el{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient inline-block hover:scale-105 transition-transform cursor-default drop-shadow-lg">
              Indie Hacking
            </span>
            <br />
            <span className="inline-flex items-center gap-4">
              empieza aquí
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-12 h-12 text-gold inline drop-shadow-lg" />
              </motion.span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl text-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            El boilerplate NextJS que te ahorra hasta{" "}
            <span className="bg-destructive/20 text-destructive font-black px-2 py-0.5 rounded-md border border-destructive/50">
              3 meses
            </span>{" "}
            de desarrollo y te da las herramientas para conseguir tu{" "}
            <span className="bg-gold/20 text-gold font-black px-2 py-0.5 rounded-md border border-gold/50">
              primer € online
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="glow text-xl px-10 py-7 group font-black uppercase tracking-wide cartoon-btn rounded-2xl"
            >
              <Map className="w-6 h-6 mr-3" />
              Comenzar Expedición
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-xl px-10 py-7 border-3 border-border/80 bg-background/50 backdrop-blur-sm hover:border-accent hover:bg-accent/20 hover:text-foreground rounded-2xl font-bold cartoon-shadow-sm cartoon-btn"
            >
              <Trophy className="w-6 h-6 mr-3 text-accent" />
              Ver Demo
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-10 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center gap-4 bg-background/60 backdrop-blur-sm px-5 py-3 rounded-2xl border-2 border-border/50">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold border-3 border-background flex items-center justify-center text-sm font-black shadow-lg"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-black text-foreground text-xl">+20</span>
                <span className="text-muted-foreground">builders</span>
              </span>
            </div>
            <div className="flex items-center gap-2 bg-background/60 backdrop-blur-sm px-5 py-3 rounded-2xl border-2 border-border/50">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-gold text-gold"
                />
              ))}
              <span className="ml-2 font-black text-foreground text-xl">4.9/5</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, type: "spring", bounce: 0.3 }}
          className="mt-20 relative"
        >
          <div className="glass-card p-8 cartoon-shadow max-w-3xl mx-auto bg-background/80 backdrop-blur-md">
            {/* Terminal header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-full bg-destructive" />
              <div className="w-4 h-4 rounded-full bg-gold" />
              <div className="w-4 h-4 rounded-full bg-emerald" />
              <span className="ml-4 text-sm text-muted-foreground font-mono flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
                <Sparkles className="w-4 h-4 text-gold" />
                quest-log.sh
              </span>
            </div>
            <pre className="font-mono text-base sm:text-lg overflow-x-auto leading-relaxed">
              <code>
                <span className="text-muted-foreground">$</span>{" "}
                <span className="text-emerald font-bold">git</span>{" "}
                <span className="text-foreground">clone</span>{" "}
                <span className="text-primary font-bold">empiezatusaas</span>
                {"\n"}
                <span className="text-muted-foreground">$</span>{" "}
                <span className="text-emerald font-bold">cd</span>{" "}
                <span className="text-foreground">empiezatusaas</span>
                {"\n"}
                <span className="text-muted-foreground">$</span>{" "}
                <span className="text-emerald font-bold">npm</span>{" "}
                <span className="text-foreground">run dev</span>
                {"\n\n"}
                <motion.span
                  className="text-gold font-bold"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {"⚔️"} Quest iniciada...
                </motion.span>
                {"\n"}
                <span className="text-primary font-bold">
                  {"✨"} Listo en 2.3s
                </span>
                {"\n"}
                <span className="text-accent font-bold">
                  {"🏰"} http://localhost:3000
                </span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
