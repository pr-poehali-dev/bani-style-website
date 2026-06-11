
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Halls from "./pages/Halls";
import Submarine from "./pages/halls/Submarine";
import Castle from "./pages/halls/Castle";
import Cave from "./pages/halls/Cave";
import Airship from "./pages/halls/Airship";
import Ship from "./pages/halls/Ship";
import Grotto from "./pages/halls/Grotto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/halls" element={<Halls />} />
          <Route path="/halls/submarine" element={<Submarine />} />
          <Route path="/halls/castle" element={<Castle />} />
          <Route path="/halls/cave" element={<Cave />} />
          <Route path="/halls/airship" element={<Airship />} />
          <Route path="/halls/ship" element={<Ship />} />
          <Route path="/halls/grotto" element={<Grotto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;