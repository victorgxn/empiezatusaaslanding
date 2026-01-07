import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Sword } from "lucide-react";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-linear-to-br from-primary to-gold flex items-center justify-center">
          <Sword className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold">
          Empieza<span className="text-primary">Tu</span>SaaS
        </span>
      </div>
    ),
  },
  links: [
    {
      text: "Inicio",
      url: "/",
    },
  ],
};
