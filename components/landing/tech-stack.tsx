"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "Next.js 15",
    description: "React framework",
    icon: "N",
    color: "from-white to-gray-400",
  },
  {
    name: "TypeScript",
    description: "Type safety",
    icon: "TS",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Tailwind CSS",
    description: "Styling",
    icon: "Tw",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "Shadcn/ui",
    description: "UI Components",
    icon: "UI",
    color: "from-white to-gray-400",
  },
  {
    name: "Prisma",
    description: "Database ORM",
    icon: "P",
    color: "from-teal-400 to-teal-600",
  },
  {
    name: "Stripe",
    description: "Payments",
    icon: "S",
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "NextAuth",
    description: "Authentication",
    icon: "A",
    color: "from-green-400 to-green-600",
  },
  {
    name: "Resend",
    description: "Emails",
    icon: "R",
    color: "from-pink-400 to-pink-600",
  },
];

export function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stack tecnológico{" "}
            <span className="text-gradient">moderno</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Las mejores herramientas del ecosistema, integradas y listas para
            producción.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 text-center group cursor-default"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-xl font-bold text-background group-hover:scale-110 transition-transform`}
              >
                {tech.icon}
              </div>
              <h3 className="font-semibold mb-1">{tech.name}</h3>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* AI Compatible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Construido para la era de AI
            </h3>
            <p className="text-muted-foreground mb-6">
              Código limpio y bien estructurado, optimizado para trabajar con
              asistentes de código AI.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["Cursor", "Claude", "ChatGPT", "v0.dev"].map((tool) => (
                <div
                  key={tool}
                  className="px-4 py-2 rounded-full bg-secondary text-sm font-medium"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
