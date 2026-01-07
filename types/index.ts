import type { LucideIcon } from "lucide-react";

// Testimonials
export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  revenue: string;
}

// Pricing
export interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface CourseItem {
  icon: LucideIcon;
  text: string;
}

export interface Course {
  title: string;
  items: CourseItem[];
}

export type PricingColor = "primary" | "accent" | "gold";

export interface PricingTier {
  id: string;
  name: string;
  icon: string;
  price: number;
  description: string;
  tagline: string;
  color: PricingColor;
  glowClass: string;
  features: PricingFeature[];
  cta: string;
  featured?: boolean;
  badge?: string;
  course?: Course;
}

// Features
export interface Feature {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  code: string;
}

export interface AdditionalFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

// FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

// Navigation
export interface NavLink {
  href: string;
  label: string;
}

// Stats
export interface Stat {
  value: string;
  label: string;
}

// Pain Points
export interface PainPoint {
  text: string;
  icon: LucideIcon;
}

export interface Solution {
  text: string;
  icon: LucideIcon;
}

// Tech Stack
export interface Technology {
  name: string;
  icon: string;
  category: string;
}

// Sparkle position for hero animations
export interface SparklePosition {
  left: number;
  top: number;
  duration: number;
  delay: number;
}
