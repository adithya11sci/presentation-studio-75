import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CharacterCard from "@/components/CharacterCard";
import { ArrowLeft, Sparkles, Wand2 } from "lucide-react";

const templates = [
  { id: "modern", name: "Modern Minimal" },
  { id: "corporate", name: "Corporate Professional" },
  { id: "creative", name: "Creative Bold" },
  { id: "educational", name: "Educational" },
  { id: "pitch", name: "Startup Pitch" },
  { id: "portfolio", name: "Portfolio Showcase" },
];

const voices = [
  { id: "alloy", name: "Alloy - Neutral" },
  { id: "echo", name: "Echo - Deep" },
  { id: "fable", name: "Fable - Warm" },
  { id: "onyx", name: "Onyx - Professional" },
  { id: "nova", name: "Nova - Friendly" },
  { id: "shimmer", name: "Shimmer - Soft" },
];

const characters = [
  { id: "alex", name: "Alex", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop&crop=face" },
  { id: "maya", name: "Maya", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=250&fit=crop&crop=face" },
  { id: "james", name: "James", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=250&fit=crop&crop=face" },
  { id: "sophia", name: "Sophia", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=250&fit=crop&crop=face" },
  { id: "david", name: "David", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=250&fit=crop&crop=face" },
  { id: "emma", name: "Emma", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=250&fit=crop&crop=face" },
  { id: "michael", name: "Michael", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=250&fit=crop&crop=face" },
  { id: "lisa", name: "Lisa", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=250&fit=crop&crop=face" },
];

const Generator = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [template, setTemplate] = useState("");
  const [voice, setVoice] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
      // Navigate to results or show toast
    }, 2000);
  };

  return (
    <main className="min-h-screen gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
        {/* Header */}
        <header className="flex items-center gap-4 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-xl"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-2">
              <Wand2 className="w-6 h-6 text-primary" />
              Create Your Presentation
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Describe your topic and customize your presentation
            </p>
          </div>
        </header>

        {/* Form */}
        <div className="space-y-8">
          {/* Prompt Input */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <label className="block text-sm font-semibold text-foreground mb-3">
              What's your presentation about?
            </label>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your topic or prompt... e.g., 'A presentation about renewable energy sources and their impact on climate change'"
              className="min-h-[140px] text-base resize-none rounded-2xl border-2 border-border bg-card/50 backdrop-blur-sm focus:border-primary focus:ring-0 transition-all duration-300 placeholder:text-muted-foreground/60"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Be specific for better results. Include key points you want covered.
            </p>
          </div>

          {/* Template & Voice Selection */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Choose Template
              </label>
              <Select value={template} onValueChange={setTemplate}>
                <SelectTrigger className="h-12 rounded-xl border-2 border-border bg-card/50 backdrop-blur-sm focus:border-primary transition-all duration-300">
                  <SelectValue placeholder="Select a template style" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-2 border-border bg-card shadow-lg">
                  {templates.map((t) => (
                    <SelectItem
                      key={t.id}
                      value={t.id}
                      className="rounded-lg cursor-pointer focus:bg-primary/10"
                    >
                      {t.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Choose Voice
              </label>
              <Select value={voice} onValueChange={setVoice}>
                <SelectTrigger className="h-12 rounded-xl border-2 border-border bg-card/50 backdrop-blur-sm focus:border-primary transition-all duration-300">
                  <SelectValue placeholder="Select a voice style" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-2 border-border bg-card shadow-lg">
                  {voices.map((v) => (
                    <SelectItem
                      key={v.id}
                      value={v.id}
                      className="rounded-lg cursor-pointer focus:bg-primary/10"
                    >
                      {v.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Character Selection */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Select AI Presenter
            </label>
            <p className="text-xs text-muted-foreground mb-4">
              Choose a character to present your slides
            </p>
            
            <div className="relative">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scroll-smooth -mx-4 px-4">
                {characters.map((character) => (
                  <CharacterCard
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    image={character.image}
                    isSelected={selectedCharacter === character.id}
                    onSelect={setSelectedCharacter}
                  />
                ))}
              </div>
              
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Generate Button */}
          <div className="pt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <Button
              variant="hero"
              size="xl"
              className="w-full"
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Presentation
                </>
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              Generation typically takes 30-60 seconds depending on complexity
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Generator;
