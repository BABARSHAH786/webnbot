import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Save to Supabase
      const { error } = await supabase
        .from('contacts_data')
        .insert({
          name: formData.fullName,
          email: formData.email,
          company: formData.companyName || null,
          need: formData.service,
          message: formData.message || null,
        });

      if (error) {
        toast({
          title: "Error",
          description: "Failed to save your information. Please try again.",
          variant: "destructive",
        });
        console.error("Supabase error:", error);
        return;
      }

      // Create WhatsApp message
      const message = `
New Contact Form Submission:
━━━━━━━━━━━━━━━━━━━
👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
🏢 Company: ${formData.companyName || "Not provided"}
🎯 Service: ${formData.service}
💬 Message: ${formData.message || "No additional message"}
      `.trim();
      
      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/923350458593?text=${encodeURIComponent(message)}`, "_blank");
      
      toast({
        title: "Success!",
        description: "Your information has been saved and redirecting to WhatsApp.",
      });
      
      // Reset form after submission
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get Started with WebnBot{" "}
              {/* <span className="gradient-accent bg-clip-text text-transparent">
                WebnBot
              </span> */}
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Your Company Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">
                    What do you need? <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    required
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ready-made-bot">Ready-Made Bot</SelectItem>
                      <SelectItem value="custom-bot">Custom Bot Development</SelectItem>
                      <SelectItem value="website">Website Development</SelectItem>
                      <SelectItem value="both">Bot + Website</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
