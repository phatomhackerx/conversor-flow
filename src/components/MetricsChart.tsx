import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "3 de jul", conversations: 0 },
  { day: "6 de jul", conversations: 5 },
  { day: "9 de jul", conversations: 8 },
  { day: "12 de jul", conversations: 12 },
  { day: "15 de jul", conversations: 18 },
  { day: "18 de jul", conversations: 15 },
  { day: "21 de jul", conversations: 22 },
  { day: "24 de jul", conversations: 28 },
  { day: "27 de jul", conversations: 35 },
  { day: "30 de jul", conversations: 42 },
];

const MetricsChart = () => {
  return (
    <div className="glass rounded-xl p-6 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            Conversas - Período
          </h3>
          <p className="text-sm text-muted-foreground">
            Mostrando o total dos últimos 30 dias
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Total</p>
          <p className="text-3xl font-bold text-foreground">42</p>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="day" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--foreground))",
              }}
              labelStyle={{ color: "hsl(var(--muted-foreground))" }}
            />
            <Line 
              type="monotone" 
              dataKey="conversations" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ 
                fill: "hsl(var(--primary))", 
                strokeWidth: 2, 
                r: 4,
                stroke: "hsl(var(--card))"
              }}
              activeDot={{ 
                r: 6, 
                fill: "hsl(var(--primary))",
                stroke: "hsl(var(--card))",
                strokeWidth: 2
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MetricsChart;