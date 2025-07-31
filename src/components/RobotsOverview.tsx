import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  MessageSquare, 
  Send, 
  Zap, 
  Users, 
  TrendingUp, 
  Clock,
  CheckCircle2,
  AlertCircle,
  Play,
  Pause
} from "lucide-react";

interface Robot {
  id: string;
  name: string;
  channel: "whatsapp" | "telegram";
  status: "active" | "inactive" | "paused";
  conversations: number;
  responseRate: number;
  lastActivity: string;
  triggers: string[];
}

const mockRobots: Robot[] = [
  {
    id: "1",
    name: "Atendimento Vendas",
    channel: "whatsapp",
    status: "active",
    conversations: 127,
    responseRate: 94,
    lastActivity: "2 min atrás",
    triggers: ["oi", "olá", "vendas"]
  },
  {
    id: "2", 
    name: "Suporte Técnico",
    channel: "telegram",
    status: "active",
    conversations: 89,
    responseRate: 87,
    lastActivity: "5 min atrás",
    triggers: ["suporte", "ajuda", "problema"]
  },
  {
    id: "3",
    name: "Marketing Bot",
    channel: "whatsapp", 
    status: "paused",
    conversations: 43,
    responseRate: 76,
    lastActivity: "1h atrás",
    triggers: ["promoção", "desconto"]
  }
];

interface RobotsOverviewProps {
  onCreateRobot: () => void;
}

const RobotsOverview = ({ onCreateRobot }: RobotsOverviewProps) => {
  const [robots] = useState<Robot[]>(mockRobots);

  const getStatusIcon = (status: Robot["status"]) => {
    switch (status) {
      case "active":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "paused":
        return <Pause className="h-4 w-4 text-yellow-500" />;
      case "inactive":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusBadge = (status: Robot["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Ativo</Badge>;
      case "paused":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Pausado</Badge>;
      case "inactive":
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Inativo</Badge>;
    }
  };

  const getChannelIcon = (channel: Robot["channel"]) => {
    return channel === "whatsapp" 
      ? <MessageSquare className="h-4 w-4 text-green-500" />
      : <Send className="h-4 w-4 text-blue-500" />;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Robôs</h2>
          <p className="text-muted-foreground">
            Gerencie seus bots de automação e acompanhe o desempenho
          </p>
        </div>
        <Button 
          onClick={onCreateRobot}
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          <Bot className="mr-2 h-4 w-4" />
          Criar Robô
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Robôs</p>
                <p className="text-2xl font-bold text-foreground">{robots.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Robôs Ativos</p>
                <p className="text-2xl font-bold text-foreground">
                  {robots.filter(r => r.status === "active").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/20 rounded-lg">
                <MessageSquare className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Conversas Hoje</p>
                <p className="text-2xl font-bold text-foreground">
                  {robots.reduce((sum, robot) => sum + robot.conversations, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Taxa Média</p>
                <p className="text-2xl font-bold text-foreground">
                  {Math.round(robots.reduce((sum, robot) => sum + robot.responseRate, 0) / robots.length)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Robots List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {robots.map((robot) => (
          <Card 
            key={robot.id} 
            className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {getChannelIcon(robot.channel)}
                  <div>
                    <CardTitle className="text-foreground text-lg">{robot.name}</CardTitle>
                    <CardDescription className="text-muted-foreground capitalize">
                      {robot.channel}
                    </CardDescription>
                  </div>
                </div>
                {getStatusBadge(robot.status)}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-3 w-3" />
                    Conversas
                  </div>
                  <p className="text-xl font-semibold text-foreground">{robot.conversations}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Zap className="h-3 w-3" />
                    Taxa de Resposta
                  </div>
                  <p className="text-xl font-semibold text-foreground">{robot.responseRate}%</p>
                </div>
              </div>

              {/* Triggers */}
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Gatilhos:</p>
                <div className="flex flex-wrap gap-1">
                  {robot.triggers.map((trigger, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs border-border text-muted-foreground"
                    >
                      {trigger}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Last Activity */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border">
                <Clock className="h-3 w-3" />
                Última atividade: {robot.lastActivity}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button 
                  size="sm" 
                  className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30"
                >
                  <Play className="h-3 w-3 mr-1" />
                  Configurar
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-border hover:bg-muted"
                >
                  Estatísticas
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RobotsOverview;