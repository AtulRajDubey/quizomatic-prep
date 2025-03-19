
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  ClipboardCheck, 
  Book, 
  Menu, 
  X,
  BookmarkIcon
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useProgress } from "@/contexts/ProgressContext";

const Navbar = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { bookmarkedQuestions } = useProgress();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogIn = () => {
    toast({
      title: "Coming Soon",
      description: "Login functionality will be available in the next update!",
    });
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <ClipboardCheck className="h-8 w-8 text-brand-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TestPrep</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">
              Home
            </Link>
            <Link to="/topics/all" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">
              Topics
            </Link>
            <Link to="/questions/all" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">
              Questions
            </Link>
            <Link to="/bookmarks" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 flex items-center">
              <BookmarkIcon className="h-4 w-4 mr-1" />
              Bookmarks
              {bookmarkedQuestions.length > 0 && (
                <span className="ml-1 bg-brand-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {bookmarkedQuestions.length}
                </span>
              )}
            </Link>
            <Button variant="ghost" className="ml-4" onClick={handleLogIn}>
              Log In
            </Button>
            <Button className="bg-brand-600 hover:bg-brand-700" onClick={handleLogIn}>
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-50 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/topics/all" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Topics
          </Link>
          <Link 
            to="/questions/all" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Questions
          </Link>
          <Link 
            to="/bookmarks" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <BookmarkIcon className="h-4 w-4 mr-2" />
            Bookmarks
            {bookmarkedQuestions.length > 0 && (
              <span className="ml-1 bg-brand-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {bookmarkedQuestions.length}
              </span>
            )}
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button variant="outline" className="w-full mb-2" onClick={handleLogIn}>
                Log In
              </Button>
            </div>
            <div className="flex items-center px-5">
              <Button className="w-full bg-brand-600 hover:bg-brand-700" onClick={handleLogIn}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
