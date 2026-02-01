import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  withGlow?: boolean;
}

export function Logo({ className, size = "md", withGlow = true }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <div className={cn("relative flex items-center justify-center", sizeClasses[size], className)}>
      {/* Background Glow */}
      {withGlow && (
        <>
          <div className="absolute inset-0 bg-brand-red/20 blur-xl rounded-full animate-pulse" />
          <div className="absolute inset-0 bg-brand-gold/10 blur-2xl rounded-full" />
        </>
      )}

      {/* Logo Container */}
      <div className="relative w-full h-full p-1.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ae5ea830-5c58-4a69-8ebb-f52d6b9b742b/Asset-3-2x-1769964847211.png?width=200&height=200&resize=contain"
          alt="SOMA Lubrifiants"
          className="w-full h-full object-contain filter drop-shadow-sm"
        />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>

      {/* Outer Ring */}
      <div className="absolute -inset-1 border border-white/5 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
