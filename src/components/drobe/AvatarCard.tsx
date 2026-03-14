import { motion } from "framer-motion";
import heroAvatar from "@/assets/hero-avatar.png";
import { mockUser } from "@/data/wardrobeData";

const AvatarCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-card border border-border shadow-card"
    >
      <div className="flex items-stretch">
        {/* Avatar Image */}
        <div className="relative w-32 flex-shrink-0">
          <img
            src={heroAvatar}
            alt="Your 3D Avatar"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-gradient-gold text-primary-foreground text-[10px] font-display font-bold px-2 py-0.5 rounded-full">
            3D AVATAR
          </div>
        </div>

        {/* Stats */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">{mockUser.name}</h2>
            <p className="text-muted-foreground text-xs mt-0.5">
              {mockUser.height} · {mockUser.weight} · {mockUser.skinTone}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="text-center">
              <p className="font-display text-xl font-bold text-gradient-gold">{mockUser.totalItems}</p>
              <p className="text-muted-foreground text-[10px]">Items</p>
            </div>
            <div className="text-center">
              <p className="font-display text-xl font-bold text-gradient-rose">{mockUser.outfitsMade}</p>
              <p className="text-muted-foreground text-[10px]">Outfits</p>
            </div>
            <div className="text-center">
              <p className="font-display text-xl font-bold text-foreground">{mockUser.styleScore}</p>
              <p className="text-muted-foreground text-[10px]">Score</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AvatarCard;
