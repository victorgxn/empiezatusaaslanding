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
} from "lucide-react";

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
    code: `// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }`,
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
    <section id="features" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Todo lo que necesitas,{" "}
            <span className="text-gradient">nada que no</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
            <TabsList className="grid grid-cols-3 sm:grid-cols-6 gap-2 h-auto bg-transparent mb-8">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="flex flex-col items-center gap-2 py-3 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
                >
                  <feature.icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{feature.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="glass rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-destructive/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                      <span className="ml-4 text-xs text-muted-foreground font-mono">
                        code preview
                      </span>
                    </div>
                    <pre className="font-mono text-xs sm:text-sm overflow-x-auto">
                      <code className="text-muted-foreground">
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
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
