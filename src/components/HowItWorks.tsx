import { Card, CardContent } from "@/components/ui/card";
import { Search, Settings, TrendingUp, Lightbulb, Pencil, Code, Rocket, HeadphonesIcon } from "lucide-react";

const HowItWorks = () => {
  const botSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Choose Bot",
      description: "Browse our marketplace and find the perfect pre-built bot for your industry and needs."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Customize & Deploy",
      description: "Configure settings, integrate with your platforms, and deploy in minutes."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Convert & Scale",
      description: "Watch your engagement soar as your bot handles inquiries 24/7."
    }
  ];

  const websiteSteps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Discovery",
      description: "We understand your business goals, target audience, and project requirements."
    },
    {
      icon: <Pencil className="w-8 h-8" />,
      title: "Design",
      description: "Create stunning mockups and prototypes that align with your brand identity."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Build your responsive, SEO-optimized website with clean, performant code."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch",
      description: "Deploy your site with full testing, analytics setup, and documentation."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Support",
      description: "Ongoing maintenance, updates, and technical support to keep you running smoothly."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              How It <span className="bg-gradient-accent bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, streamlined processes for bots and websites
            </p>
          </div>

          {/* Bot Process */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-primary">Ready-Made Bots</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {botSteps.map((step, index) => (
                <Card key={index} className="relative border-2 hover:border-primary transition-smooth shadow-card hover:shadow-elegant">
                  <CardContent className="pt-12 pb-8 text-center space-y-4">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground shadow-glow">
                      {step.icon}
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <h4 className="text-xl font-bold text-foreground pt-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Website Process */}
          <div className="space-y-8 pt-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-primary">Complete Website Projects</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {websiteSteps.map((step, index) => (
                <Card key={index} className="relative border-2 hover:border-accent transition-smooth shadow-card hover:shadow-elegant">
                  <CardContent className="pt-12 pb-6 text-center space-y-3">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow">
                      {step.icon}
                    </div>
                    <h4 className="text-lg font-bold text-foreground pt-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
