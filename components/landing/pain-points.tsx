"use client";

import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle2,
  Zap,
  Shield,
  CreditCard,
  Mail,
  Layout,
  Users,
  Search,
  Skull,
  Sparkles,
  Trophy,
  Rocket
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const painPoints = [
  { task: "Configurar Auth (Better Auth)", hours: 8, icon: Shield },
  { task: "Integrar Stripe/Pagos", hours: 12, icon: CreditCard },
  { task: "Emails transaccionales", hours: 4, icon: Mail },
  { task: "Landing page responsive", hours: 6, icon: Layout },
  { task: "Dashboard con roles", hours: 10, icon: Users },
  { task: "SEO + Analytics", hours: 4, icon: Search },
];

const solutions = [
  { text: "Autenticación lista en minutos", icon: Shield },
  { text: "Pagos con Stripe integrados", icon: CreditCard },
  { text: "Emails configurados", icon: Mail },
  { text: "Dashboard profesional", icon: Layout },
  { text: "SEO optimizado desde el día 1", icon: Search },
];

const totalHours = painPoints.reduce((acc, item) => acc + item.hours, 0);

export function PainPoints() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent" />
      <div className="absolute top-1/2 left-[20%] w-[300px] h-[300px] bg-destructive/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-[20%] w-[300px] h-[300px] bg-emerald/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-5 py-3 text-base border-3 border-destructive/50 bg-destructive/10 rounded-full cartoon-shadow-sm"
            >
              <Skull className="w-5 h-5 mr-2 text-destructive float" />
              <span className="font-bold text-destructive">El ciclo infinito</span>
            </Badge>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            ¿Cuántas horas pierdes configurando{" "}
            <span className="text-gradient">lo mismo</span>?
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Cada nuevo proyecto significa repetir las mismas tareas aburridas.
            <br />
            <span className="text-foreground font-semibold">Tiempo que podrías invertir en construir tu producto.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-12 items-stretch">
          {/* Pain Points List - THE BAD */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-2 sm:p-4 lg:p-8 bg-destructive/5 border-destructive/20 relative"
          >
            {/* Danger glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent rounded-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-8">
                <motion.div
                  className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-destructive/20 border-2 sm:border-3 border-destructive/40 flex items-center justify-center flex-shrink-0"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Clock className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-destructive" />
                </motion.div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-lg lg:text-xl font-black text-destructive truncate">Sin EmpiezaTuSaaS</h3>
                  <p className="text-[10px] sm:text-sm text-muted-foreground hidden sm:block">El camino largo y doloroso</p>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-3">
                {painPoints.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.task}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center justify-between py-1.5 sm:py-3 lg:py-4 px-2 sm:px-4 rounded-lg sm:rounded-xl bg-background/50 border sm:border-2 border-destructive/20 hover:border-destructive/40 transition-all group"
                    >
                      <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-destructive/15 flex items-center justify-center group-hover:bg-destructive/25 transition-colors flex-shrink-0">
                          <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-destructive/80" />
                        </div>
                        <span className="text-[9px] sm:text-xs lg:text-sm text-foreground/80 font-medium truncate">{item.task}</span>
                      </div>
                      <motion.div
                        className="flex items-center bg-destructive/20 px-1.5 sm:px-3 py-0.5 sm:py-1.5 rounded-full flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="font-mono text-[10px] sm:text-sm lg:text-lg text-destructive font-black">
                          {item.hours}h
                        </span>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Total */}
              <motion.div
                className="mt-3 sm:mt-6 pt-3 sm:pt-6 border-t-2 sm:border-t-3 border-destructive/30 flex items-center justify-between gap-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="font-black text-[10px] sm:text-base lg:text-xl text-foreground">Total:</span>
                <motion.div
                  className="flex items-center gap-1 sm:gap-2 bg-destructive/30 px-2 sm:px-5 py-1.5 sm:py-3 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-destructive/50"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Skull className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-destructive" />
                  <span className="font-mono text-sm sm:text-2xl lg:text-3xl text-destructive font-black">
                    {totalHours}h+
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Solution - THE GOOD */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-2 sm:p-4 lg:p-8 bg-emerald/5 border-emerald/20 relative"
          >
            {/* Success glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald/10 to-transparent rounded-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-8">
                <motion.div
                  className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-emerald/20 border-2 sm:border-3 border-emerald/40 flex items-center justify-center flex-shrink-0"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Rocket className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-emerald" />
                </motion.div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-lg lg:text-xl font-black text-emerald truncate">Con EmpiezaTuSaaS</h3>
                  <p className="text-[10px] sm:text-sm text-muted-foreground hidden sm:block">El atajo del héroe</p>
                </div>
              </div>

              {/* Code block */}
              <motion.div
                className="glass-card p-2 sm:p-4 lg:p-5 mb-3 sm:mb-6 bg-background/80 border-emerald/30 hidden sm:block"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-destructive" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gold" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald" />
                  <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs text-muted-foreground font-mono">magic.ts</span>
                </div>
                <pre className="font-mono text-xs sm:text-sm lg:text-lg">
                  <code>
                    <span className="text-muted-foreground">const</span>{" "}
                    <span className="text-emerald font-bold">launch_time</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-gold font-bold">&apos;Hoy&apos;</span>
                    <span className="text-muted-foreground">;</span>
                  </code>
                </pre>
              </motion.div>

              {/* Solutions list */}
              <div className="space-y-1.5 sm:space-y-3">
                {solutions.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: -5, scale: 1.02 }}
                      className="flex items-center gap-1.5 sm:gap-3 py-1.5 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl bg-background/50 border sm:border-2 border-emerald/20 hover:border-emerald/40 transition-all group"
                    >
                      <motion.div
                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-emerald/20 flex items-center justify-center group-hover:bg-emerald/30 transition-colors flex-shrink-0"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                      >
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-emerald" />
                      </motion.div>
                      <span className="text-[9px] sm:text-xs lg:text-sm text-foreground font-medium flex-1 truncate">{item.text}</span>
                      <CheckCircle2 className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-emerald flex-shrink-0" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Time saved */}
              <motion.div
                className="mt-3 sm:mt-6 pt-3 sm:pt-6 border-t-2 sm:border-t-3 border-emerald/30 flex items-center justify-between gap-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="font-black text-[10px] sm:text-base lg:text-xl text-foreground">Tiempo:</span>
                <motion.div
                  className="flex items-center gap-1 sm:gap-2 bg-emerald/30 px-2 sm:px-5 py-1.5 sm:py-3 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-emerald/50"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Zap className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-emerald" />
                  <span className="font-mono text-sm sm:text-2xl lg:text-3xl text-emerald font-black">
                    5min
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-4 bg-background/60 backdrop-blur-sm px-3 sm:px-8 py-3 sm:py-5 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-primary/30 cartoon-shadow">
            <Trophy className="w-5 h-5 sm:w-8 sm:h-8 text-gold flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm sm:text-xl lg:text-2xl font-black">
                Ahorra <span className="text-gradient">{totalHours - 5}+ horas</span>
              </p>
              <p className="text-[10px] sm:text-sm text-muted-foreground hidden sm:block">Tiempo que puedes invertir en lo que realmente importa</p>
            </div>
            <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-primary float flex-shrink-0 hidden sm:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
