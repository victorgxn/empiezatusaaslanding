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
    question: "¿Es EmpiezaTuSaaS mejor que herramientas como Lovable o Bolt?",
    answer:
      "Lovable y Bolt son herramientas geniales si quieres construir una landing page rápidamente. Pero no te ayudan a lanzar una startup. EmpiezaTuSaaS es un boilerplate completo para startups: incluye sistema de pagos, base de datos, login, componentes UI probados en batalla, y mucho más. Le da a tu editor de código con IA contexto real para construir funcionalidades completas en segundos. Reutilízalo en todos tus proyectos sin perder tiempo aprendiendo una nueva configuración.",
  },
  {
    question: "¿Funciona EmpiezaTuSaaS con IA (Cursor, Copilot)?",
    answer:
      "No solo funciona con IA, ¡está construido para ella! EmpiezaTuSaaS viene con un código base completo que le da a tu editor de código con IA contexto real para construir funcionalidades completas en segundos. Solo tienes que pedirle a tu IA que construya la feature que necesitas, y generará el código usando las convenciones de nombres, estructura de archivos y buenas prácticas que ya conoces.",
  },
  {
    question: "¿Necesito experiencia previa en programación?",
    answer:
      "¡No! Si compras el pack Dragon Slayer que incluye el curso de 12 horas, aprenderás todo lo necesario desde cero. El curso te guía paso a paso para lanzar tu primer MVP sin necesidad de conocimientos previos de programación.",
  },
  {
    question: "¿Hay otros costes asociados?",
    answer:
      "Muchas plataformas de hosting como Vercel te permiten alojar un proyecto gratis (front-end + back-end) y bases de datos como MongoDB/Supabase tienen planes gratuitos — así que puedes lanzar tu primera app por 0€/mes. Si usas Magic Links para registro, gastarás aproximadamente 1€ por cada 1.000 usuarios.",
  },
  {
    question: "¿Es solo una plantilla web?",
    answer:
      "Es mucho más que una plantilla. Puedes copiar/pegar secciones para construir tu sitio rápidamente: sección de precios, FAQ, e incluso un blog completo. También incluye componentes UI como botones, modales, popovers, etc. Además viene con herramientas esenciales para un negocio online: procesamiento de pagos, emails, SEO, y más.",
  },
  {
    question: "Mi stack tecnológico es diferente, ¿puedo usarlo igual?",
    answer:
      "¡Sí! Las librerías son independientes. Puedes usar SendGrid en lugar de Resend, LemonSqueezy en lugar de Stripe, o MySQL en lugar de PostgreSQL, por ejemplo. El código está estructurado para ser flexible.",
  },
  {
    question: "¿Puedo usarlo para proyectos de clientes?",
    answer:
      "¡Sí! La licencia te permite usar EmpiezaTuSaaS para proyectos personales y comerciales ilimitados. Puedes construir SaaS para ti o para tus clientes sin restricciones.",
  },
  {
    question: "¿Incluye actualizaciones futuras?",
    answer:
      "Sí, el acceso de por vida incluye todas las actualizaciones futuras. Cuando añadamos nuevas funcionalidades, integraciones o mejoras, las recibirás automáticamente sin costo adicional.",
  },
  {
    question: "¿Cuál es la política de reembolso?",
    answer:
      "Ofrecemos una garantía de 14 días. Si no estás satisfecho con EmpiezaTuSaaS por cualquier motivo, te devolvemos el 100% de tu dinero, sin preguntas.",
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
              href="mailto:victxrgxnzalez@gmail.com"
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
