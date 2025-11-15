import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Globe, Sparkles } from "lucide-react";
import heroBackground from "@/assets/bot-hero-bg.jpg";

const Hero = () => {
  const handleContactClick = () => {
    const section = document.getElementById('contact');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-glow rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm shadow-card border border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-primary">Digital Agency & Bot Marketplace</span>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-fade-in">
            Find the perfect bot for your business{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              — or let us build your complete website
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Explore ready-made chatbots, order custom AI solutions, or get a fully responsive, 
            SEO-friendly website with polished UI. Book a demo or contact us today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
            >
              <Bot className="w-5 h-5" />
              Browse Bots
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('custom-bot')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Build Custom Bot
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('website-services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Globe className="w-5 h-5" />
              Get a Website
            </Button>
          </div>

          {/* Trust Indicators
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-white/80 text-sm font-medium animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="text-accent text-2xl">⚡</span>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent text-2xl">🔒</span>
              <span>Secure & Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent text-2xl">💎</span>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent text-2xl">🌐</span>
              <span>SEO Optimized</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
