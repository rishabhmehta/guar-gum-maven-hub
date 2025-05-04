
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-guar-700 font-bold text-2xl">Shree Ram</span>
            <span className="text-guar-500 font-bold text-2xl ml-1">India Gums</span>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-guar-700"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-guar-700 hover:text-guar-500 font-medium">Home</a>
          <a href="#about" className="text-guar-700 hover:text-guar-500 font-medium">About</a>
          <a href="#products" className="text-guar-700 hover:text-guar-500 font-medium">Products</a>
          <a href="#applications" className="text-guar-700 hover:text-guar-500 font-medium">Applications</a>
          <a href="#contact" className="text-guar-700 hover:text-guar-500 font-medium">Contact</a>
          <Button className="bg-guar-600 hover:bg-guar-700 text-white">Enquire Now</Button>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="/" className="text-guar-700 hover:text-guar-500 font-medium">Home</a>
            <a href="#about" className="text-guar-700 hover:text-guar-500 font-medium">About</a>
            <a href="#products" className="text-guar-700 hover:text-guar-500 font-medium">Products</a>
            <a href="#applications" className="text-guar-700 hover:text-guar-500 font-medium">Applications</a>
            <a href="#contact" className="text-guar-700 hover:text-guar-500 font-medium">Contact</a>
            <Button className="bg-guar-600 hover:bg-guar-700 text-white w-full">Enquire Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
