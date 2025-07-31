import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Bot, MessageSquare, Send } from "lucide-react";

interface CreateRobotModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateRobotModal = ({ open, onOpenChange }: CreateRobotModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    channel: "",
    trigger: "",
    active: true
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    onOpenChange(false);
    setFormData({ name: "", channel: "", trigger: "", active: true });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <Bot className="h-5 w-5 text-primary" />
            Criar Novo Robô
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Nome do Robô</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Atendimento Vendas"
              className="bg-card/50 border-border text-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="channel" className="text-foreground">Canal</Label>
            <Select 
              value={formData.channel} 
              onValueChange={(value) => setFormData({ ...formData, channel: value })}
            >
              <SelectTrigger className="bg-card/50 border-border text-foreground">
                <SelectValue placeholder="Selecione um canal" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="whatsapp">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-green-500" />
                    WhatsApp
                  </div>
                </SelectItem>
                <SelectItem value="telegram">
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4 text-blue-500" />
                    Telegram
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="trigger" className="text-foreground">Gatilho de Ativação</Label>
            <Input
              id="trigger"
              value={formData.trigger}
              onChange={(e) => setFormData({ ...formData, trigger: e.target.value })}
              placeholder="Ex: oi, olá, menu"
              className="bg-card/50 border-border text-foreground"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-foreground">Status</Label>
              <p className="text-xs text-muted-foreground">
                Robô {formData.active ? "ativo" : "inativo"}
              </p>
            </div>
            <Switch 
              checked={formData.active}
              onCheckedChange={(checked) => setFormData({ ...formData, active: checked })}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 border-border text-foreground hover:bg-muted"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={loading || !formData.name || !formData.channel || !formData.trigger}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  Criando...
                </div>
              ) : (
                "Salvar Robô"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRobotModal;