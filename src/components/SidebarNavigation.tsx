import { useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  BarChart3, 
  Bot, 
  Puzzle, 
  Settings, 
  HelpCircle,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: BarChart3, label: "Métricas", path: "/metrics" },
  { icon: Bot, label: "Robôs", path: "/robots" },
  { icon: Puzzle, label: "Integrações", path: "/integrations" },
  { icon: Settings, label: "Configurações", path: "/settings" },
  { icon: HelpCircle, label: "Suporte", path: "/support" },
];

interface SidebarNavigationProps {
  className?: string;
}

const SidebarNavigation = ({ className }: SidebarNavigationProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-card border-r border-border transition-all duration-300 z-40",
      "md:translate-x-0",
      collapsed ? "w-16 -translate-x-full md:translate-x-0" : "w-64",
      className
    )}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {!collapsed && (
              <h2 className="text-lg font-bold text-foreground">BlackConverza</h2>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
              className="hover:bg-muted p-2"
            >
              {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className={cn(
                      "flex items-center p-3 rounded-lg transition-all duration-300 group hover:scale-105",
                      isActive 
                        ? "bg-primary/20 text-primary border border-primary/30" 
                        : "hover:bg-muted text-muted-foreground hover:text-foreground",
                      collapsed ? "justify-center" : "gap-3"
                    )}
                    title={collapsed ? item.label : ""}
                  >
                    <Icon className={cn(
                      "h-5 w-5 transition-colors",
                      isActive ? "text-primary" : ""
                    )} />
                    {!collapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                    
                    {isActive && (
                      <div className="absolute left-0 w-1 h-8 bg-primary rounded-r-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          {!collapsed && (
            <div className="text-xs text-muted-foreground text-center">
              BlackConverza v2.0
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;