import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Bot, Globe } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      type: "bot",
      title: "E-Commerce Support Bot",
      client: "Fashion Retailer",
      description: "24/7 customer support bot handling product inquiries, order tracking, and returns",
      metrics: [
        { label: "Response Time", value: "< 2s" },
        { label: "Ticket Reduction", value: "70%" },
        { label: "Customer Satisfaction", value: "4.8/5" }
      ],
      tags: ["WhatsApp", "Website", "AI NLP"]
    },
    {
      type: "website",
      title: "SaaS Landing Page",
      client: "Tech Startup",
      description: "Modern, conversion-optimized landing page with lead capture and demo booking",
      metrics: [
        { label: "Page Speed", value: "98/100" },
        { label: "Conversion Rate", value: "+45%" },
        { label: "Mobile Score", value: "100/100" }
      ],
      tags: ["React", "SEO", "Responsive"]
    },
    {
      type: "bot",
      title: "Booking Assistant",
      client: "Wellness Clinic",
      description: "Automated appointment scheduling with calendar integration and SMS reminders",
      metrics: [
        { label: "Bookings/Month", value: "500+" },
        { label: "No-Show Rate", value: "-60%" },
        { label: "Time Saved", value: "80hrs/mo" }
      ],
      tags: ["WhatsApp", "Calendar API", "Payments"]
    },
    {
      type: "website",
      title: "E-Commerce Store",
      client: "Artisan Goods",
      description: "Full-featured online store with product catalog, cart, and payment processing",
      metrics: [
        { label: "Products", value: "120" },
        { label: "Monthly Orders", value: "800+" },
        { label: "Load Time", value: "2.1s" }
      ],
      tags: ["Shopify", "Payment Gateway", "SEO"]
    },
    {
      type: "bot",
      title: "Lead Qualification Bot",
      client: "B2B Agency",
      description: "Intelligent lead capture and qualification with CRM integration",
      metrics: [
        { label: "Leads Captured", value: "2000+/mo" },
        { label: "Qualification Rate", value: "85%" },
        { label: "Sales Cycle", value: "-30%" }
      ],
      tags: ["Website", "Telegram", "CRM Integration"]
    },
    {
      type: "website",
      title: "Portfolio Website",
      client: "Creative Agency",
      description: "Stunning portfolio showcase with project galleries and contact forms",
      metrics: [
        { label: "Projects", value: "50+" },
        { label: "Inquiries", value: "+120%" },
        { label: "SEO Ranking", value: "Top 3" }
      ],
      tags: ["Custom", "WordPress", "Animations"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Success <span className="bg-gradient-accent bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses transform their digital presence.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-smooth shadow-card hover:shadow-elegant group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-card">
                      {project.type === "bot" ? <Bot className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
                    </div>
                    <Badge variant={project.type === "bot" ? "default" : "secondary"} className={project.type === "bot" ? "bg-accent" : ""}>
                      {project.type === "bot" ? "Bot" : "Website"}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 py-4 border-t border-b">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-lg font-bold text-foreground">{metric.value}</p>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground mb-4">
              Want to see your project here?
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-smooth group"
            >
              Let's Build Something Amazing
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
