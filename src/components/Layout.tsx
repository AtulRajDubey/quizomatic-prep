
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchSidebar from "./SearchSidebar";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-grow flex">
        <main className="flex-grow container mx-auto px-4 py-8 relative">
          {children}
          
          <Button 
            variant="outline" 
            size="icon" 
            className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg bg-white z-10 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Mobile sidebar */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
              <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-4 top-4"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
                <div className="p-6 pt-12">
                  <SearchSidebar onClose={() => setSidebarOpen(false)} />
                </div>
              </div>
            </div>
          )}
        </main>
        
        {/* Desktop sidebar */}
        <div className="hidden md:block w-80 border-l bg-white p-6">
          <SearchSidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
