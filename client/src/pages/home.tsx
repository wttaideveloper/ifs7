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
  BookOpen,
  Construction,
  AlertCircle,
  Pencil,
  ChevronRight
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
            <div className="flex items-center">
              <img 
                src="/ifs-logo.png" 
                alt="IFS Interactive Faith Solutions Logo" 
                className="w-16 h-16 rounded-lg object-contain shadow-md"
              />
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-slate-600 hover:text-[hsl(234,89%,60%)] transition-colors font-medium">Home</a>
              <a href="#platform" className="text-slate-600 hover:text-[hsl(234,89%,60%)] transition-colors font-medium">Our Mission</a>
              <a href="#contribute" className="text-slate-600 hover:text-[hsl(234,89%,60%)] transition-colors font-medium">Donate</a>
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
                  <div className="text-2xl font-bold text-[hsl(234,89%,60%)]">Kids to Adults</div>
                  <div className="text-sm text-slate-500">Every Age</div>
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
                  {/* Bible learning children illustration */}
                  <div className="rounded-2xl w-full h-80 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center shadow-lg overflow-hidden">
                    <img 
                      src="/hero-image.png" 
                      alt="Children learning Bible stories with lion character" 
                      className="w-full h-full object-contain"
                    />
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
            className="text-center mb-20"
          >
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-[hsl(234,89%,60%)] to-[hsl(273,75%,66%)] text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
              <Cross size={16} className="mr-2" />
              Our Mission
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-8 leading-tight">
              WHAT WE DO: <br />
              <span className="bg-gradient-to-r from-[hsl(234,89%,60%)] to-[hsl(273,75%,66%)] bg-clip-text text-transparent">
                The IFS Mission
              </span>
            </h2>
            
            <p className="text-2xl text-slate-600 max-w-5xl mx-auto leading-relaxed mb-12 font-light">
              Interactive Faith Solutions LLC (IFS) is a faith-motivated educational technology company dedicated to revolutionizing how people and families interact with Scripture through immersive, interactive, and customized learning experiences based on biblical truth.
            </p>
            
            {/* Mission Cards */}
            <div className="relative max-w-6xl mx-auto">
              {/* Background decorative elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-72 h-72 bg-[hsl(234,89%,60%)] opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(273,75%,66%)] opacity-5 rounded-full blur-3xl"></div>
              </div>
              
              <div className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-100">
                <div className="flex items-center justify-center mb-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(234,89%,60%)] to-[hsl(273,75%,66%)] rounded-2xl flex items-center justify-center shadow-lg">
                    <Microchip className="text-white" size={32} />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-3xl font-bold text-slate-800">We design tools that:</h3>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                  <motion.div
                    variants={fadeInUp}
                    className="lg:col-span-1 p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[hsl(234,89%,60%)] to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Play className="text-white" size={24} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-4">Animate Biblical Stories</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">Bringing Scripture to life through engaging animations and interactive storytelling</p>
                  </motion.div>
                  
                  <motion.div
                    variants={fadeInUp}
                    className="lg:col-span-1 p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[hsl(273,75%,66%)] to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Users className="text-white" size={24} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-4">Personalized Learning</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">Customized experiences that adapt to each learner's age, pace, and understanding</p>
                  </motion.div>
                  
                  <motion.div
                    variants={fadeInUp}
                    className="lg:col-span-1 p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[hsl(158,64%,52%)] to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Rocket className="text-white" size={24} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-4">Gamified Study</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">Making daily Bible study engaging and rewarding through interactive challenges</p>
                  </motion.div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <motion.div
                    variants={fadeInUp}
                    className="p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[hsl(38,92%,50%)] to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Heart className="text-white" size={24} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-4">Community Building</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">Connecting believers worldwide through shared learning and spiritual growth</p>
                  </motion.div>
                  
                  <motion.div
                    variants={fadeInUp}
                    className="p-8 rounded-3xl bg-gradient-to-br from-yellow-50 to-amber-50 border-4 border-[hsl(234,89%,60%)] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
                  >
                    {/* Special highlight badge */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[hsl(234,89%,60%)] to-[hsl(273,75%,66%)] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                      Featured
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-[hsl(234,89%,60%)] to-[hsl(273,75%,66%)] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Baby className="text-white" size={24} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-4">For Young Learners</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">Colorful animations, interactive stories, and age-appropriate content that makes Bible learning an exciting adventure for children.</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Development Status Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-16 shadow-2xl border-2 border-dashed border-slate-300 relative overflow-hidden" style={{userSelect: 'text'}}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{userSelect: 'none'}}>
                  <div className="absolute top-10 left-10 w-32 h-32 bg-[hsl(234,89%,60%)] rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-[hsl(273,75%,66%)] rounded-full blur-2xl"></div>
                </div>
                
                {/* Construction icon */}
                <div className="w-24 h-24 bg-gradient-to-br from-[hsl(38,92%,50%)] to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Construction className="text-white" size={40} />
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                  Development Status
                </h2>
                
                <div className="inline-flex items-center bg-gradient-to-r from-[hsl(38,92%,50%)] to-orange-600 text-white px-8 py-4 rounded-full text-xl font-bold mb-8 shadow-lg">
                  <AlertCircle size={20} className="mr-3" />
                  Currently Under Development
                </div>
                
                <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
                  IBLU is actively being developed by our dedicated team at Interactive Faith Solutions. 
                  We're working hard to bring you this revolutionary Bible learning platform.
                </p>
                
                {/* Progress indicators */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-6 bg-white rounded-2xl shadow-md">
                    <div className="w-12 h-12 bg-[hsl(234,89%,60%)] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Pencil className="text-white" size={20} />
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2">Planning Phase</h4>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-[hsl(234,89%,60%)] h-2 rounded-full w-full"></div>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">Complete</p>
                  </div>
                  
                  <div className="p-6 bg-white rounded-2xl shadow-md">
                    <div className="w-12 h-12 bg-[hsl(38,92%,50%)] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Code className="text-white" size={20} />
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2">Development</h4>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-[hsl(38,92%,50%)] h-2 rounded-full w-3/4"></div>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">In Progress</p>
                  </div>
                  
                  <div className="p-6 bg-white rounded-2xl shadow-md">
                    <div className="w-12 h-12 bg-slate-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Rocket className="text-white" size={20} />
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2">Launch</h4>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-slate-400 h-2 rounded-full w-1/4"></div>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">Coming Soon</p>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600">
                  Your support through <strong>IFS7.com</strong> helps fund this important project and brings us closer to launch.
                </p>
              </div>
            </div>
          </motion.div>
          

        </div>
      </section>

      {/* Donate Now Section */}
      <section className="py-12 bg-gradient-to-br from-[hsl(234,89%,60%)] via-[hsl(273,75%,66%)] to-[hsl(234,89%,60%)] relative overflow-hidden" id="contribute">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            {/* Floating hearts animation */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 animate-bounce-gentle">
                <Heart className="text-white/20" size={24} />
              </div>
              <div className="absolute top-20 right-20 animate-bounce-gentle" style={{animationDelay: '1s'}}>
                <Heart className="text-white/20" size={20} />
              </div>
              <div className="absolute bottom-20 left-20 animate-bounce-gentle" style={{animationDelay: '2s'}}>
                <Heart className="text-white/20" size={28} />
              </div>
            </div>

            {/* Main content */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(38,92%,50%)] to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-slow">
                <Heart className="text-white" size={28} />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                Help Bring IBLU to Life
              </h2>
              
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
                Your generous donation will help create the world's most innovative Bible learning platform, 
                touching lives across generations and making Scripture come alive for millions.
              </p>
              

              
              {/* One-Time Giving Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Prefer One-Time Giving?</h3>
                <p className="text-base text-slate-600 mb-6">Make a single contribution to support our mission</p>
                
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 max-w-xs">
                    <div className="text-3xl font-bold text-[hsl(158,64%,52%)] mb-2">$1500</div>
                    <p className="text-slate-600 text-sm">Major development milestone</p>
                  </div>
                </div>
                
                {/* Custom Amount Section */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border-2 border-[hsl(234,89%,60%)] shadow-lg">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg font-bold text-slate-800 mb-1">Custom Amount</h4>
                      <p className="text-slate-600 text-sm">Choose your own donation amount</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg font-bold text-slate-600">$</span>
                        <input 
                          type="number" 
                          placeholder="100" 
                          min="1"
                          className="w-28 h-12 pl-6 pr-3 text-lg font-bold text-center rounded-lg border-2 border-[hsl(234,89%,60%)] focus:outline-none focus:ring-2 focus:ring-[hsl(234,89%,60%)]/20"
                        />
                      </div>
                      <Button 
                        asChild
                        className="bg-[hsl(234,89%,60%)] hover:bg-[hsl(234,89%,55%)] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        <a 
                          href="https://ifs7.com/donate" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <span>Use This</span>
                          <ChevronRight size={16} />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-[hsl(38,92%,50%)] to-orange-600 hover:from-[hsl(38,92%,45%)] hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg min-w-56 shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <a 
                    href="https://ifs7.com/donate" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Heart size={20} />
                    <span>Donate Now</span>
                    <ChevronRight size={18} />
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  asChild
                  className="border-2 border-[hsl(234,89%,60%)] text-[hsl(234,89%,60%)] bg-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[hsl(234,89%,60%)] hover:text-white transition-all duration-300 min-w-56 shadow-lg"
                >
                  <a 
                    href="https://ifs7.com/monthly" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Handshake size={20} />
                    <span>Monthly Giving</span>
                  </a>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="pt-6 border-t border-slate-200">
                <p className="text-slate-600 mb-3 font-semibold text-sm">Trusted by thousands of supporters worldwide</p>
                <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="text-green-500" size={14} />
                    <span>Secure Donations</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="text-green-500" size={14} />
                    <span>100% Goes to Development</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="text-green-500" size={14} />
                    <span>Tax Deductible</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="text-green-500" size={14} />
                    <span>Regular Updates</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/ifs-logo.png" 
                alt="IFS Interactive Faith Solutions Logo" 
                className="w-16 h-16 rounded-lg object-contain shadow-md"
              />
            </div>
            
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Revolutionizing Bible education through innovation, technology, and Christ-centered learning 
              for people of all ages and backgrounds.
            </p>
            
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a href="https://ifs7.com" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Visit IFS7.com
              </a>
              <a href="https://ifs7.com/about" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                About Us
              </a>
              <a href="https://ifs7.com/contact" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
              <a href="https://ifs7.com/privacy" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Privacy
              </a>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-400 text-sm">
                © 2024 IBLU - Interactive Bible Learning University. 
                A project of <a href="https://ifs7.com" className="text-[hsl(234,89%,60%)] hover:underline" target="_blank" rel="noopener noreferrer">IFS7.com</a>. 
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
