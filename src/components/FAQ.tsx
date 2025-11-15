import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the delivery time?",
      answer: "2-7 days depending on the package. Basic packages typically deliver in 2-3 days, while premium packages with more features may take up to 7 days."
    },
    {
      question: "Are revisions included?",
      answer: "Yes, every package includes revisions! We want you to be completely satisfied with your website, so we'll work with you to make necessary adjustments."
    },
    {
      question: "Can I request custom work?",
      answer: "Absolutely! We offer custom plans tailored to your specific needs. Just contact us with your requirements and we'll create a personalized quote."
    },
    {
      question: "What about support after delivery?",
      answer: "Yes, support is included with all packages! Premium packages include 30 days of dedicated support. We also offer ongoing maintenance and upgrade options."
    },
    {
      question: "Do you provide hosting and domain setup?",
      answer: "We provide guidance and support for domain and hosting setup. This service is available as an optional add-on to make the process seamless for you."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers!
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card px-6 rounded-lg shadow-card border border-border"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
