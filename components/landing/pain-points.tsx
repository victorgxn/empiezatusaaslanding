"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle2, ArrowDown } from "lucide-react";

const painPoints = [
  { task: "Configurar Auth (NextAuth/Clerk)", hours: 8 },
  { task: "Integrar Stripe/Pagos", hours: 12 },
  { task: "Emails transaccionales", hours: 4 },
  { task: "Landing page responsive", hours: 6 },
  { task: "Dashboard con roles", hours: 10 },
  { task: "SEO + Analytics", hours: 4 },
];

const totalHours = painPoints.reduce((acc, item) => acc + item.hours, 0);

export function PainPoints() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Cuántas horas pierdes configurando{" "}
            <span className="text-gradient">lo mismo</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada nuevo proyecto significa repetir las mismas tareas aburridas.
            Tiempo que podrías invertir en construir tu producto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Pain Points List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6 text-destructive">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Sin ShipFast</span>
            </div>

            <div className="space-y-4">
              {painPoints.map((item, index) => (
                <motion.div
                  key={item.task}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                >
                  <span className="text-muted-foreground">{item.task}</span>
                  <span className="font-mono text-destructive font-medium">
                    {item.hours}h
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
              <span className="font-semibold text-lg">Total:</span>
              <span className="font-mono text-2xl text-destructive font-bold">
                {totalHours}+ horas
              </span>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-6">
              <ArrowDown className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Hay una forma más fácil
            </h3>

            <div className="glass rounded-xl p-6 mb-6">
              <pre className="font-mono text-lg">
                <code>
                  <span className="text-muted-foreground">const</span>{" "}
                  <span className="text-foreground">launch_time</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-primary">&apos;Hoy&apos;</span>
                  <span className="text-muted-foreground">;</span>
                </code>
              </pre>
            </div>

            <div className="space-y-3">
              {[
                "Autenticación lista en minutos",
                "Pagos con Stripe integrados",
                "Emails configurados",
                "Dashboard profesional",
                "SEO optimizado desde el día 1",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
