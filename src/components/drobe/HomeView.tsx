import { motion } from "framer-motion";
import AvatarCard from "./AvatarCard";
import { wardrobeItems } from "@/data/wardrobeData";
import { Sparkles, TrendingUp, Shirt } from "lucide-react";

interface HomeViewProps {
  onNavigate: (tab: string) => void;
}

const HomeView = ({ onNavigate }: HomeViewProps) => {
  const recentItems = wardrobeItems.slice(0, 3);

  return (
    <div className="space-y-5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="font-display text-2xl font-bold text-gradient-gold">DROBE</h1>
          <p className="text-xs text-muted-foreground">Your Digital Wardrobe</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center animate-pulse-gold">
          <Sparkles size={18} className="text-primary-foreground" />
        </div>
      </motion.div>

      {/* Avatar Card */}
      <AvatarCard />

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => onNavigate("match")}
          className="p-4 rounded-xl bg-gradient-card border border-border text-left group hover:border-primary/40 transition-all"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center mb-2">
            <Sparkles size={16} className="text-primary-foreground" />
          </div>
          <p className="font-display text-sm font-bold text-foreground">AI Match</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Check before you buy</p>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => onNavigate("wardrobe")}
          className="p-4 rounded-xl bg-gradient-card border border-border text-left group hover:border-primary/40 transition-all"
        >
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center mb-2">
            <Shirt size={16} className="text-accent-foreground" />
          </div>
          <p className="font-display text-sm font-bold text-foreground">Inventory</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Browse your wardrobe</p>
        </motion.button>
      </div>

      {/* Recent Additions */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-sm font-bold text-foreground flex items-center gap-1.5">
            <TrendingUp size={14} className="text-primary" />
            Recent Additions
          </h3>
          <button
            onClick={() => onNavigate("wardrobe")}
            className="text-[10px] text-primary font-display font-medium"
          >
            View All →
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-1">
          {recentItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex-shrink-0 w-28 rounded-xl overflow-hidden bg-card border border-border shadow-card"
            >
              <div className="aspect-square overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-2">
                <p className="text-[10px] font-display font-semibold text-foreground truncate">{item.name}</p>
                <p className="text-[9px] text-muted-foreground">{item.brand}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Style Insight */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-4 rounded-xl bg-secondary/50 border border-border"
      >
        <div className="flex items-start gap-2">
          <Sparkles size={14} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs font-display font-bold text-foreground">Today's Style Insight</p>
            <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
              Your wardrobe leans towards dark neutrals. Consider adding a warm earthy tone like terracotta or olive to expand your outfit combinations by 40%.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeView;
