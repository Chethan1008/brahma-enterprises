import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GasPage from "./pages/GasPage";
import MobilePage from "./pages/MobilePage";
import TvPage from "./pages/TvPage";
import PhotoPage from "./pages/PhotoPage";
import SBIPage from "./pages/SBIPage" ;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Custom service pages */}
          <Route path="/services/gas" element={<GasPage />} />
          <Route path="/services/mobile" element={<MobilePage />} />
          <Route path="/services/tv" element={<TvPage />} />
          <Route path="/services/photo" element={<PhotoPage />} />
          <Route path="/services/sbi" element={<SBIPage />} />


          {/* Fallback route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
