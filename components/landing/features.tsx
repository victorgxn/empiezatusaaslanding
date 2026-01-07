"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  CreditCard,
  Mail,
  Database,
  Palette,
  Search,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const features = [
  {
    id: "auth",
    label: "Auth",
    icon: Shield,
    title: "Autenticación completa",
    description:
      "Sistema de autenticación robusto con múltiples proveedores y gestión de sesiones.",
    items: [
      "Magic Links para login sin contraseña",
      "OAuth con Google, GitHub, Discord",
      "Roles y permisos granulares",
      "Protección de rutas automática",
      "Gestión de sesiones segura",
    ],
    code: `// lib/auth.ts
import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"

export const auth = betterAuth({
  database: prismaAdapter(prisma),
  emailAndPassword: { enabled: true },
})`,
  },
  {
    id: "payments",
    label: "Pagos",
    icon: CreditCard,
    title: "Stripe integrado",
    description:
      "Acepta pagos, gestiona suscripciones y genera facturas automáticamente.",
    items: [
      "Checkout de Stripe preconfigurado",
      "Suscripciones y pagos únicos",
      "Portal del cliente incluido",
      "Webhooks configurados",
      "Múltiples planes de precios",
    ],
    code: `// Crear checkout session
const session = await stripe.checkout.sessions.create({
  mode: "subscription",
  payment_method_types: ["card"],
  line_items: [{ price: priceId, quantity: 1 }],
  success_url: \`\${url}/success\`,
  cancel_url: \`\${url}/cancel\`,
})`,
  },
  {
    id: "email",
    label: "Email",
    icon: Mail,
    title: "Emails transaccionales",
    description:
      "Envía emails bonitos y efectivos con plantillas prediseñadas.",
    items: [
      "Integración con Resend",
      "Plantillas React Email",
      "Emails de bienvenida automáticos",
      "Notificaciones de pago",
      "Recuperación de contraseña",
    ],
    code: `// Enviar email de bienvenida
await resend.emails.send({
  from: "hello@tusaas.com",
  to: user.email,
  subject: "Bienvenido a TuSaaS!",
  react: WelcomeEmail({ name: user.name }),
})`,
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    title: "Base de datos lista",
    description:
      "Prisma ORM configurado con modelos predefinidos para SaaS.",
    items: [
      "Prisma ORM configurado",
      "Modelos User, Subscription, etc.",
      "Migraciones automáticas",
      "Compatible con PostgreSQL, MySQL",
      "Seed data incluido",
    ],
    code: `// prisma/schema.prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  subscription  Subscription?
  createdAt     DateTime  @default(now())
}`,
  },
  {
    id: "ui",
    label: "UI",
    icon: Palette,
    title: "Componentes premium",
    description:
      "Librería de componentes moderna con Shadcn/ui y Tailwind CSS.",
    items: [
      "Shadcn/ui preinstalado",
      "Tailwind CSS v4 configurado",
      "Dark mode incluido",
      "Componentes accesibles",
      "Animaciones con Framer Motion",
    ],
    code: `// Componente Button personalizado
<Button variant="default" size="lg" className="glow">
  <Zap className="w-4 h-4 mr-2" />
  Lanzar Ahora
</Button>`,
  },
  {
    id: "seo",
    label: "SEO",
    icon: Search,
    title: "SEO optimizado",
    description:
      "Metadatos, sitemap y robots.txt configurados para máxima visibilidad.",
    items: [
      "Metadatos dinámicos",
      "Open Graph tags",
      "Sitemap automático",
      "robots.txt configurado",
      "Schema markup incluido",
    ],
    code: `// app/layout.tsx
export const metadata: Metadata = {
  title: "TuSaaS - Solución increíble",
  description: "Descripción optimizada para SEO",
  openGraph: { images: ["/og-image.png"] },
}`,
  },
];

export function Features() {
  return (
    <section id="features" className="py-28 relative overflow-hidden">
      {/* Background Image - Sala con antorchas */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagen-sin-puerta.jpg"
          alt="Dungeon room"
          fill
          className="object-cover object-center"
          quality={85}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background/90" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Efectos de luz */}
      <div className="absolute top-1/3 left-[25%] w-[200px] h-[200px] bg-primary/25 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute top-1/3 right-[25%] w-[200px] h-[200px] bg-gold/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />

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
              className="mb-6 px-5 py-3 text-base border-3 border-accent/50 bg-background/70 backdrop-blur-sm rounded-full cartoon-shadow-sm"
            >
              <Sparkles className="w-5 h-5 mr-2 text-accent float" />
              <span className="font-bold text-accent">Equipamiento del héroe</span>
            </Badge>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 drop-shadow-lg">
            Todo lo que necesitas,{" "}
            <span className="text-gradient">nada que no</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Funcionalidades esenciales para lanzar tu SaaS, sin bloatware ni
            configuraciones innecesarias.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="auth" className="w-full">
            <TabsList className="grid grid-cols-3 sm:grid-cols-6 gap-3 h-auto bg-background/60 backdrop-blur-sm p-3 rounded-2xl border-2 border-border/50 mb-10">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="flex flex-col items-center gap-2 py-4 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-xl transition-all font-bold"
                >
                  <feature.icon className="w-6 h-6" />
                  <span className="text-sm font-bold">{feature.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="glass-card p-8 bg-background/80 backdrop-blur-md">
                    <div className="flex items-center gap-4 mb-5">
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-primary/25 border-2 border-primary/40 flex items-center justify-center"
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <feature.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h3 className="text-2xl font-black">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-base mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-4">
                      {feature.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/25 border-2 border-primary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                          </div>
                          <span className="text-base text-foreground/80">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-card p-6 bg-background/80 backdrop-blur-md cartoon-shadow-sm">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-4 h-4 rounded-full bg-destructive" />
                      <div className="w-4 h-4 rounded-full bg-gold" />
                      <div className="w-4 h-4 rounded-full bg-emerald" />
                      <span className="ml-4 text-sm text-muted-foreground font-mono bg-muted/50 px-3 py-1 rounded-full">
                        code preview
                      </span>
                    </div>
                    <pre className="font-mono text-sm sm:text-base overflow-x-auto">
                      <code className="text-foreground/70">
                        {feature.code}
                      </code>
                    </pre>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Users,
              title: "Multi-tenancy",
              description: "Soporte para múltiples organizaciones",
            },
            {
              icon: BarChart3,
              title: "Analytics",
              description: "Integración con Plausible/PostHog",
            },
            {
              icon: Shield,
              title: "Rate Limiting",
              description: "Protección contra abusos",
            },
            {
              icon: Database,
              title: "File Uploads",
              description: "Subida de archivos con S3",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center bg-background/70 backdrop-blur-md hover:bg-background/80"
            >
              <motion.div
                className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                <item.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h4 className="font-black text-lg mb-2">{item.title}</h4>
              <p className="text-base text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
