import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, MessageSquare, ShoppingCart, Calendar, Users, Headphones, Play, ShoppingBag } from "lucide-react";

const BotMarketplace = () => {
  const bots = [
    {
      id: 1,
      name: "E-Commerce Assistant",
      category: "E-Commerce",
      description: "24/7 product recommendations, order tracking, and customer support for online stores.",
      platforms: ["WhatsApp", "Website", "Messenger"],
      price: "$99",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product catalog", "Order tracking", "Payment integration", "Multi-language"],
      popular: true
    },
    {
      id: 2,
      name: "Lead Generation Bot",
      category: "Marketing",
      description: "Capture, qualify, and nurture leads automatically with intelligent conversation flows.",
      platforms: ["Website", "Facebook", "Telegram"],
      price: "$79",
      icon: <Users className="w-6 h-6" />,
      features: ["Lead capture", "CRM integration", "Email automation", "Analytics dashboard"]
    },
    {
      id: 3,
      name: "Booking & Appointment",
      category: "Business",
      description: "Schedule appointments, send reminders, and manage calendars automatically.",
      platforms: ["WhatsApp", "Website", "SMS"],
      price: "$89",
      icon: <Calendar className="w-6 h-6" />,
      features: ["Calendar sync", "Reminders", "Time zone support", "Cancellation handling"]
    },
    {
      id: 4,
      name: "Customer Support Pro",
      category: "Support",
      description: "AI-powered support bot with FAQ automation and ticket routing capabilities.",
      platforms: ["Website", "WhatsApp", "Messenger", "Slack"],
      price: "$119",
      icon: <Headphones className="w-6 h-6" />,
      features: ["24/7 availability", "Ticket system", "Knowledge base", "Live agent handoff"],
      popular: true
    },
    {
      id: 5,
      name: "Restaurant Order Bot",
      category: "Food & Beverage",
      description: "Take orders, manage menus, and process payments for restaurants and cafes.",
      platforms: ["WhatsApp", "Website", "Facebook"],
      price: "$95",
      icon: <ShoppingBag className="w-6 h-6" />,
      features: ["Menu management", "Order tracking", "Payment gateway", "Delivery integration"]
    },
    {
      id: 6,
      name: "FAQ Chatbot",
      category: "General",
      description: "Answer common questions instantly with smart AI-powered responses.",
      platforms: ["Website", "All Platforms"],
      price: "$59",
      icon: <MessageSquare className="w-6 h-6" />,
      features: ["Easy setup", "Custom Q&A", "Analytics", "Multi-language"]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "E-Commerce", "Marketing", "Business", "Support", "Food & Beverage", "General"];

  const filteredBots = selectedCategory === "all" 
    ? bots 
    : bots.filter(bot => bot.category === selectedCategory);

  return (
    <section id="marketplace" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Bot <span className="bg-gradient-accent bg-clip-text text-transparent">Marketplace</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready-to-deploy chatbots for every industry. Choose, customize, and launch in minutes.
            </p>
          </div>

          {/* Category Filter */}
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 md:grid-cols-7 mb-8">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="capitalize">
                  {cat === "all" ? "All Bots" : cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Bot Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBots.map((bot) => (
              <Card key={bot.id} className={`relative transition-smooth hover:shadow-elegant border-2 ${bot.popular ? 'border-accent shadow-elegant' : 'hover:border-primary'}`}>
                {bot.popular && (
                  <div className="absolute -top-3 right-4 px-3 py-1 bg-gradient-accent text-accent-foreground text-xs font-bold rounded-full shadow-glow">
                    POPULAR
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-card">
                      {bot.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">{bot.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{bot.name}</CardTitle>
                  <CardDescription className="text-sm">{bot.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">Platforms</p>
                    <div className="flex flex-wrap gap-2">
                      {bot.platforms.map((platform, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">Features</p>
                    <ul className="space-y-1">
                      {bot.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-2xl font-bold text-primary">{bot.price}</p>
                    <p className="text-xs text-muted-foreground">one-time</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Play className="w-4 h-4" />
                      Demo
                    </Button>
                    <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90">
                      <Bot className="w-4 h-4" />
                      Buy
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">Can't find what you need?</p>
            <Button 
              variant="default" 
              size="lg"
              onClick={() => document.getElementById('custom-bot')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90"
            >
              Request Custom Bot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotMarketplace;
