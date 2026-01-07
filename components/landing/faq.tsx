"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué stack tecnológico usa ShipFast?",
    answer:
      "ShipFast está construido con Next.js 15, TypeScript, Tailwind CSS v4, Shadcn/ui, Prisma ORM, NextAuth.js para autenticación, Stripe para pagos, y Resend para emails. Todo configurado y listo para producción.",
  },
  {
    question: "¿Puedo usarlo para proyectos de clientes?",
    answer:
      "¡Sí! La licencia te permite usar ShipFast para proyectos personales y comerciales ilimitados. Puedes construir SaaS para ti o para tus clientes sin restricciones.",
  },
  {
    question: "¿Incluye actualizaciones futuras?",
    answer:
      "Sí, el acceso de por vida incluye todas las actualizaciones futuras. Cuando añadamos nuevas funcionalidades, integraciones o mejoras, las recibirás automáticamente sin costo adicional.",
  },
  {
    question: "¿Hay soporte disponible?",
    answer:
      "Tienes acceso a nuestro Discord privado donde puedes hacer preguntas, compartir tu progreso y conectar con otros builders. También respondemos consultas por email en menos de 24 horas.",
  },
  {
    question: "¿Funciona con AI assistants como Cursor?",
    answer:
      "¡Absolutamente! El código está estructurado de forma clara y consistente, lo que lo hace ideal para trabajar con Cursor, Claude, ChatGPT, v0.dev y otros asistentes de código AI.",
  },
  {
    question: "¿Cuál es la política de reembolso?",
    answer:
      "Ofrecemos una garantía de 14 días. Si no estás satisfecho con ShipFast por cualquier motivo, te devolvemos el 100% de tu dinero, sin preguntas.",
  },
  {
    question: "¿Necesito experiencia previa con Next.js?",
    answer:
      "Conocimientos básicos de React/Next.js son recomendados, pero no necesitas ser un experto. La documentación incluye guías paso a paso y el código está bien comentado.",
  },
  {
    question: "¿Puedo cambiar la base de datos?",
    answer:
      "Sí, Prisma soporta múltiples bases de datos. Por defecto usamos PostgreSQL, pero puedes cambiar fácilmente a MySQL, SQLite, MongoDB o SQL Server modificando el schema.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Preguntas{" "}
            <span className="text-gradient">frecuentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Todo lo que necesitas saber antes de empezar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            ¿Tienes otra pregunta?{" "}
            <a
              href="mailto:hello@shipfast.com"
              className="text-primary hover:underline"
            >
              Escríbenos
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
