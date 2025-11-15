import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, ExternalLink } from "lucide-react";
// Using standard <img> instead of next/image to avoid dependency on Next.js in this environment

const Testimonials = () => {
  const testimonials = [
    {
      name: "Malik Aman",
      role: "Founder",
      company: "Sentinel Marketing",
      companyUrl: "https://malikamansentinel.com",
      content: "BotBazzar transformed our customer service with their e-commerce bot. Response times dropped from hours to seconds, and our customer satisfaction scores jumped 40%. Best investment we've made.",
      rating: 5,
      initials: "SM",
      projectImage: "https://i.postimg.cc/BbQ0sncY/Whats-App-Image-2025-11-04-at-02-24-55-070aeb0f.jpg", // Apni image path daal dena
      projectUrl: "https://malikamansentinel.com/", // Live bot link
    },
   {
      name: "TechKL Team",
      role: "Technology Learning Platform",
      company: "TechKL.de",
      companyUrl: "https://www.techkl.de",
      content: "We built a modern, fast, and engaging tech learning platform. Users get latest news, tutorials, and expert insights — all in one place. Perfect for learners worldwide.",
      rating: 5,
      initials: "TK",
      projectImage: "https://i.postimg.cc/c4hcr47g/Screenshot-2025-11-12-003459.jpg", // Apni image daal dena
      projectUrl: "https://www.techkl.de",
    },
  {
  name: "Leeza Cakes",
  role: "Online Cake Shop",
  company: "LeezaCakes",
  companyUrl: "https://leeza-cakes.vercel.app",
  content: "Our stunning e-commerce cake shop is now live! Beautiful design, smooth ordering, and real-time availability — customers love the experience and sales have increased 3x.",
  rating: 5,
  initials: "LC",
  projectImage: "https://i.postimg.cc/13gNs9Jb/Screenshot-2025-11-11-020159.jpg",
  projectUrl: "https://leeza-cakes.vercel.app",
},
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What Our Clients <span className="bg-gradient-accent bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what businesses are saying about working with us.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 shadow-card hover:shadow-elegant overflow-hidden group"
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-muted">
                    <img
                      src={testimonial.projectImage}
                      alt={`${testimonial.name}'s project`}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <a
                        href={testimonial.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, idx) => (
                        <Star key={idx} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t">
                      <Avatar className="w-12 h-12 bg-gradient-primary text-primary-foreground">
                        <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}, <a href={testimonial.companyUrl} target="_blank" className="underline hover:text-primary">{testimonial.company}</a>
                        </p>
                      </div>
                    </div>

                    {/* View Project Button (Mobile/Alternative) */}
                    <a
                      href={testimonial.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium mt-2"
                    >
                      View Live Project <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;





// import { Card, CardContent } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Star } from "lucide-react";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Malik Aman",
//       role: "Founder",
//       company: "https://malikamansentinel.com",
//       content: "BotBazzar transformed our customer service with their e-commerce bot. Response times dropped from hours to seconds, and our customer satisfaction scores jumped 40%. Best investment we've made.",
//       rating: 5,
//       initials: "SM"
//     },
//     {
//       name: "David Chen",
//       role: "Marketing Director",
//       company: "TechFlow Solutions",
//       content: "The website they built for us is not only beautiful but performs incredibly well. Page load times under 2 seconds, perfect mobile responsiveness, and our organic traffic has doubled in just 3 months.",
//       rating: 5,
//       initials: "DC"
//     },
//     {
//       name: "Priya Sharma",
//       role: "Owner",
//       company: "Wellness Studio",
//       content: "The booking bot has been a game changer. It handles all our appointments automatically, sends reminders, and integrates perfectly with our calendar. We've reduced no-shows by 60% and saved countless hours.",
//       rating: 5,
//       initials: "PS"
//     },

//   ];

//   return (
//     <section className="py-20 bg-gradient-subtle">
//       <div className="container px-4 mx-auto">
//         <div className="max-w-7xl mx-auto space-y-12">
//           {/* Header */}
//           <div className="text-center space-y-4">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground">
//               What Our Clients <span className="bg-gradient-accent bg-clip-text text-transparent">Say</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Don't just take our word for it. Here's what businesses are saying about working with us.
//             </p>
//           </div>

//           {/* Testimonials Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <Card key={index} className="border-2 hover:border-primary transition-smooth shadow-card hover:shadow-elegant">
//                 <CardContent className="pt-6 space-y-4">
//                   {/* Rating */}
//                   <div className="flex gap-1">
//                     {Array.from({ length: testimonial.rating }).map((_, idx) => (
//                       <Star key={idx} className="w-5 h-5 fill-accent text-accent" />
//                     ))}
//                   </div>

//                   {/* Content */}
//                   <p className="text-sm text-muted-foreground italic leading-relaxed">
//                     "{testimonial.content}"
//                   </p>

//                   {/* Author */}
//                   <div className="flex items-center gap-3 pt-4 border-t">
//                     <Avatar className="w-12 h-12 bg-gradient-primary text-primary-foreground">
//                       <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
//                         {testimonial.initials}
//                       </AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <p className="font-semibold text-foreground">{testimonial.name}</p>
//                       <p className="text-xs text-muted-foreground">
//                         {testimonial.role}, {testimonial.company}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
