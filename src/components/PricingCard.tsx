import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const PricingCard = ({ title, price, features, popular }: PricingCardProps) => {
  return (
    <Card className={`relative ${popular ? 'border-primary shadow-lg' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <CardHeader className="text-center pb-8 pt-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="text-4xl font-bold text-primary">{price}</div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
