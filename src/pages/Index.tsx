import { useState } from "react";
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // For demo purposes, you can toggle between login and dashboard
  // In production, this would be based on actual authentication state
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return <Dashboard onLogout={() => setIsLoggedIn(false)} />;
};

export default Index;
