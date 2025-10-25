import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Awareness from "./pages/Awareness";
import Enroll from "./pages/Enroll";
import Media from "./pages/Media";
import Statistics from "./pages/Statistics";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Compatibility from "./pages/Compatibility";
import Locations from "./pages/Locations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/media" element={<Media />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
