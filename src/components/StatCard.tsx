import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ icon: Icon, value, label, delay = 0 }: StatCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card p-6 shadow-elegant transition-all duration-500 hover:shadow-lg hover:-translate-y-1",
        "opacity-0 animate-fade-in-up"
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-hero" />
      
      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        
        <p className="text-3xl font-bold tracking-tight text-foreground mb-1">
          {value}
        </p>
        
        <p className="text-sm font-medium text-muted-foreground">
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
