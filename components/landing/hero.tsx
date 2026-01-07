"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Star, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 text-sm border-primary/30 bg-primary/10"
          >
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-primary">50% OFF</span>
            <span className="mx-2 text-muted-foreground">-</span>
            <span className="text-muted-foreground">Solo quedan 13 unidades</span>
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            De idea a{" "}
            <span className="text-gradient">SaaS</span>
            <br />
            en un fin de semana
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            El boilerplate NextJS con todo lo que necesitas para lanzar tu SaaS,
            herramienta AI, o web app y{" "}
            <span className="text-foreground font-medium">
              facturar online rápido.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="glow text-lg px-8 py-6 group">
              <Zap className="w-5 h-5 mr-2" />
              Obtener Acceso - $149
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Ver Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 border-2 border-background flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                +500 developers
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-primary text-primary"
                />
              ))}
              <span className="ml-1">4.9/5 rating</span>
            </div>
          </div>
        </motion.div>

        {/* Code Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 relative"
        >
          <div className="glass rounded-xl p-6 glow max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">
                terminal
              </span>
            </div>
            <pre className="font-mono text-sm sm:text-base overflow-x-auto">
              <code>
                <span className="text-muted-foreground">$</span>{" "}
                <span className="text-green-400">npx</span>{" "}
                <span className="text-foreground">create-shipfast-app</span>{" "}
                <span className="text-primary">my-saas</span>
                {"\n"}
                <span className="text-muted-foreground">$</span>{" "}
                <span className="text-green-400">cd</span>{" "}
                <span className="text-foreground">my-saas</span>
                {"\n"}
                <span className="text-muted-foreground">$</span>{" "}
                <span className="text-green-400">npm</span>{" "}
                <span className="text-foreground">run dev</span>
                {"\n\n"}
                <span className="text-primary">
                  {">"} Ready in 2.3s
                </span>
                {"\n"}
                <span className="text-muted-foreground">
                  {">"} Local: http://localhost:3000
                </span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
