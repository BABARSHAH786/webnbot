import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Shield, BarChart, Globe2, Link2, MessageCircle } from "lucide-react";

const CustomBotDevelopment = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced NLP & AI",
      description: "Custom-trained natural language models for your specific use case and industry terminology."
    },
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "Platform Integrations",
      description: "Seamless connections to CRM, payment gateways, booking systems, databases, and third-party APIs."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Real-time dashboards, conversation analytics, user behavior tracking, and ROI metrics."
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Multilingual Support",
      description: "Serve global audiences with automatic translation and culturally-aware responses."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "End-to-end encryption, GDPR compliance, and secure data handling protocols."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Automation",
      description: "Workflow automation, intelligent routing, escalation rules, and integration with your business logic."
    }
  ];

  const caseStudy = {
    client: "E-Commerce Brand",
    challenge: "Manual customer support overwhelmed team, high cart abandonment",
    solution: "Custom AI shopping assistant with product recommendations and checkout support",
    results: [
      "70% reduction in support tickets",
      "35% increase in conversion rate",
      "24/7 availability with zero downtime",
      "ROI achieved in 2 months"
    ]
  };

  return (
    <section id="custom-bot" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">Custom Development</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Bespoke Bot <span className="bg-gradient-accent bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Need something unique? We build custom chatbots tailored to your exact requirements, 
              integrations, and business workflows.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-smooth shadow-card hover:shadow-elegant">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center text-accent-foreground mb-3 shadow-glow">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Case Study */}
          <Card className="border-2 border-accent/30 bg-gradient-subtle shadow-elegant">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="default" className="bg-accent">Success Story</Badge>
                <span className="text-sm font-semibold text-muted-foreground">{caseStudy.client}</span>
              </div>
              <CardTitle className="text-2xl">Custom AI Shopping Assistant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase mb-2">Challenge</h4>
                <p className="text-foreground">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase mb-2">Solution</h4>
                <p className="text-foreground">{caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase mb-3">Results</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <p className="text-sm font-medium text-foreground">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center space-y-6 p-8 rounded-2xl bg-gradient-primary text-primary-foreground">
            <h3 className="text-3xl font-bold">Ready to Build Your Custom Bot?</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that perfectly fits your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-black hover:bg-white/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageCircle className="w-5 h-5" />
                Schedule Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBotDevelopment;
