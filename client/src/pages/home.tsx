import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  Heart, 
  Rocket, 
  PlayCircle, 
  Baby, 
  University, 
  Microchip,
  Play,
  Brain,
  Users,
  Cross,
  Code,
  CheckCircle,
  Handshake,
  BookOpen
} from "lucide-react";

export default function Home() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              {/* IFS7 Logo - Replace with actual logo */}
              <div className="w-10 h-10 bg-gradient-to-br from-[hsl(234,89%,60%)] to-[hsl(273,75%,66%)] rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">IFS7</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">IBLU</h1>
                <p className="text-xs text-slate-500">by WhiteIfs7</p>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-[hsl(234,89%,60%)] transition-colors font-medium">About</a>
              <a href="#platform" className="text-slate-600 hover:text-[hsl(234,89%,60%)] transition-colors font-medium">Platform</a>
              <a href="#features" className="text-slate-600 hover:text-[hsl(234,89%,60%)] transition-colors font-medium">Features</a>
              <a href="#support" className="text-slate-600 hover:text-[hsl(234,89%,60%)] transition-colors font-medium">Support</a>
            </div>
            
            {/* CTA Button */}
            <Button 
              asChild
              className="btn-primary text-white px-6 py-2 rounded-full font-semibold text-sm"
            >
              <a href="#contribute" className="flex items-center space-x-2">
                <Heart size={16} />
                <span>Support IBLU</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center py-20" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="animate-fade-in"
            >
              {/* Status Badge */}
              <Badge className="status-badge text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-flex items-center space-x-2">
                <Code size={16} />
                <span>Currently Under Development</span>
              </Badge>
              
              {/* Main Headline */}
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
                Faith Meets
                <span className="block">Innovation.</span>
                <span className="text-[hsl(234,89%,60%)] block">Learning the Bible</span>
                <span className="block">Will Never Be the Same.</span>
              </h1>
              
              {/* Description */}
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                IBLU is a revolutionary digital Bible learning platform powered by animation, adaptive technology, and Christ-centered teaching—for every age and stage.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  asChild
                  className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg min-w-48"
                >
                  <a href="#contribute" className="flex items-center justify-center space-x-2">
                    <Rocket size={20} />
                    <span>Support the Vision</span>
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  asChild
                  className="border-2 border-[hsl(234,89%,60%)] text-[hsl(234,89%,60%)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[hsl(234,89%,60%)] hover:text-white transition-all duration-300 min-w-48"
                >
                  <a href="#learn-more" className="flex items-center justify-center space-x-2">
                    <PlayCircle size={20} />
                    <span>Learn How It Works</span>
                  </a>
                </Button>
              </div>
              
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(234,89%,60%)]">All Ages</div>
                  <div className="text-sm text-slate-500">Designed For</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(234,89%,60%)]">Interactive</div>
                  <div className="text-sm text-slate-500">Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(234,89%,60%)]">Adaptive</div>
                  <div className="text-sm text-slate-500">Technology</div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Illustration */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="animate-slide-up"
            >
              <div className="relative">
                {/* Main illustration container */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  {/* Bible learning children illustration placeholder */}
                  <div className="rounded-2xl w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-lg">
                    <div className="text-center text-slate-600">
                      <BookOpen size={64} className="mx-auto mb-4 text-[hsl(234,89%,60%)]" />
                      <p className="text-lg font-semibold">Children Learning Bible Stories</p>
                      <p className="text-sm">Interactive & Engaging Content</p>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-[hsl(234,89%,60%)] rounded-full flex items-center justify-center animate-bounce-gentle">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[hsl(158,64%,52%)] rounded-full flex items-center justify-center animate-pulse-slow">
                    <Heart className="text-white" size={18} />
                  </div>
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-[hsl(234,100%,96%)] rounded-full opacity-50 animate-pulse-slow"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-[hsl(234,89%,60%)] opacity-10 rounded-full animate-bounce-gentle"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Features Section */}
      <section className="py-20 bg-slate-50" id="platform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
              Revolutionizing Bible Education
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From children exploring their first Bible stories to adults deepening their theological understanding, 
              IBLU makes learning fun, convenient, and fruitful for everyone.
            </p>
          </motion.div>
          
          {/* Feature Cards Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            
            {/* Card 1: For Children */}
            <motion.div variants={fadeInUp}>
              <Card className="card-hover h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {/* Children learning illustration placeholder */}
                    <div className="rounded-xl w-full h-48 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                      <Baby size={48} className="text-[hsl(38,92%,50%)]" />
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[hsl(234,89%,60%)] rounded-full flex items-center justify-center mb-4">
                    <Baby className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">For Young Learners</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Colorful animations, interactive stories, and age-appropriate content that makes Bible learning 
                    an exciting adventure for children.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Card 2: For Adults */}
            <motion.div variants={fadeInUp}>
              <Card className="card-hover h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {/* Virtual education platform illustration placeholder */}
                    <div className="rounded-xl w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                      <University size={48} className="text-[hsl(234,89%,60%)]" />
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[hsl(158,64%,52%)] rounded-full flex items-center justify-center mb-4">
                    <University className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">For Adult Learners</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Deep theological content, study tools, and adaptive learning paths that grow with your 
                    understanding and spiritual journey.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Card 3: Technology */}
            <motion.div variants={fadeInUp} className="md:col-span-2 lg:col-span-1">
              <Card className="card-hover h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {/* Theological study materials illustration placeholder */}
                    <div className="rounded-xl w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <Microchip size={48} className="text-[hsl(273,75%,66%)]" />
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[hsl(38,92%,50%)] rounded-full flex items-center justify-center mb-4">
                    <Microchip className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Smart Technology</h3>
                  <p className="text-slate-600 leading-relaxed">
                    AI-powered adaptive learning, progress tracking, and personalized content delivery 
                    that adjusts to each learner's pace and style.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          {/* Key Features List */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Platform Highlights</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[hsl(234,89%,60%)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Play className="text-white" size={14} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Interactive Animations</h4>
                      <p className="text-slate-600 text-sm">Bringing Bible stories to life with engaging visual storytelling</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[hsl(158,64%,52%)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Brain className="text-white" size={14} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Adaptive Learning</h4>
                      <p className="text-slate-600 text-sm">Content that adapts to your learning style and progress</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[hsl(38,92%,50%)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="text-white" size={14} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">All Ages Welcome</h4>
                      <p className="text-slate-600 text-sm">Designed for learners from early childhood to senior adults</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[hsl(234,89%,60%)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Cross className="text-white" size={14} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Christ-Centered</h4>
                      <p className="text-slate-600 text-sm">Every lesson grounded in biblical truth and Christian values</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Support & Contribute Section */}
      <section className="py-20 bg-white" id="contribute">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="bg-[hsl(234,100%,96%)] text-[hsl(234,89%,60%)] px-6 py-3 rounded-full text-sm font-semibold mb-6 inline-flex items-center space-x-2">
              <Rocket size={16} />
              <span>Help Us Launch IBLU</span>
            </Badge>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
              Support the Future of
              <span className="text-[hsl(234,89%,60%)]"> Bible Education</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              IBLU is currently under development, and we need your support to bring this revolutionary 
              Bible learning platform to life. Your contribution will help us create engaging content, 
              develop cutting-edge technology, and make Bible education accessible to everyone.
            </p>
          </motion.div>
          
          {/* Support Cards */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            
            {/* Development Progress Card */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-[hsl(234,100%,96%)] to-white shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-[hsl(234,89%,60%)] rounded-full flex items-center justify-center">
                      <Code className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Development Status</h3>
                      <p className="text-slate-600">Currently in progress</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Platform Architecture</span>
                      <span className="text-[hsl(158,64%,52%)] font-semibold">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Content Creation</span>
                      <span className="text-[hsl(38,92%,50%)] font-semibold">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Animation & Graphics</span>
                      <span className="text-[hsl(234,89%,60%)] font-semibold">30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Impact Card */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-[hsl(234,89%,60%)] to-[hsl(273,75%,66%)] shadow-lg text-white h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Heart className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Your Impact</h3>
                      <p className="text-white/80">How donations help</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-green-300 mt-1 flex-shrink-0" size={16} />
                      <p className="text-white/90">Fund development of interactive Bible stories and animations</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-green-300 mt-1 flex-shrink-0" size={16} />
                      <p className="text-white/90">Support creation of age-appropriate learning modules</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-green-300 mt-1 flex-shrink-0" size={16} />
                      <p className="text-white/90">Enable AI-powered adaptive learning technology</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-green-300 mt-1 flex-shrink-0" size={16} />
                      <p className="text-white/90">Make the platform accessible to underserved communities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                  Ready to Support IBLU?
                </h3>
                <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                  Join us in revolutionizing Bible education. Every contribution brings us closer 
                  to launching this groundbreaking platform.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    className="btn-primary text-white px-10 py-4 rounded-full font-semibold text-lg min-w-64"
                  >
                    <a 
                      href="https://whiteifs7.com/donate" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Heart size={20} />
                      <span>Contribute Now</span>
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    asChild
                    className="border-2 border-[hsl(234,89%,60%)] text-[hsl(234,89%,60%)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[hsl(234,89%,60%)] hover:text-white transition-all duration-300 min-w-64"
                  >
                    <a 
                      href="https://whiteifs7.com/support" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Handshake size={20} />
                      <span>Learn More Ways to Help</span>
                    </a>
                  </Button>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-sm text-slate-500">
                    Donations are processed securely through the WhiteIfs7 platform. 
                    <a href="https://whiteifs7.com/privacy" className="text-[hsl(234,89%,60%)] hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a> • 
                    <a href="https://whiteifs7.com/terms" className="text-[hsl(234,89%,60%)] hover:underline" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo and description */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              {/* IFS7 Logo - Replace with actual logo */}
              <div className="w-12 h-12 bg-gradient-to-br from-[hsl(234,89%,60%)] to-[hsl(273,75%,66%)] rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold">IFS7</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold">IBLU</h3>
                <p className="text-slate-400 text-sm">Interactive Bible Learning University</p>
              </div>
            </div>
            
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Revolutionizing Bible education through innovation, technology, and Christ-centered learning 
              for people of all ages and backgrounds.
            </p>
            
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a href="https://whiteifs7.com" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Visit WhiteIfs7
              </a>
              <a href="https://whiteifs7.com/about" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                About Us
              </a>
              <a href="https://whiteifs7.com/contact" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
              <a href="https://whiteifs7.com/privacy" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Privacy
              </a>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-400 text-sm">
                © 2024 IBLU - Interactive Bible Learning University. 
                A project of <a href="https://whiteifs7.com" className="text-[hsl(234,89%,60%)] hover:underline" target="_blank" rel="noopener noreferrer">WhiteIfs7</a>. 
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
