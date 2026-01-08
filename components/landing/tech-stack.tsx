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
    name: "Next.js 16",
    icon: "/tecnologias-ia/nextjs.png",
  },
  {
    name: "TypeScript",
    icon: "/tecnologias-ia/typescript.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/tecnologias-ia/tailwind.png",
  },
  {
    name: "Shadcn/ui",
    icon: "/tecnologias-ia/shadcn.png",
  },
  {
    name: "Prisma",
    icon: "/tecnologias-ia/prisma.png",
  },
  {
    name: "Stripe",
    icon: "/tecnologias/stripe.webp",
  },
  {
    name: "Better Auth",
    icon: "/tecnologias/better-auth.webp",
  },
  {
    name: "Resend",
    icon: "/tecnologias/resend.webp",
  },
];

const aiTools = [
  { name: "Cursor", icon: "/ia/cursor.webp" },
  { name: "Claude", icon: "/ia/claude.webp" },
  { name: "ChatGPT", icon: "/ia/chatgpt.webp" },
  { name: "Copilot", icon: "/ia/copilot.webp" },
  { name: "Windsurf", icon: "/ia/windsurf.webp" },
];

export function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tu arsenal de <span className="text-gradient">herramientas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Las mejores tecnologías del ecosistema, integradas y listas para producción.
          </p>
        </motion.div>

        {/* Technologies - Single row with wrap */}
        <TooltipProvider delayDuration={100}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 mb-16"
          >
            {technologies.map((tech, index) => (
              <Tooltip key={tech.name}>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, y: -5 }}
                    className="relative cursor-pointer"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 relative">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 hover:opacity-60 transition-opacity duration-300" />
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-contain drop-shadow-lg relative z-10"
                      />
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="font-bold text-base">
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </TooltipProvider>

        {/* AI Compatible - Simple inline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <TooltipProvider delayDuration={100}>
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-card/50 backdrop-blur-sm px-6 py-4 rounded-2xl border border-border/50">
              <span className="text-muted-foreground font-medium text-sm sm:text-base">Compatible con</span>
              {aiTools.map((tool, index) => (
                <Tooltip key={tool.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.4 + index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-background/50 p-1.5 hover:bg-background/80 transition-colors cursor-pointer"
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
