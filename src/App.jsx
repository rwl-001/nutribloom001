import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import ToastBanner from './components/ToastBanner';
import QuickConsultationModal from './components/QuickConsultationModal';
import NutritionQuizModal from './components/NutritionQuizModal';
import RecipeDetailModal from './components/RecipeDetailModal';
import DailyJournalModal from './components/DailyJournalModal';
import HomePage from './pages/HomePage';
import PlansPage from './pages/PlansPage';
import RecipesPage from './pages/RecipesPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  // Sync state with URL hash for proper routing
  const getInitialRoute = () => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'nutrition-plans', 'healthy-recipes', 'about-us'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [currentPath, setCurrentPath] = useState(getInitialRoute);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [activeRecipeModal, setActiveRecipeModal] = useState(null);
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });
  const [favorites, setFavorites] = useState({});

  // Daily Journal State
  const [loggedMeals, setLoggedMeals] = useState([
    {
      title: 'Oats Breakfast Bowl',
      calories: 310,
      protein: '11g',
      fiber: '9g',
      time: '08:15 AM'
    },
    {
      title: 'Paneer Protein Salad',
      calories: 385,
      protein: '24g',
      fiber: '6g',
      time: '01:30 PM'
    }
  ]);
  const [waterGlasses, setWaterGlasses] = useState(4);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'nutrition-plans', 'healthy-recipes', 'about-us'].includes(hash)) {
        setCurrentPath(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path) => {
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toast notification helper
  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3200);
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, visible: false }));
  };

  // Toggle favorite recipe
  const handleToggleFavorite = (recipeId, recipeTitle) => {
    setFavorites((prev) => {
      const isFav = !!prev[recipeId];
      const updated = { ...prev, [recipeId]: !isFav };
      if (isFav) {
        showToast(`Removed "${recipeTitle}" from favorites`);
      } else {
        showToast(`Saved "${recipeTitle}" to your meal library!`);
      }
      return updated;
    });
  };

  // Log meal into daily journal
  const handleLogMeal = (meal) => {
    const mealObj = typeof meal === 'string'
      ? { title: meal, calories: 380, protein: '20g', fiber: '7g', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      : {
          title: meal.title,
          calories: meal.calories || 350,
          protein: meal.protein || '18g',
          fiber: meal.fiber || '6g',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

    setLoggedMeals((prev) => [mealObj, ...prev]);
    showToast(`Logged "${mealObj.title}" into your Daily Nutrition Journal!`);
  };

  const handleRemoveMeal = (index) => {
    setLoggedMeals((prev) => {
      const removed = prev[index];
      const updated = prev.filter((_, i) => i !== index);
      if (removed) {
        showToast(`Removed "${removed.title}" from today's journal`);
      }
      return updated;
    });
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col relative selection:bg-secondary-container selection:text-on-secondary-container font-sans antialiased">
      
      {/* Persistent Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenJournal={() => setIsJournalOpen(true)}
        journalCount={loggedMeals.length}
      />

      {/* Interactive Global Toast Banner */}
      <ToastBanner toast={toast} onClose={hideToast} />

      {/* Main Dynamic View Area */}
      <main className="flex-1 w-full pt-16 md:pt-20">
        {currentPath === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenRecipeDetail={(recipe) => setActiveRecipeModal(recipe)}
            showToast={showToast}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {currentPath === 'nutrition-plans' && (
          <PlansPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />
        )}

        {currentPath === 'healthy-recipes' && (
          <RecipesPage
            onOpenRecipeDetail={(recipe) => setActiveRecipeModal(recipe)}
            showToast={showToast}
            onLogMealToJournal={handleLogMeal}
          />
        )}

        {currentPath === 'about-us' && (
          <AboutPage showToast={showToast} />
        )}
      </main>

      {/* Persistent Mobile Bottom Navigation Bar */}
      <BottomNav
        currentPath={currentPath}
        onNavigate={navigateTo}
      />

      {/* Quick Consultation Modal */}
      <QuickConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        showToast={showToast}
      />

      {/* 2-Minute Nutrition Diagnostic Quiz Modal */}
      <NutritionQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectPlan={(plan) => {
          setIsQuizOpen(false);
          navigateTo('nutrition-plans');
          showToast(`Viewing recommended: ${plan.title}`);
        }}
      />

      {/* Detailed Recipe Modal */}
      <RecipeDetailModal
        recipe={activeRecipeModal}
        isOpen={!!activeRecipeModal}
        onClose={() => setActiveRecipeModal(null)}
        onLogMeal={(title) => {
          handleLogMeal(title);
        }}
      />

      {/* Daily Nutrition Journal Modal */}
      <DailyJournalModal
        isOpen={isJournalOpen}
        onClose={() => setIsJournalOpen(false)}
        loggedMeals={loggedMeals}
        onRemoveMeal={handleRemoveMeal}
        waterGlasses={waterGlasses}
        onAddWater={() => setWaterGlasses((prev) => Math.min(prev + 1, 12))}
        onResetWater={() => setWaterGlasses(0)}
      />

    </div>
  );
}
