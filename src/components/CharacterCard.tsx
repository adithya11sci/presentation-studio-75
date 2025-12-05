import { cn } from "@/lib/utils";

interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const CharacterCard = ({ id, name, image, isSelected, onSelect }: CharacterCardProps) => {
  return (
    <button
      onClick={() => onSelect(id)}
      className={cn(
        "relative flex-shrink-0 w-28 h-36 rounded-2xl overflow-hidden transition-all duration-300",
        "bg-card border-2 hover:-translate-y-1",
        isSelected
          ? "border-primary shadow-glow scale-105"
          : "border-transparent shadow-elegant hover:shadow-lg hover:border-primary/30"
      )}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      
      {/* Name */}
      <div className="absolute bottom-0 left-0 right-0 p-2">
        <p className="text-xs font-semibold text-primary-foreground text-center truncate">
          {name}
        </p>
      </div>
      
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center animate-scale-in">
          <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default CharacterCard;
