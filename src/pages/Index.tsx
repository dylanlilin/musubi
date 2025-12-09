import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music, Users, Heart, Sparkles, ArrowRight, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Music className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold">Musubi</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Sign in
            </Button>
          </Link>
          <Link to="/login">
            <Button className="gradient-primary border-0 glow-primary">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-32 md:px-12 md:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Connect with your favorite artists</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Your <span className="gradient-text">Fan Community</span> Awaits
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join exclusive fan groups, share moments, and connect with fellow fans who share your passion for music and art.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/feed">
              <Button size="lg" className="gradient-primary border-0 glow-primary text-lg px-8 h-14 group">
                Explore Communities
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-border/50 hover:bg-secondary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating cards */}
        <div className="absolute top-40 left-10 hidden lg:block animate-float">
          <div className="glass rounded-2xl p-4 w-48">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500" />
              <div>
                <p className="font-medium text-sm">Luna Stars</p>
                <p className="text-xs text-muted-foreground">12.5k fans</p>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-60 right-10 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
          <div className="glass rounded-2xl p-4 w-48">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-500" />
              <div>
                <p className="font-medium text-sm">Echo Beats</p>
                <p className="text-xs text-muted-foreground">8.2k fans</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Heart className="w-3 h-3 fill-accent text-accent" />
              <span>Active now</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 py-20 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Fan Communities"
              description="Join exclusive groups and connect with fans who share your passion."
              delay="0s"
            />
            <FeatureCard
              icon={<Heart className="w-6 h-6" />}
              title="Exclusive Content"
              description="Access behind-the-scenes content, early releases, and special moments."
              delay="0.1s"
            />
            <FeatureCard
              icon={<Sparkles className="w-6 h-6" />}
              title="Live Events"
              description="Never miss a concert, livestream, or fan meetup with real-time updates."
              delay="0.2s"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Music className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold">Musubi</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Musubi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: string;
}) => (
  <div 
    className="glass rounded-2xl p-6 hover-lift animate-fade-in-up"
    style={{ animationDelay: delay }}
  >
    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 text-primary-foreground">
      {icon}
    </div>
    <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default Index;
