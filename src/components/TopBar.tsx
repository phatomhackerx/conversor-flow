import { Button } from "@/components/ui/button";
import { Plus, Zap, HelpCircle } from "lucide-react";

interface TopBarProps {
  onNewRobot: () => void;
}

const TopBar = ({ onNewRobot }: TopBarProps) => {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-card/80 backdrop-blur-sm border-b border-border z-30">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={onNewRobot}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Plus className="mr-2 h-4 w-4" />
            Novo Robô
          </Button>

          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Zap className="mr-2 h-4 w-4" />
            Upgrade
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-muted p-2 rounded-lg transition-all duration-300 hover:scale-105"
            title="Ajuda"
          >
            <HelpCircle className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;