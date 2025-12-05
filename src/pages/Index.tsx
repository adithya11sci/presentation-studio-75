import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import { Sparkles, LayoutTemplate, Users, FileText, Zap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: LayoutTemplate, value: "50+", label: "Premium Templates" },
    { icon: Users, value: "24", label: "AI Characters" },
    { icon: FileText, value: "10K+", label: "Presentations Made" },
    { icon: Zap, value: "5M+", label: "Happy Users" },
  ];

  return (
    <main className="min-h-screen gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SlideAI</span>
          </div>
          
          <Button variant="glass" size="sm">
            Sign In
          </Button>
        </nav>

        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Presentation Generator</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            Create Stunning{" "}
            <span className="gradient-text">Presentations</span>
            <br />
            Instantly
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            Transform your ideas into beautiful, professional presentations in seconds. 
            Just describe what you need, and let AI do the magic.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <Button
              variant="hero"
              size="xl"
              onClick={() => navigate("/generator")}
              className="w-full sm:w-auto"
            >
              <Sparkles className="w-5 h-5" />
              Generate PPT
            </Button>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Watch Demo
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Trusted by Creators Worldwide
            </h2>
            <p className="text-muted-foreground">
              Join millions who create presentations effortlessly
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                delay={700 + index * 100}
              />
            ))}
          </div>
        </section>

        {/* Features Preview */}
        <section className="mt-24 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: "1100ms" }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-border/50 shadow-elegant">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full gradient-bg border-2 border-background"
                  style={{ filter: `hue-rotate(${i * 60}deg)` }}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">2,847</span> presentations created today
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
