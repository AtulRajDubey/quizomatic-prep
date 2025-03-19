
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuestionsPage from "./pages/QuestionsPage";
import TopicPage from "./pages/TopicPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { ProgressProvider } from "./contexts/ProgressContext";
import BookmarksPage from "./pages/BookmarksPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ProgressProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/topics/:topicId" element={<Layout><TopicPage /></Layout>} />
            <Route path="/questions/:categoryId" element={<Layout><QuestionsPage /></Layout>} />
            <Route path="/bookmarks" element={<Layout><BookmarksPage /></Layout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProgressProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
