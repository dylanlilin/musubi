import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Music, Search, Home, Users, Bell, Settings, 
  Heart, MessageCircle, Share2, MoreHorizontal,
  Image as ImageIcon, Smile, Send, Plus, TrendingUp
} from "lucide-react";

const Feed = () => {
  const [newPost, setNewPost] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-border/50 bg-card/50 backdrop-blur-xl hidden lg:block">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Music className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">Musubi</span>
          </Link>

          <nav className="space-y-2">
            <NavItem icon={<Home />} label="Home" active />
            <NavItem icon={<Users />} label="Communities" />
            <NavItem icon={<Bell />} label="Notifications" badge={3} />
            <NavItem icon={<Settings />} label="Settings" />
          </nav>
        </div>

        {/* Trending Groups */}
        <div className="px-6 py-4 border-t border-border/50">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Trending Groups
          </h3>
          <div className="space-y-3">
            <TrendingGroup name="Luna Stars" members="12.5k" />
            <TrendingGroup name="Echo Beats" members="8.2k" />
            <TrendingGroup name="Neon Dreams" members="6.8k" />
          </div>
        </div>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border/50">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">Your Name</p>
              <p className="text-sm text-muted-foreground truncate">@username</p>
            </div>
            <Button variant="ghost" size="icon" className="shrink-0">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 z-50 flex items-center justify-between px-4 py-3 border-b border-border/50 bg-background/80 backdrop-blur-xl">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Music className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold">Musubi</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </header>

        <div className="max-w-2xl mx-auto px-4 py-6">
          {/* Create Post */}
          <div className="glass rounded-2xl p-4 mb-6">
            <div className="flex gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Input
                  placeholder="Share something with your community..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="bg-secondary border-0 h-12 mb-3"
                />
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <ImageIcon className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Smile className="w-5 h-5" />
                    </Button>
                  </div>
                  <Button className="gradient-primary border-0" disabled={!newPost}>
                    <Send className="w-4 h-4 mr-2" />
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            <PostCard
              author="Luna Stars"
              handle="@lunastars_official"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=luna"
              content="Thank you all for an amazing night! 💜 Can't wait to see you at the next show. The energy was absolutely incredible!"
              image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
              likes={1247}
              comments={89}
              time="2h ago"
              verified
            />
            <PostCard
              author="Echo Beats"
              handle="@echobeats"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=echo"
              content="New track dropping this Friday! 🎵 Who's ready? Drop a 🔥 in the comments!"
              likes={892}
              comments={156}
              time="4h ago"
              verified
            />
            <PostCard
              author="Sarah M."
              handle="@sarahfan99"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
              content="Just got my tickets for the tour! Anyone else going to the NYC show? Would love to meet up with fellow fans! 🎉"
              likes={234}
              comments={45}
              time="6h ago"
            />
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 border-t border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="flex items-center justify-around py-3">
          <Button variant="ghost" size="icon" className="text-primary">
            <Home className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Search className="w-6 h-6" />
          </Button>
          <Button size="icon" className="gradient-primary border-0 rounded-full w-12 h-12 -mt-6 glow-primary">
            <Plus className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Users className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({ 
  icon, 
  label, 
  active, 
  badge 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
  badge?: number;
}) => (
  <Button
    variant="ghost"
    className={`w-full justify-start gap-3 h-11 ${
      active ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'text-muted-foreground hover:text-foreground'
    }`}
  >
    {icon}
    <span>{label}</span>
    {badge && (
      <span className="ml-auto bg-accent text-accent-foreground text-xs font-medium px-2 py-0.5 rounded-full">
        {badge}
      </span>
    )}
  </Button>
);

const TrendingGroup = ({ name, members }: { name: string; members: string }) => (
  <div className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 rounded-lg p-2 -mx-2 transition-colors">
    <div className="w-8 h-8 rounded-lg gradient-primary opacity-80" />
    <div>
      <p className="font-medium text-sm">{name}</p>
      <p className="text-xs text-muted-foreground">{members} fans</p>
    </div>
  </div>
);

const PostCard = ({
  author,
  handle,
  avatar,
  content,
  image,
  likes,
  comments,
  time,
  verified,
}: {
  author: string;
  handle: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  time: string;
  verified?: boolean;
}) => {
  const [liked, setLiked] = useState(false);
  
  return (
    <div className="glass rounded-2xl p-4 hover-lift">
      <div className="flex gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={avatar} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold truncate">{author}</span>
            {verified && (
              <div className="w-4 h-4 rounded-full gradient-primary flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <span className="text-sm text-muted-foreground truncate">{handle}</span>
            <span className="text-sm text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground shrink-0">{time}</span>
          </div>
          <p className="mb-3 whitespace-pre-wrap">{content}</p>
          {image && (
            <div className="rounded-xl overflow-hidden mb-3 -mx-1">
              <img src={image} alt="" className="w-full h-auto object-cover" />
            </div>
          )}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 text-sm transition-colors ${
                liked ? 'text-accent' : 'text-muted-foreground hover:text-accent'
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              <span>{liked ? likes + 1 : likes}</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{comments}</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
