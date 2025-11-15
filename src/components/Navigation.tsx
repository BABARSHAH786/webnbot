import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Benefits", href: "#benefits" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923350458593?text=Hello! I'm interested in getting a website.", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container px-4 mx-auto">
       <div className="flex items-center justify-between h-16">
    {/* Logo */}
    <a href="/" className="flex items-center space-x-2">
        {/* Logo Image Added Here */}
        <img
            src={"logos.png"} // **<- REPLACE WITH ACTUAL PATH**
            alt="WebnBot Logo"
            className="h-8 w-auto" // Adjust sizing as needed
        />
        <span className="text-2xl font-bold text-blue-800 bg-clip-text text-transparent">
            WebnBot
        </span>
    </a>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
            <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
                {link.name}
            </a>
        ))}
        <Button variant="cta" size="sm" onClick={handleWhatsAppClick}>
            Get Started
        </Button>
    </div>

    {/* Mobile Menu Button */}
    <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
    >
        {isOpen ? (
            <X className="w-6 h-6" />
        ) : (
            <Menu className="w-6 h-6" />
        )}
    </button>
</div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="cta" 
              size="sm" 
              className="w-full"
              onClick={() => {
                handleWhatsAppClick();
                setIsOpen(false);
              }}
            >
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
