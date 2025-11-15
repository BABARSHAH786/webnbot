import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, ShoppingCart, Briefcase, Rocket } from "lucide-react";

const WebsiteServices = () => {
  const packages = [
    {
      title: "Landing Page",
      price: "$45",
      icon: <Rocket className="w-6 h-6" />,
      description: "Perfect for product launches and lead generation",
      features: [
        "Single page design",
        "Responsive & mobile-first",
        "Contact form integration",
        "Basic SEO setup",
        "Fast loading (< 3s)",
        "1 round of revisions"
      ]
    },
    {
      title: "Business Website",
      price: "$70",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Complete online presence for your business",
      features: [
        "5-8 page website",
        "Custom design & branding",
        "CMS integration (WordPress/Headless)",
        "Contact & inquiry forms",
        "Blog setup",
        "On-page SEO",
        "Google Analytics",
        "2 rounds of revisions"
      ],
      popular: true
    },
    {
      title: "E-Commerce Store",
      price: "$90",
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Full-featured online store to sell your products",
      features: [
        "Product catalog (up to 50 items)",
        "Shopping cart & checkout",
        "Payment gateway integration",
        "Order management",
        "Customer accounts",
        "Inventory tracking",
        "Email notifications",
        "SEO & performance optimization",
        "3 rounds of revisions"
      ]
    },
    {
      title: "Enterprise Solution",
      price: "Custom",
      icon: <Globe className="w-6 h-6" />,
      description: "Scalable solutions for large organizations",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Multi-language support",
        "Advanced security",
        "Performance optimization",
        "Ongoing maintenance",
        "Dedicated support",
        "Unlimited revisions"
      ]
    }
  ];

  const deliverables = [
    "Design mockups & prototypes",
    "Responsive HTML/CSS/JS code",
    "CMS setup & training",
    "SEO baseline implementation",
    "Analytics & tracking setup",
    "Chatbot integration (optional)",
    "Payment & booking systems",
    "Documentation & handover",
    "Post-launch support"
  ];

  const technologies = [
    { name: "WordPress", color: "bg-blue-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Next.js", color: "bg-slate-700" },
    { name: "Wix", color: "bg-purple-500" },
    { name: "Shopify", color: "bg-green-600" },
    { name: "Custom HTML", color: "bg-orange-500" }
  ];

  return (
    <section id="website-services" className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">Website Development</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Complete Website <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fully responsive, SEO-optimized, fast-loading websites with polished UI/UX. 
              Built with modern technologies and best practices.
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, idx) => (
              <Badge key={idx} variant="outline" className="px-4 py-2 text-sm font-semibold">
                {tech.name}
              </Badge>
            ))}
          </div>

          {/* Packages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative transition-smooth hover:shadow-elegant border-2 flex flex-col ${pkg.popular ? 'border-accent shadow-elegant' : 'hover:border-primary'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-accent text-accent-foreground text-xs font-bold rounded-full shadow-glow">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground mb-3 shadow-card">
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-sm min-h-[40px]">{pkg.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    {pkg.price !== "Custom" && <span className="text-sm text-muted-foreground">/project</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={pkg.popular ? "default" : "outline"} 
                    className={`w-full ${pkg.popular ? 'bg-accent hover:bg-accent/90' : ''}`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {pkg.price === "Custom" ? "Contact Us" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Deliverables */}
          <Card className="border-2 border-primary/20 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">What's Included in Every Project</CardTitle>
              <CardDescription>Complete end-to-end website development with these deliverables</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Ready to Launch Your Website?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get a free consultation and custom quote for your project. We'll discuss your goals, 
              timeline, and create a solution that fits your needs.
            </p>
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Website Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteServices;
