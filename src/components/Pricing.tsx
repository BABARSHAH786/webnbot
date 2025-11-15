import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const businessPackages = [
    {
      title: "Basic",
      price: "$50",
      features: [
        "1-3 Pages",
        "Responsive Design",
        "Contact Form",
        "Basic SEO",
        "WhatsApp Button",
        "2 Revisions"
      ]
    },
    {
      title: "Standard",
      price: "$80",
      features: [
        "4-6 Pages",
        "Slider Banner",
        "Contact Form",
        "On-Page SEO",
        "Social Links",
        "Blog Setup"
      ],
      popular: true
    },
    {
      title: "Premium",
      price: "$100",
      features: [
        "6-8 Pages",
        "CMS",
        "Blog",
        "Speed Optimization",
        "Live Chat",
        "SEO Setup",
        "30-Day Support"
      ]
    }
  ];

  const ecommercePackages = [
    {
      title: "Starter Store",
      price: "$70",
      features: [
        "10 Products",
        "Payment/COD",
        "Categories",
        "Cart",
        "Mobile Responsive"
      ]
    },
    {
      title: "Standard Store",
      price: "$120",
      features: [
        "30 Products",
        "Coupons",
        "Invoice",
        "WhatsApp Order",
        "Taxes & Shipping"
      ],
      popular: true
    },
    {
      title: "Premium Store",
      price: "$150",
      features: [
        "50 Products",
        "Payment Gateway",
        "Stock System",
        "SEO",
        "Speed Optimization",
        "Live Chat"
      ]
    }
  ];

  const aiPackages = [
    {
      title: "AI Starter",
      price: "$80",
      features: [
        "AI Landing Page",
        "Inquiry Form",
        "WhatsApp Bot"
      ]
    },
    {
      title: "AI Pro Website",
      price: "$150",
      features: [
        "Full Website",
        "AI Chatbot",
        "CRM",
        "Email Automation"
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Packages & Pricing{" "}
              {/* <span className=" bg-clip-text text-transparent">
                Pricing
              </span> */}
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan for your business
            </p>
          </div>

          {/* Pricing Tabs */}
          <Tabs defaultValue="business" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="ecommerce">E-Commerce</TabsTrigger>
              <TabsTrigger value="ai">AI + Chatbot</TabsTrigger>
            </TabsList>

            <TabsContent value="business">
              <div className="grid md:grid-cols-3 gap-6">
                {businessPackages.map((pkg, index) => (
                  <PricingCard key={index} {...pkg} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ecommerce">
              <div className="grid md:grid-cols-3 gap-6">
                {ecommercePackages.map((pkg, index) => (
                  <PricingCard key={index} {...pkg} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai">
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {aiPackages.map((pkg, index) => (
                  <PricingCard key={index} {...pkg} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
