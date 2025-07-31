import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Chrome } from "lucide-react";

interface LoginProps {
  onLogin?: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen floating-lines flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="glass rounded-xl p-8 shadow-2xl animate-scale-in">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Boas-vindas ao Converza!
            </h1>
            <p className="text-muted-foreground">
              Ainda não tem uma conta?{" "}
              <a href="#" className="text-primary hover:underline">
                Cadastre-se agora.
              </a>
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="nikola@tesla.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-card/50 border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
              disabled={!email}
              onClick={onLogin}
            >
              Continuar →
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">ou</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full glass border-border hover:bg-card/20 text-foreground py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Chrome className="mr-2 h-4 w-4" />
              Continuar com Google
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Ao prosseguir você concorda com a nossa{" "}
            <a href="#" className="text-primary hover:underline">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;