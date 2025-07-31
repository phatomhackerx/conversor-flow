import MetricsChart from "./MetricsChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Target,
  Calendar,
  Clock,
  Zap,
  BarChart3
} from "lucide-react";

const MetricsPage = () => {
  const metrics = [
    {
      title: "Conversas Totais",
      value: "1,247",
      change: "+12%",
      changeType: "positive" as const,
      icon: MessageSquare,
      description: "vs mês anterior"
    },
    {
      title: "Taxa de Resposta",
      value: "89%",
      change: "+5%",
      changeType: "positive" as const,
      icon: Zap,
      description: "média dos robôs"
    },
    {
      title: "Leads Gerados",
      value: "387",
      change: "+23%",
      changeType: "positive" as const,
      icon: Target,
      description: "este mês"
    },
    {
      title: "Tempo Médio",
      value: "2.3min",
      change: "-15s",
      changeType: "positive" as const,
      icon: Clock,
      description: "por conversa"
    }
  ];

  const channelStats = [
    {
      channel: "WhatsApp",
      conversations: 945,
      percentage: 76,
      color: "bg-green-500"
    },
    {
      channel: "Telegram", 
      conversations: 302,
      percentage: 24,
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Métricas Avançadas</h2>
          <p className="text-muted-foreground">
            Análise detalhada do desempenho dos seus robôs e conversas
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          Últimos 30 dias
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card 
              key={metric.title}
              className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className={`text-sm font-medium ${
                    metric.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {metric.value}
                  </h3>
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MetricsChart />
        </div>

        {/* Channel Distribution */}
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <BarChart3 className="h-5 w-5 text-primary" />
              Distribuição por Canal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {channelStats.map((stat) => (
              <div key={stat.channel} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground font-medium">{stat.channel}</span>
                  <span className="text-muted-foreground">{stat.conversations} conversas</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`${stat.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.percentage}% do total
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Horários de Pico</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">09:00 - 12:00</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/4" />
                  </div>
                  <span className="text-sm text-foreground">234 msgs</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">14:00 - 17:00</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-4/5" />
                  </div>
                  <span className="text-sm text-foreground">267 msgs</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">19:00 - 22:00</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-1/2" />
                  </div>
                  <span className="text-sm text-foreground">156 msgs</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Top Gatilhos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {["oi", "olá", "ajuda", "preço", "suporte"].map((trigger, index) => (
                <div key={trigger} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">"{trigger}"</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-muted rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full" 
                        style={{ width: `${100 - index * 15}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {(150 - index * 20)} vezes
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MetricsPage;