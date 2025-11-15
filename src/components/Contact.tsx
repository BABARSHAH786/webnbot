import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, Globe } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = "Hello 👋 I'm interested in creating a website with Techkl.de!";
    window.open(`https://wa.me/92XXXXXXXXXX?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@techkl.de?subject=Website Inquiry";
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Build Something{" "}
              <span className="gradient-accent bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to take your business online? Get in touch today!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-card border-primary/20 text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:info@techkl.de" 
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  info@techkl.de
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-card border-accent/20 text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-muted-foreground">
                  +92-XXX-XXXXXXX
                </span>
              </CardContent>
            </Card>

            <Card className="shadow-card border-primary/20 text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Website</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-muted-foreground">
                  Techkl.de
                </span>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <p className="text-2xl font-bold">
              Start Your Website Today — Starting from just $50!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleEmailClick}
              >
                <Mail className="w-5 h-5" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
