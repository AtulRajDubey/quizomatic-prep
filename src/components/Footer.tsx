
import { Link } from "react-router-dom";
import { ClipboardCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <ClipboardCheck className="h-6 w-6 text-brand-600" />
              <span className="ml-2 text-lg font-bold text-gray-900">TestPrep</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Prepare for your automation testing interviews with our comprehensive question bank.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Topics</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/topics/selenium" className="text-sm text-gray-600 hover:text-brand-600">
                  Selenium
                </Link>
              </li>
              <li>
                <Link to="/topics/api-testing" className="text-sm text-gray-600 hover:text-brand-600">
                  API Testing
                </Link>
              </li>
              <li>
                <Link to="/topics/performance-testing" className="text-sm text-gray-600 hover:text-brand-600">
                  Performance Testing
                </Link>
              </li>
              <li>
                <Link to="/topics/mobile-testing" className="text-sm text-gray-600 hover:text-brand-600">
                  Mobile Automation
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/questions/all" className="text-sm text-gray-600 hover:text-brand-600">
                  All Questions
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-brand-600">
                  Study Guides
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-brand-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-brand-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-brand-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} TestPrep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
