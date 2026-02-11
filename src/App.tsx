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
import CustomerServices from "./pages/CustomerServices"; // Import New Page
import ServiceAI from "./pages/ServiceAI"; // Import New Page
import { ModeToggle } from "@/components/mode-toggle";

const queryClient = new QueryClient();

const { lang } = useLanguage();
const t = translations[lang] || translations.en;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main Layout for both Staff and Customers */}
          <Route path="/dashboard" element={<Dashboard />}>
            
            {/* --- STAFF AREA --- */}
            <Route index element={<DashboardOverview />} />
            <Route path="staff/water" element={<WaterDashboard />} />
            <Route path="staff/electricity" element={<ElectricityDashboard />} />
            <Route path="staff/construction" element={<ConstructionDashboard />} />
            <Route path="staff/chat" element={<ChatHub />} />

            {/* --- CUSTOMER AREA --- */}
            <Route path="customer" element={<CustomerServices />} />
            <Route path="customer/chat/:service" element={<ServiceAI />} />

          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Floating Dark Mode Button */}
        <div className="fixed bottom-4 right-4 z-50">
          <ModeToggle />
        </div>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
