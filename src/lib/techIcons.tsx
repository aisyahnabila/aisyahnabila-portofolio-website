import type { ComponentType } from "react";
import { SiLaravel, SiPhp, SiTailwindcss, SiJavascript, SiReact } from "react-icons/si";
import { Code2 } from "lucide-react";

export interface TechInfo {
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  description: string;
}

const TECH_MAP: Record<string, TechInfo> = {
  "Laravel": { icon: SiLaravel, color: "#FF2D20", description: "PHP web application framework" },
  "PHP": { icon: SiPhp, color: "#777BB4", description: "Server-side scripting language" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4", description: "Utility-first CSS framework" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E", description: "Client-side scripting language" },
  "React Native": { icon: SiReact, color: "#61DAFB", description: "Cross-platform mobile app framework" },
  "Blade": { icon: Code2, color: "currentColor", description: "Laravel's server-side templating engine" },
  "MVC": { icon: Code2, color: "currentColor", description: "Model-View-Controller architecture pattern" },
  "System Analysis": { icon: Code2, color: "currentColor", description: "Requirements gathering & process modeling" },
};

const DEFAULT_TECH: TechInfo = { icon: Code2, color: "currentColor", description: "" };

export function getTechInfo(name: string): TechInfo {
  return TECH_MAP[name] ?? DEFAULT_TECH;
}
