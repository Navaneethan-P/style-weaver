import { useState } from "react";
import BottomNav from "@/components/drobe/BottomNav";
import HomeView from "@/components/drobe/HomeView";
import InventoryGrid from "@/components/drobe/InventoryGrid";
import MatchChecker from "@/components/drobe/MatchChecker";
import ProfileView from "@/components/drobe/ProfileView";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderView = () => {
    switch (activeTab) {
      case "home":
        return <HomeView onNavigate={setActiveTab} />;
      case "wardrobe":
        return (
          <div className="space-y-4">
            <div>
              <h1 className="font-display text-xl font-bold text-foreground">Your Wardrobe</h1>
              <p className="text-xs text-muted-foreground">Tap any item to see outfit combos</p>
            </div>
            <InventoryGrid />
          </div>
        );
      case "match":
        return (
          <div className="space-y-4">
            <div>
              <h1 className="font-display text-xl font-bold text-foreground">AI Style Match</h1>
              <p className="text-xs text-muted-foreground">Check if it matches your wardrobe</p>
            </div>
            <MatchChecker />
          </div>
        );
      case "profile":
        return <ProfileView />;
      default:
        return <HomeView onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-md mx-auto px-4 pt-6 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
