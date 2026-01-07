"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Sparkles } from "lucide-react";

const features = [
  "Código fuente completo",
  "Actualizaciones de por vida",
  "Acceso a Discord privado",
  "Soporte prioritario",
  "Templates de landing incluidos",
  "Documentación completa",
  "Componentes Shadcn/ui",
  "Integración Stripe lista",
  "Sistema de autenticación",
  "Emails con Resend",
  "Base de datos con Prisma",
  "Deploy en Vercel 1-click",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm border-primary/30 bg-primary/10"
          >
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            Oferta de lanzamiento
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Un precio,{" "}
            <span className="text-gradient">acceso de por vida</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sin suscripciones, sin pagos recurrentes. Paga una vez y construye
            proyectos ilimitados.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="glass rounded-3xl p-8 sm:p-10 glow relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-6 right-6">
              <Badge className="bg-primary text-primary-foreground">
                Más popular
              </Badge>
            </div>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Lifetime Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Todo incluido, para siempre
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">$149</span>
                <span className="text-xl text-muted-foreground line-through">
                  $299
                </span>
              </div>
              <p className="text-sm text-primary font-medium">
                Ahorras $150 (50% off)
              </p>
            </div>

            {/* CTA */}
            <Button size="lg" className="w-full glow text-lg py-6 mb-8">
              <Zap className="w-5 h-5 mr-2" />
              Obtener Acceso Ahora
            </Button>

            {/* Features */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 + index * 0.03 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Pago seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>Garantía 14 días</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            ¿Tienes preguntas?{" "}
            <a href="#faq" className="text-primary hover:underline">
              Lee nuestras FAQ
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
