
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Zap, Globe, Brain, Smartphone, Star, CheckCircle } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent)] pointer-events-none" />
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-purple-400 bg-clip-text text-transparent">
              Black Designer
            </h1>
            <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
              Agency
            </h2>
          </div>
          
          <p className="text-xl md:text-3xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Create Powerful 3D Logos Using AI Tools – No Design Skills Needed
          </p>
          
          <Button 
            onClick={() => scrollToSection('buy')}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-yellow-400/50"
          >
            Get Full Access – Only $10
          </Button>
          
          <div className="mt-16">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop" 
              alt="AI-Generated 3D Logos" 
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full border border-purple-500/30"
            />
          </div>
        </div>
      </section>

      {/* About the Course */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Master AI Logo Design
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your creative vision into stunning 3D logos using cutting-edge AI tools. Our comprehensive course covers everything from concept to completion.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Tools You'll Master:</h3>
                <ul className="space-y-3 text-lg text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Ideogram AI</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />ChatGPT</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Canva</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Photopea</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">What You'll Learn:</h3>
                <ul className="space-y-3 text-lg text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Generate 3D logos with AI</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Professional editing techniques</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Export in multiple formats</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Bonus: Vector logo packs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Course */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Fast Learning", desc: "Master 3D logo creation in hours, not months" },
              { icon: Globe, title: "Global Access", desc: "Available worldwide with instant delivery" },
              { icon: Brain, title: "No Experience Required", desc: "Perfect for complete beginners" },
              { icon: Smartphone, title: "Mobile Friendly", desc: "Learn and create on any device" }
            ].map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <benefit.icon className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
                  <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Student Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Freelance Designer",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face",
                testimonial: "This course completely transformed my design workflow. I went from zero to creating professional 3D logos in just one weekend!"
              },
              {
                name: "Marcus Chen",
                role: "Small Business Owner",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
                testimonial: "Amazing value for $10! I created my entire brand identity using the techniques from this course. Highly recommended!"
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Manager",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b829?w=200&h=200&fit=crop&crop=face",
                testimonial: "The AI tools section was a game-changer. I'm now creating logos for my clients in minutes instead of hours."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.testimonial}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-yellow-400"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Section */}
      <section id="buy" className="py-24 px-4 bg-gradient-to-br from-purple-900/20 via-black to-yellow-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
            Start Creating Today
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-12">
            $10 One-Time Payment • Lifetime Access • No Subscriptions
          </p>
          
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-3xl p-12 mb-12 shadow-2xl">
            <div className="text-6xl font-bold text-yellow-400 mb-4">$10</div>
            <p className="text-xl text-gray-300 mb-8">Complete AI Logo Design Course</p>
            
            <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Full video course (2+ hours)
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Step-by-step tutorials
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Bonus vector logo packs
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Lifetime updates
              </li>
            </ul>
            
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-2xl px-16 py-8 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-yellow-400/50">
              Enroll Now
            </Button>
            
            <p className="text-sm text-gray-400 mt-6">
              Secure payment • PayPal & Stripe accepted • Instant access
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-700 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold text-white hover:text-yellow-400">
                Do I need to know design?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-lg">
                Not at all! This course is designed for complete beginners. We'll teach you everything from scratch, including how to use AI tools to generate professional logos without any design background.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-700 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold text-white hover:text-yellow-400">
                Is this for beginners?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-lg">
                Absolutely! The course starts with the basics and gradually builds up your skills. We use simple, step-by-step instructions that anyone can follow, regardless of their technical background.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-gray-700 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold text-white hover:text-yellow-400">
                Are the tools free?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-lg">
                Most tools we use have free tiers that are perfect for getting started. We'll show you how to maximize free versions of Ideogram, ChatGPT, Canva, and Photopea before you decide to upgrade.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-gray-700 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold text-white hover:text-yellow-400">
                Can I sell the logos I create?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-lg">
                Yes! All logos you create using the techniques in this course are yours to use commercially. You can sell them to clients, use them for your business, or build a logo design service.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Black Designer Agency</h3>
            <p className="text-gray-400">Empowering creators with AI-powered design education</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a>
          </div>
          
          <p className="text-gray-500 text-sm">
            © 2024 Black Designer Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
