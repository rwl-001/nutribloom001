# NutriBloom — Clinical Wellness & Nutrition Platform
### Converted from Google Stitch UI Design to Modern React + Tailwind CSS

This project is a high-fidelity conversion of the **Google Stitch** clinical nutrition UI design into a modern, production-grade **React** frontend. It implements the complete design system specified in `stitch_nutribloom_nutrition_platform/nutribloom_clinical_wellness/DESIGN.md`, combining **Contemporary Minimalist Wellness** with **Tactile Biophilic Softness**.

---

## 🌿 Overview & Architecture

NutriBloom balances scientific rigor with organic tranquility. It is crafted for individuals seeking personalized clinical nutrition, metabolic restoration, hormonal health (PCOS), and athletic performance.

### 📱 Design System & Tokens
- **Palette**: Deep botanical sage (`#294b37`, `#40634d`), Laurel sage (`#41674c`), Soft mint wash (`#c2edcb`), Earth brown (`#504235`), and Warm alabaster canvas (`#fbf9f5`).
- **Typography**: Inter across display, headlines, body, and micro-labels with tabular figures for clinical metrics.
- **Iconography**: Google Material Symbols Outlined with biophilic weight and fill states (`'FILL' 1`).
- **Responsive Shell**: Seamless mobile-first tabbed app shell with safe-area insets, expanding elegantly into a desktop widescreen portal with integrated header navigation.

---

## 🚀 Quick Start

### 1. Development Server
Run the local Vite development server:
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port indicated in your terminal).

### 2. Production Build
Create an optimized production bundle:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

---

## 🌟 Pages & Key Features

### 1. Home (`/` or `#home`)
- **Sticky Header**: Brand logo, page indicator, Dr. Elena Vance profile with live pulse status, and Quick Consultation action.
- **Hero Section**: Certified Clinical Dietetics badge, editorial typography, dual CTAs, and trust indicators (4.9/5 rating, 1,200+ clients healed, 100% science).
- **Clinical Services Bento Stack**: Highlighting Clinical Diet Consulting, Custom Meal Architect, and Bio-Individual Health Audits.
- **Interactive Daily Balance Calculator Micro-Widget**: Live cadence slider (Gentle Reset, Balanced Restoration, Athletic Vitality) dynamically recalculating recommended fiber intake and bioactive anti-inflammatory indices.
- **Biological Synergy Dividends**: Clean stat cards for sustained energy, gut microbiome repair, endocrine balance, and mindful eating.
- **Dietitian-Crafted Meals Showcase**: With interactive favorite heart buttons, macro tags, calories, and "View Recipe" triggers.
- **Patient Journey Testimonial Carousel**: Multi-slide carousel with animated transitions, 5-star ratings, verified patient badges, and attending dietitian credits.
- **Clinical Sanctuary Footer**: Mission summary, navigation links, direct clinical desk contacts, and regulatory disclaimers.

### 2. Nutrition Plans (`#nutrition-plans`)
- **Category Filter Tabs**: Instant filtering by *All Plans*, *Medical / Clinical*, *Lifestyle*, and *Athletic*.
- **Detailed Plan Cards**:
  - **Weight Management Plan** ($189/mo, 12 Weeks, Most Popular)
  - **Balanced Diet Plan** ($139/mo, Ongoing, Foundational)
  - **PCOS-Friendly Plan** ($219/mo, 16 Weeks, Hormonal Wellness)
  - **Sports Nutrition Plan** ($199/mo, Periodized Training, Performance)
- **Sample Balanced Day On NutriBloom**: Dynamic timeline with Breakfast, Lunch, Snacks, and Dinner slots displaying kcal, Protein, Carbs, Healthy Fats, Fiber, and clinical tips.
- **Full Day Totals Micro-Badge**: 1,460 kcal, 81g Protein, 36g Fiber.
- **Diagnostic Quiz & Consultation CTA**: Direct triggers for interactive assessment.

### 3. Healthy Recipes (`#healthy-recipes`)
- **Live Search & Filter Bar**: Instant multi-attribute search (titles and ingredients) with clear button.
- **Category Filter Pills**: All, Breakfast, Lunch, Dinner, Snacks with active counts.
- **Recipe Grid Cards**: High-definition culinary cards displaying prep times, calories, and clinical tags.
- **Featured Recipe Spotlight (Paneer Protein Salad)**:
  - Concentric SVG Macronutrient Arc Ring Gauge (Protein 24g, Fats 14g, Carbs 18g).
  - Interactive Key Ingredients Checklist with tap-to-strike-through functionality.
  - Numbered step-by-step preparation timeline.
  - "Log into Daily Nutrition Journal" micro-interaction with toast feedback.
- **Recipe Detail Modal**: Full-screen modal for any recipe with complete ingredient checklists and instructions.

### 4. About Us (`#about-us`)
- **Our Clinical Sanctuary Story**: Origin story bridging hospital-grade metabolic science with everyday kitchen warmth.
- **Dr. Elena Vance Profile**: Chief Clinical Dietitian credentials (MS Columbia Univ., 10+ Yrs Exp., AND Member), qualifications, and personal philosophy quote.
- **Mission & Vision**: Core institutional values.
- **3 Nutrition Pillars**: Evidence Over Trends, Bio-Individuality, and Sustainable Habits.
- **Interactive Consultation Form**: Name, email, clinical reason, message, with real-time validation, confetti burst, and confirmation card.
- **Sanctuary Location & Hours**: Physical clinic info, phone, and social channels.

### 5. Modals & Interactive Extras
- **Quick Consultation Modal**: 15-minute diagnostic scheduling dialog accessible from any page.
- **2-Minute Nutrition Diagnostic Quiz Modal**: 3-step interactive questionnaire with personalized plan recommendations and celebratory confetti.
- **Floating Toast Notification**: Responsive feedback for favorites, meal journaling, and booking requests.

---

## 📁 Project Structure

```text
├── index.html                   # HTML entry point with Inter & Material Symbols fonts
├── package.json                 # Project dependencies and build scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Design tokens mapped to Google Stitch specification
├── vite.config.js               # Vite bundler configuration
├── src/
│   ├── main.jsx                 # React root renderer
│   ├── App.jsx                  # Root state, routing, and modal coordinator
│   ├── index.css                # Tailwind directives, animations & biophilic shadow utilities
│   ├── data/
│   │   └── nutritionData.js     # Data store for recipes, plans, testimonials & services
│   ├── components/
│   │   ├── Header.jsx           # Fixed navigation header with desktop nav & profile
│   │   ├── BottomNav.jsx        # Mobile persistent navigation bar with active pills
│   │   ├── ToastBanner.jsx      # Animated toast notifications
│   │   ├── QuickConsultationModal.jsx # 1:1 Booking dialog with confetti
│   │   ├── NutritionQuizModal.jsx     # 2-minute diagnostic questionnaire
│   │   └── RecipeDetailModal.jsx      # In-depth recipe view with checkable ingredients
│   └── pages/
│       ├── HomePage.jsx         # Hero, Services, Cadence widget, Testimonials, Footer
│       ├── PlansPage.jsx        # Category filters, Plan cards, Sample day timeline
│       ├── RecipesPage.jsx      # Live search, Spotlight SVG chart, Ingredients list
│       └── AboutPage.jsx        # Story, Founder profile, Pillars, Contact form
└── stitch_nutribloom_nutrition_platform/  # Original Google Stitch design files & screens
```

