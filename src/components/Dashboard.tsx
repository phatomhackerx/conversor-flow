import { useState } from "react";
import SidebarNavigation from "./SidebarNavigation";
import TopBar from "./TopBar";
import MetricsChart from "./MetricsChart";
import CreateRobotModal from "./CreateRobotModal";
import RobotsOverview from "./RobotsOverview";
import MetricsPage from "./MetricsPage";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface DashboardProps {
  onLogout?: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "robots":
        return <RobotsOverview onCreateRobot={() => setShowCreateModal(true)} />;
      case "metrics":
        return <MetricsPage />;
      case "dashboard":
      default:
        return (
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-2">Métricas</h2>
              <p className="text-muted-foreground">
                Acompanhe o desempenho dos seus robôs e conversas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Chart */}
              <div className="lg:col-span-2">
                <MetricsChart />
              </div>

              {/* Stats Cards */}
              <div className="space-y-4">
                <div className="glass rounded-xl p-6 animate-slide-up hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">Robôs Ativos</h4>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-3xl font-bold text-foreground">3</p>
                  <p className="text-sm text-muted-foreground mt-1">+2 este mês</p>
                </div>

                <div className="glass rounded-xl p-6 animate-slide-up hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">Taxa de Resposta</h4>
                    <div className="w-3 h-3 bg-primary rounded-full animate-glow"></div>
                  </div>
                  <p className="text-3xl font-bold text-foreground">89%</p>
                  <p className="text-sm text-green-400 mt-1">+5% vs mês anterior</p>
                </div>

                <div className="glass rounded-xl p-6 animate-slide-up hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">Novos Leads</h4>
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-3xl font-bold text-foreground">127</p>
                  <p className="text-sm text-accent mt-1">+23 hoje</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-xl p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Ações Rápidas</h3>
                {onLogout && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onLogout}
                    className="border-border text-muted-foreground hover:text-foreground"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair (Demo)
                  </Button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => setCurrentPage("robots")}
                  className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105 text-left"
                >
                  <h4 className="font-medium text-foreground mb-2">Gerenciar Robôs</h4>
                  <p className="text-sm text-muted-foreground">Configure e monitore seus bots</p>
                </button>
                <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105 text-left">
                  <h4 className="font-medium text-foreground mb-2">Ver Relatórios</h4>
                  <p className="text-sm text-muted-foreground">Análise detalhada de performance</p>
                </button>
                <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105 text-left">
                  <h4 className="font-medium text-foreground mb-2">Configurar API</h4>
                  <p className="text-sm text-muted-foreground">Integre com seus sistemas</p>
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background floating-lines">
      <SidebarNavigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <TopBar onNewRobot={() => setShowCreateModal(true)} />
      
      <main className="ml-0 md:ml-64 pt-16 p-6">
        {renderPage()}
      </main>

      <CreateRobotModal 
        open={showCreateModal} 
        onOpenChange={setShowCreateModal} 
      />
    </div>
  );
};

export default Dashboard;