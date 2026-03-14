import { motion } from "framer-motion";
import { wardrobeItems, categories, type ClothingCategory } from "@/data/wardrobeData";
import { useState } from "react";
import { Plus } from "lucide-react";

const InventoryGrid = () => {
  const [activeCategory, setActiveCategory] = useState<ClothingCategory | "all">("all");

  const filtered = activeCategory === "all"
    ? wardrobeItems
    : wardrobeItems.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-4">
      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        <button
          onClick={() => setActiveCategory("all")}
          className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-display font-medium transition-all ${
            activeCategory === "all"
              ? "bg-gradient-gold text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-display font-medium transition-all ${
              activeCategory === cat.key
                ? "bg-gradient-gold text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="inventory-grid">
        {filtered.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="group relative rounded-xl overflow-hidden bg-card border border-border shadow-card cursor-pointer hover:border-primary/40 transition-all"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-2">
              <p className="text-xs font-display font-semibold text-foreground truncate">{item.name}</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span
                  className="w-3 h-3 rounded-full border border-border flex-shrink-0"
                  style={{ backgroundColor: item.colorHex }}
                />
                <span className="text-[10px] text-muted-foreground truncate">{item.brand}</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Add New Item */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: filtered.length * 0.05, duration: 0.3 }}
          className="aspect-square rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 text-muted-foreground hover:border-primary/40 hover:text-primary transition-all"
        >
          <Plus size={24} />
          <span className="text-[10px] font-display">Add Item</span>
        </motion.button>
      </div>
    </div>
  );
};

export default InventoryGrid;
