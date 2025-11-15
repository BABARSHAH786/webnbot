const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            {/* Logo/Brand */}
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              WebnBot
            </div>

            {/* Tagline */}
            <p className="text-muted-foreground font-medium">
              Professional Websites. Budget-Friendly Prices.
            </p>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {currentYear} WebnBot. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex items-center justify-center gap-6 text-sm">
              <a href="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                About
              </a>
              <a href="/buy-website" className="text-muted-foreground hover:text-primary transition-smooth">
                Pricing
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-smooth">
                FAQ
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
