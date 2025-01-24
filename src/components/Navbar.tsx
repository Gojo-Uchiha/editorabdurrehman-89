import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary">VideoPortfolio</Link>
          <div className="flex gap-8">
            <Link to="/" className="text-foreground/90 hover:text-primary transition-colors">Home</Link>
            <Link to="/gallery" className="text-foreground/90 hover:text-primary transition-colors">Gallery</Link>
            <Link to="/contact" className="text-foreground/90 hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};