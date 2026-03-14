import { motion } from "framer-motion";
import { mockUser, wardrobeItems } from "@/data/wardrobeData";
import heroAvatar from "@/assets/hero-avatar.png";
import { Settings, Edit3, BarChart3, Palette } from "lucide-react";

const ProfileView = () => {
  const colorCounts: Record<string, { hex: string; count: number }> = {};
  wardrobeItems.forEach((item) => {
    if (!colorCounts[item.color]) {
      colorCounts[item.color] = { hex: item.colorHex, count: 0 };
    }
    colorCounts[item.color].count++;
  });

  return (
    <div className="space-y-5">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-2xl overflow-hidden bg-gradient-card border border-border shadow-card"
      >
        <div className="h-28 overflow-hidden">
          <img src={heroAvatar} alt="" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="px-4 pb-4 -mt-10 relative">
          <div className="w-20 h-20 rounded-2xl border-4 border-card overflow-hidden shadow-card">
            <img src={heroAvatar} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="mt-2 flex items-start justify-between">
            <div>
              <h2 className="font-display text-lg font-bold text-foreground">{mockUser.name}</h2>
              <p className="text-xs text-muted-foreground">
                {mockUser.gender === "male" ? "♂" : "♀"} · {mockUser.height} · {mockUser.skinTone}
              </p>
            </div>
            <button className="p-2 rounded-xl bg-secondary text-secondary-foreground">
              <Settings size={16} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Style Score", value: mockUser.styleScore, icon: BarChart3, gradient: "text-gradient-gold" },
          { label: "Total Items", value: mockUser.totalItems, icon: Edit3, gradient: "text-gradient-rose" },
          { label: "Color Range", value: Object.keys(colorCounts).length, icon: Palette, gradient: "text-foreground" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-3 rounded-xl bg-card border border-border text-center"
          >
            <stat.icon size={16} className="mx-auto text-muted-foreground mb-1" />
            <p className={`font-display text-xl font-bold ${stat.gradient}`}>{stat.value}</p>
            <p className="text-[10px] text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Color Palette */}
      <div className="p-4 rounded-xl bg-card border border-border space-y-3">
        <h3 className="font-display text-sm font-bold text-foreground">Your Color Palette</h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(colorCounts).map(([color, data]) => (
            <div key={color} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary">
              <span
                className="w-3 h-3 rounded-full border border-border"
                style={{ backgroundColor: data.hex }}
              />
              <span className="text-[10px] text-secondary-foreground font-medium">{color}</span>
              <span className="text-[10px] text-muted-foreground">×{data.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Body Measurements */}
      <div className="p-4 rounded-xl bg-card border border-border space-y-3">
        <h3 className="font-display text-sm font-bold text-foreground">Body Profile</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Height", value: mockUser.height },
            { label: "Weight", value: mockUser.weight },
            { label: "Skin Tone", value: mockUser.skinTone },
            { label: "Gender", value: mockUser.gender },
          ].map((field) => (
            <div key={field.label} className="px-3 py-2 rounded-lg bg-secondary">
              <p className="text-[10px] text-muted-foreground">{field.label}</p>
              <p className="text-xs font-display font-semibold text-secondary-foreground capitalize">{field.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
