import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import DashboardOverview from "./pages/DashboardOverview";
import WaterDashboard from "./pages/WaterDashboard";
import ElectricityDashboard from "./pages/ElectricityDashboard";
import ConstructionDashboard from "./pages/ConstructionDashboard";
import ChatHub from "./pages/ChatHub";
import { ModeToggle } from "@/components/mode-toggle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardOverview />} />
            <Route path="water" element={<WaterDashboard />} />
            <Route path="electricity" element={<ElectricityDashboard />} />
            <Route path="construction" element={<ConstructionDashboard />} />
            <Route path="chat" element={<ChatHub />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
