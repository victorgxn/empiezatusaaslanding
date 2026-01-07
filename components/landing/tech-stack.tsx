"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const technologies = [
  {
    name: "Next.js 15",
    description: "React framework",
    icon: "/tecnologias/nextjs.webp",
  },
  {
    name: "TypeScript",
    description: "Type safety",
    icon: "/tecnologias/typescript.webp",
  },
  {
    name: "Tailwind CSS",
    description: "Styling",
    icon: "/tecnologias/tailwind.webp",
  },
  {
    name: "Shadcn/ui",
    description: "UI Components",
    icon: "/tecnologias/shadcn.webp",
  },
  {
    name: "Prisma",
    description: "Database ORM",
    icon: "/tecnologias/prisma.webp",
  },
  {
    name: "Stripe",
    description: "Payments",
    icon: "/tecnologias/stripe.webp",
  },
  {
    name: "Better Auth",
    description: "Authentication",
    icon: "/tecnologias/better-auth.webp",
  },
  {
    name: "Resend",
    description: "Emails",
    icon: "/tecnologias/resend.webp",
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

        <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-lg sm:rounded-xl p-2 sm:p-4 lg:p-6 text-center group cursor-default"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto mb-2 sm:mb-4 rounded-md overflow-hidden group-hover:scale-110 transition-transform">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm lg:text-base mb-0.5 sm:mb-1 truncate">{tech.name}</h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground hidden sm:block">{tech.description}</p>
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
          <TooltipProvider delayDuration={100}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-muted-foreground font-medium">Compatible con</span>
              {[
                { name: "Cursor", icon: "/ia/cursor.webp" },
                { name: "Claude", icon: "/ia/claude.webp" },
                { name: "ChatGPT", icon: "/ia/chatgpt.webp" },
                { name: "Copilot", icon: "/ia/copilot.webp" },
                { name: "Windsurf", icon: "/ia/windsurf.webp" },
              ].map((tool) => (
                <Tooltip key={tool.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-10 h-10 rounded-lg overflow-hidden border border-border/50 bg-background/50 p-1 hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tool.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </motion.div>
      </div>
    </section>
  );
}
