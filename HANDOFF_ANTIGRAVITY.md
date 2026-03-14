# DROBE — Handoff Document for Antigravity Team

## Project Overview
**DROBE** is an AI-powered digital wardrobe management app that functions like a game inventory for clothing. Users store their real-world clothing items, get AI-powered outfit recommendations, and check color/style matching before purchasing new items.

---

## ✅ COMPLETED (Design & Frontend Foundation)

### Design System
- [x] Dark luxury editorial aesthetic with gold accents
- [x] Space Grotesk + DM Sans typography
- [x] Full HSL-based design token system in `index.css` + `tailwind.config.ts`
- [x] Custom utility classes: gradients, glass morphism, shadows, animations
- [x] Mobile-first responsive layout (max-w-md centered)

### Pages & Components Built
- [x] **Home Dashboard** (`src/components/drobe/HomeView.tsx`) — Avatar card, quick actions, recent items, AI insight
- [x] **Wardrobe Inventory** (`src/components/drobe/InventoryGrid.tsx`) — Category filter pills, responsive grid, item cards
- [x] **AI Match Checker** (`src/components/drobe/MatchChecker.tsx`) — Query-based outfit matching UI, AI tips
- [x] **Profile View** (`src/components/drobe/ProfileView.tsx`) — User stats, color palette analysis, body profile
- [x] **Bottom Navigation** (`src/components/drobe/BottomNav.tsx`) — Animated tab bar with spring transitions
- [x] **Avatar Card** (`src/components/drobe/AvatarCard.tsx`) — 3D avatar preview with stats
- [x] **Mock Data** (`src/data/wardrobeData.ts`) — Sample wardrobe items with images

---

## 🔧 REMAINING WORK

### Phase 1: Backend & Authentication (Priority: HIGH)
1. **User Authentication**
   - Sign up / login with email, Google, Apple
   - User profile creation flow (gender, measurements, skin tone)
   - Profile photo upload

2. **Database Schema**
   - `users` table — id, email, name, gender, height, weight, skin_tone, avatar_url
   - `wardrobe_items` table — id, user_id, name, category, color, color_hex, brand, image_url, tags[], purchase_date, price
   - `outfits` table — id, user_id, name, items[] (references wardrobe_items), occasion, rating
   - `user_roles` table — id, user_id, role (admin/user)
   - RLS policies for all tables

3. **Image Storage**
   - Bucket for wardrobe item photos
   - Image compression/optimization pipeline
   - Camera integration for mobile capture

### Phase 2: Core Features (Priority: HIGH)
4. **Add Item Flow**
   - Camera capture / photo upload
   - Auto-detect color from image (use AI vision)
   - Category auto-suggestion
   - Brand recognition (optional)
   - Form: name, category, color, brand, tags, occasion

5. **Item Detail View**
   - Full-screen item view
   - Edit/delete functionality
   - "Matches with" section showing compatible items
   - Wear history/frequency tracking

6. **Outfit Builder**
   - Drag-and-drop outfit creation
   - Save outfit combinations
   - Rate and favorite outfits
   - Calendar integration (what to wear today)

### Phase 3: AI Features (Priority: MEDIUM)
7. **AI Color Matching Engine**
   - Color wheel compatibility algorithm
   - Complementary, analogous, triadic color matching
   - Skin tone + clothing color harmony scoring
   - Seasonal color analysis (Spring/Summer/Autumn/Winter)

8. **AI Style Recommendations**
   - "Should I buy this?" checker — user uploads photo of item they want to buy
   - AI returns: matching items in wardrobe, suggested outfits, color compatibility score
   - Daily outfit suggestions based on weather, calendar, occasion
   - Style trend analysis

9. **3D Avatar System**
   - Generate 3D body model from measurements
   - Face photo integration for realistic avatar
   - Virtual try-on — place wardrobe items on avatar
   - Technologies to explore: Ready Player Me, three.js, or custom WebGL

### Phase 4: Social & Gamification (Priority: LOW)
10. **Style Score System**
    - Points for outfit variety, color harmony, item usage
    - Achievements: "Color Master", "Minimalist", "Fashion Forward"
    - Weekly style challenges

11. **Social Features**
    - Share outfits with friends
    - Style inspiration feed
    - Community color palettes

### Phase 5: Advanced Features (Priority: LOW)
12. **Shopping Integration**
    - Link to stores for recommended items
    - Price comparison
    - Wishlist with wardrobe compatibility score

13. **Analytics Dashboard**
    - Most worn items, cost-per-wear
    - Color distribution charts
    - Category balance analysis
    - Seasonal wardrobe reports

---

## 🛠 Technical Recommendations

### Mobile App Approach
- **Recommended**: PWA (Progressive Web App) for V1
  - Already mobile-optimized design
  - Camera access via browser APIs
  - Installable from browser
- **Future**: Consider Capacitor for native app store presence

### AI/ML Stack
- **Color Detection**: Use canvas + image sampling or cloud vision API
- **Matching Algorithm**: Start rule-based (color wheel), evolve to ML
- **3D Avatar**: Ready Player Me API or Three.js with custom models
- **Style AI**: Fine-tune on fashion datasets, or use GPT-4 Vision

### Database
- Enable Lovable Cloud for Supabase backend
- Use storage buckets for images
- Edge functions for AI processing

---

## 📁 File Structure

```
src/
├── assets/          # Generated images (hero, item photos)
├── components/
│   └── drobe/       # All DROBE components
│       ├── AvatarCard.tsx
│       ├── BottomNav.tsx
│       ├── HomeView.tsx
│       ├── InventoryGrid.tsx
│       ├── MatchChecker.tsx
│       └── ProfileView.tsx
├── data/
│   └── wardrobeData.ts  # Mock data & types
├── pages/
│   └── Index.tsx    # Main app shell with tab routing
└── index.css        # Design system tokens
```

---

## 🎨 Design Notes for Antigravity

- **DO NOT** change the core color palette (gold/charcoal/ivory) — it's the brand identity
- All new components MUST use design tokens from `index.css`, never hardcoded colors
- Maintain the editorial luxury aesthetic — think Balenciaga × RPG inventory
- Animations should be subtle and purposeful (framer-motion)
- Keep mobile-first approach (max-w-md container)
- New category icons should match the emoji style used in category pills

---

*Designed and handed off with 🔥 by the DROBE design team*
