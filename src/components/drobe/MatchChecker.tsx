import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { wardrobeItems } from "@/data/wardrobeData";
import { useState } from "react";

const suggestions = [
  {
    query: "Dark blue pants",
    matches: [
      { item: wardrobeItems[3], reason: "Cream tones complement navy perfectly" },
      { item: wardrobeItems[0], reason: "Monochrome layering with your navy blazer" },
    ],
    aiTip: "You already own 3 tops that pair beautifully with dark blue pants. A burgundy accent from your hoodie could add depth.",
  },
  {
    query: "White sneakers outfit",
    matches: [
      { item: wardrobeItems[2], reason: "Dark jeans + white kicks = classic combo" },
      { item: wardrobeItems[3], reason: "Cream tee keeps the palette clean" },
    ],
    aiTip: "Your white sneakers are your most versatile item — they match 5 of your 6 items. Consider a statement sock to add personality.",
  },
];

const MatchChecker = () => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const current = suggestions[activeSuggestion];

  return (
    <div className="space-y-4">
      {/* AI Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-card border border-border"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
          <Sparkles size={16} className="text-primary-foreground" />
        </div>
        <div>
          <p className="text-xs font-display font-bold text-foreground">DROBE AI Stylist</p>
          <p className="text-[10px] text-muted-foreground">Analyzing your wardrobe palette...</p>
        </div>
      </motion.div>

      {/* Query Tabs */}
      <div className="flex gap-2">
        {suggestions.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveSuggestion(i)}
            className={`flex-1 px-3 py-2 rounded-xl text-xs font-display font-medium transition-all ${
              activeSuggestion === i
                ? "bg-gradient-gold text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            "{s.query}"
          </button>
        ))}
      </div>

      {/* AI Tip */}
      <motion.div
        key={activeSuggestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="p-4 rounded-xl bg-secondary/50 border border-border"
      >
        <div className="flex items-start gap-2">
          <Sparkles size={14} className="text-primary mt-0.5 flex-shrink-0" />
          <p className="text-xs text-foreground leading-relaxed">{current.aiTip}</p>
        </div>
      </motion.div>

      {/* Matches */}
      <div className="space-y-2">
        <p className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider">
          Best Matches in Your Wardrobe
        </p>
        {current.matches.map((match, i) => (
          <motion.div
            key={match.item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
          >
            <img
              src={match.item.image}
              alt={match.item.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-display font-semibold text-foreground">{match.item.name}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{match.reason}</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
              <Check size={12} className="text-primary-foreground" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-gold text-primary-foreground font-display font-bold text-sm shadow-gold transition-all hover:opacity-90">
        Try Full Outfit Builder
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default MatchChecker;
