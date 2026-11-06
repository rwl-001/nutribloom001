import React, { useState } from 'react';
import { RECIPES } from '../data/nutritionData';

export default function RecipesPage({
  onOpenRecipeDetail,
  showToast,
  onLogMealToJournal,
  favorites = {},
  onToggleFavorite
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [loggedToJournal, setLoggedToJournal] = useState(false);

  const favCount = Object.values(favorites).filter(Boolean).length;

  const categories = [
    { id: 'all', label: 'All', icon: 'all_inclusive' },
    { id: 'favorites', label: `Favorites (${favCount})`, icon: 'favorite' },
    { id: 'breakfast', label: 'Breakfast', icon: 'bakery_dining' },
    { id: 'lunch', label: 'Lunch', icon: 'lunch_dining' },
    { id: 'dinner', label: 'Dinner', icon: 'dinner_dining' },
    { id: 'snacks', label: 'Snacks', icon: 'local_cafe' }
  ];

  const filteredRecipes = RECIPES.filter((r) => {
    let matchesCat = true;
    if (selectedCategory === 'favorites') {
      matchesCat = !!favorites[r.id];
    } else if (selectedCategory !== 'all') {
      matchesCat = r.category === selectedCategory;
    }

    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.ingredients.some((ing) => ing.toLowerCase().includes(q));
    return matchesCat && matchesQuery;
  });

  const toggleSpotlightIngredient = (idx) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleLogMeal = () => {
    setLoggedToJournal(true);
    if (onLogMealToJournal) {
      onLogMealToJournal({
        title: 'Paneer Protein Salad',
        calories: 385,
        protein: '24g',
        fiber: '6g'
      });
    } else if (showToast) {
      showToast('Added Paneer Protein Salad to your NutriBloom Journal!');
    }
    setTimeout(() => {
      setLoggedToJournal(false);
    }, 3200);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="flex flex-col w-full pb-16 md:pb-24">
      {/* Header Intro Section */}
      <section className="px-margin-mobile md:px-8 pt-space-md md:pt-12 pb-space-sm max-w-5xl mx-auto w-full flex flex-col">
        <div className="inline-flex items-center gap-space-xs self-start px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-xs mb-space-xs shadow-xs font-semibold">
          <span
            className="material-symbols-outlined text-[15px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            nutrition
          </span>
          <span>Holistic Culinary Rx</span>
        </div>
        <h1 className="font-headline-lg-mobile md:text-4xl text-primary tracking-tight leading-tight font-semibold">
          Healthy Eating Made Delicious
        </h1>
        <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-1.5 leading-relaxed max-w-2xl">
          Dietitian-approved, nutrient-dense recipes made with fresh whole foods. Easy to prepare, delicious to savor.
        </p>
      </section>

      {/* Search & Filter Bar Sticky Deck */}
      <section className="px-margin-mobile md:px-8 pt-space-xs pb-space-sm max-w-5xl mx-auto w-full flex flex-col gap-space-sm">
        {/* Search Input */}
        <div className="relative w-full shadow-xs rounded-2xl">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-primary">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search healthy recipes, ingredients (e.g. oats, paneer, smoothie)..."
            className="w-full pl-10 pr-10 py-3 bg-surface-container-lowest text-on-surface rounded-2xl font-body-sm text-sm placeholder:text-outline border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary/20 shadow-botanical transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-outline hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>

        {/* Category Filter Pills (Horizontal Scroll) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-label-md text-sm transition-all duration-200 shadow-xs shrink-0 ${
                  isActive
                    ? 'bg-primary text-on-primary font-semibold'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-medium'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={cat.id === 'favorites' ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {cat.icon}
                </span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Recipe Counter & Quick Filter Summary */}
      <div className="px-margin-mobile md:px-8 py-space-xs max-w-5xl mx-auto w-full flex items-center justify-between text-on-surface-variant text-xs sm:text-sm">
        <span className="font-label-sm">
          Showing {filteredRecipes.length} curated recipe{filteredRecipes.length !== 1 ? 's' : ''}
        </span>
        <span className="font-label-sm flex items-center gap-1 text-secondary font-medium">
          <span className="material-symbols-outlined text-[14px]">verified</span>
          Clinical Vetted
        </span>
      </div>

      {/* Featured Recipe Cards Grid */}
      <section className="px-margin-mobile md:px-8 py-space-xs max-w-5xl mx-auto w-full">
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredRecipes.map((recipe) => {
              const isFav = !!favorites[recipe.id];
              return (
                <article
                  key={recipe.id}
                  onClick={() => onOpenRecipeDetail(recipe)}
                  className="recipe-card bg-surface-container-lowest rounded-3xl p-3.5 flex flex-col gap-3 shadow-botanical hover:shadow-botanical-lg transition-all cursor-pointer border border-surface-container-low group relative"
                >
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={recipe.image}
                      alt={recipe.imageAlt}
                    />

                    {/* Category Tag */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-xs font-semibold shadow-xs">
                      <span className="material-symbols-outlined text-[14px]">
                        {recipe.category === 'breakfast'
                          ? 'wb_twilight'
                          : recipe.category === 'lunch'
                            ? 'lunch_dining'
                            : recipe.category === 'dinner'
                              ? 'dinner_dining'
                              : 'local_cafe'}
                      </span>
                      <span>{recipe.categoryLabel}</span>
                    </div>

                    {/* Favorite Heart Toggle Button */}
                    {onToggleFavorite && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(recipe.id, recipe.title);
                        }}
                        aria-label="Add to favorites"
                        className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center transition-colors shadow-xs active:scale-90 z-10 ${
                          isFav ? 'text-error' : 'text-on-surface-variant hover:text-error'
                        }`}
                      >
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: isFav ? "'FILL' 1" : "'FILL' 0" }}
                        >
                          {isFav ? 'favorite' : 'favorite_border'}
                        </span>
                      </button>
                    )}

                    {/* Calories Badge */}
                    <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/90 backdrop-blur-md text-on-primary font-label-sm text-xs font-semibold">
                      <span className="material-symbols-outlined text-[14px]">
                        local_fire_department
                      </span>
                      <span>{recipe.calories} kcal</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 px-1">
                    <div className="flex items-center justify-between">
                      <h2 className="font-headline-sm text-base text-on-surface font-semibold tracking-tight group-hover:text-primary transition-colors">
                        {recipe.title}
                      </h2>
                      <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-xs shrink-0">
                        <span className="material-symbols-outlined text-[15px]">
                          schedule
                        </span>
                        <span>{recipe.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
                      {recipe.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2.5 py-0.5 rounded-full font-label-sm text-[11px] font-medium ${
                            tIdx === 0
                              ? 'bg-secondary-container text-on-secondary-container'
                              : 'bg-surface-container text-on-surface-variant'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty Search or Favorites State */
          <div className="px-margin-mobile py-space-xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-3">
              <span className="material-symbols-outlined text-[32px]">
                {selectedCategory === 'favorites' ? 'favorite_border' : 'soup_kitchen'}
              </span>
            </div>
            <h3 className="font-headline-sm text-lg text-on-surface font-semibold">
              {selectedCategory === 'favorites'
                ? 'No favorite recipes saved yet'
                : 'No recipes matched'}
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant mt-1 max-w-xs">
              {selectedCategory === 'favorites'
                ? 'Tap the heart icon on any recipe to save it to your personal favorites library.'
                : 'Try searching for other wholesome ingredients like "oats", "paneer", or tap "All" to browse the full culinary collection.'}
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-sm font-semibold hover:bg-primary-container transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* Featured Recipe Spotlight / Deep-Dive Section */}
      <section className="px-margin-mobile md:px-8 pt-space-lg pb-space-md max-w-5xl mx-auto w-full">
        <div className="bg-surface-container-lowest rounded-3xl p-5 sm:p-7 shadow-botanical-lg flex flex-col gap-5 border border-surface-container-low">
          {/* Spotlight Header Badge */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-xs font-semibold">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <span>Featured Recipe Spotlight</span>
            </div>
            <div className="flex items-center gap-1 text-secondary font-label-sm text-xs font-medium">
              <span className="material-symbols-outlined text-[16px]">timer</span>
              <span>15 min total</span>
            </div>
          </div>

          {/* Title & Intro */}
          <div>
            <h2 className="font-headline-md text-xl sm:text-2xl text-primary tracking-tight font-semibold leading-snug">
              Paneer Protein Salad – Complete Breakdown
            </h2>
            <p className="font-body-sm text-sm text-on-surface-variant mt-1 leading-relaxed">
              Crafted by NutriBloom dietitians to deliver slow-digesting casein protein paired with crisp hydrating vegetables and cold-pressed botanical lipids.
            </p>
          </div>

          {/* Macronutrient Split Concentric Visual & Badges */}
          <div className="bg-surface-container-low rounded-2xl p-4 flex flex-col gap-3 border border-surface-container">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-sm text-on-surface font-semibold">
                Macro Distribution
              </span>
              <span className="font-label-sm text-xs text-primary font-medium">
                385 kcal total
              </span>
            </div>

            {/* Inline SVG Macronutrient Split Gauge */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  {/* Background Circle Track */}
                  <circle
                    cx="18"
                    cy="18"
                    fill="none"
                    r="14"
                    stroke="#E8F0EA"
                    strokeWidth="3.5"
                  />
                  {/* Carbs Arc (18g ~ 25%) */}
                  <circle
                    cx="18"
                    cy="18"
                    fill="none"
                    r="14"
                    stroke="#69594b"
                    strokeDasharray="22 78"
                    strokeDashoffset="0"
                    strokeWidth="3.5"
                  />
                  {/* Fats Arc (14g ~ 30%) */}
                  <circle
                    cx="18"
                    cy="18"
                    fill="none"
                    r="14"
                    stroke="#41674c"
                    strokeDasharray="26 74"
                    strokeDashoffset="-22"
                    strokeWidth="3.5"
                  />
                  {/* Protein Arc (24g ~ 45%) */}
                  <circle
                    cx="18"
                    cy="18"
                    fill="none"
                    r="14"
                    stroke="#294b37"
                    strokeDasharray="39 61"
                    strokeDashoffset="-48"
                    strokeWidth="3.5"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="font-label-md text-base text-primary font-bold">
                    24g
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant leading-none">
                    Protein
                  </span>
                </div>
              </div>

              {/* Macro Metric Pills */}
              <div className="w-full flex-1 grid grid-cols-3 gap-2">
                <div className="bg-surface-container-lowest p-2.5 rounded-xl flex flex-col items-center text-center shadow-xs border border-surface-container">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary mb-1" />
                  <span className="font-label-sm text-xs text-on-surface-variant">Protein</span>
                  <span className="font-label-md text-sm text-primary font-semibold">24g</span>
                </div>
                <div className="bg-surface-container-lowest p-2.5 rounded-xl flex flex-col items-center text-center shadow-xs border border-surface-container">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary mb-1" />
                  <span className="font-label-sm text-xs text-on-surface-variant">Healthy Fat</span>
                  <span className="font-label-md text-sm text-secondary font-semibold">14g</span>
                </div>
                <div className="bg-surface-container-lowest p-2.5 rounded-xl flex flex-col items-center text-center shadow-xs border border-surface-container">
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container mb-1" />
                  <span className="font-label-sm text-xs text-on-surface-variant">Carbs</span>
                  <span className="font-label-md text-sm text-tertiary-container font-semibold">18g</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Ingredients Checklist */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-base text-on-surface font-semibold tracking-tight">
                Key Ingredients
              </h3>
              <span className="font-label-sm text-xs text-outline">Tap to check off</span>
            </div>

            <div className="flex flex-col gap-2">
              {[
                "150g Low-fat cottage cheese (Paneer)",
                "1 cup diced English cucumbers & cherry tomatoes",
                "1 tbsp extra virgin olive oil & fresh lemon juice",
                "1 tsp roasted cumin powder & fresh mint leaves"
              ].map((ing, idx) => {
                const isChecked = !!checkedIngredients[idx];
                return (
                  <label
                    key={idx}
                    onClick={() => toggleSpotlightIngredient(idx)}
                    className="group flex items-center gap-3 p-3 bg-surface-container-low rounded-xl cursor-pointer transition-all hover:bg-surface-container border border-transparent hover:border-secondary/20"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer"
                    />
                    <span
                      className={`font-body-md text-sm text-on-surface transition-all ${
                        isChecked ? 'line-through text-outline' : ''
                      }`}
                    >
                      {ing}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Step-by-Step Preparation Track */}
          <div className="flex flex-col gap-3">
            <h3 className="font-headline-sm text-base text-on-surface font-semibold tracking-tight">
              Step-by-Step Preparation
            </h3>
            <div className="relative pl-7 flex flex-col gap-4">
              {/* Timeline Track Line */}
              <div className="absolute left-3 top-3 bottom-4 w-0.5 bg-secondary-container" />

              {/* Step 1 */}
              <div className="relative flex flex-col gap-0.5">
                <div className="absolute -left-7 top-0.5 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-xs font-bold shadow-xs">
                  1
                </div>
                <h4 className="font-label-lg text-sm text-on-surface font-semibold">
                  Prep the Protein Base
                </h4>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Lightly saute or cube raw cottage cheese into 1/2-inch uniform pieces for optimal dressing absorption.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col gap-0.5">
                <div className="absolute -left-7 top-0.5 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-xs font-bold shadow-xs">
                  2
                </div>
                <h4 className="font-label-lg text-sm text-on-surface font-semibold">
                  Crisp Veggie Medley
                </h4>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Toss crisp chopped cucumbers and halved cherry tomatoes together inside a pre-chilled ceramic bowl.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col gap-0.5">
                <div className="absolute -left-7 top-0.5 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-xs font-bold shadow-xs">
                  3
                </div>
                <h4 className="font-label-lg text-sm text-on-surface font-semibold">
                  Emulsify Dressing
                </h4>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Whisk freshly squeezed lemon juice, olive oil, and roasted cumin powder until smooth; drizzle gently over bowl.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col gap-0.5">
                <div className="absolute -left-7 top-0.5 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-xs font-bold shadow-xs">
                  4
                </div>
                <h4 className="font-label-lg text-sm text-on-surface font-semibold">
                  Garnish & Serve
                </h4>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Garnish generously with torn garden mint leaves and freshly cracked black peppercorns. Savor immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Action Button: Add to Today's Plan */}
          <button
            onClick={handleLogMeal}
            className={`w-full py-3.5 px-6 rounded-full font-label-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.98] ${
              loggedToJournal
                ? 'bg-secondary-container text-on-secondary-container'
                : 'bg-primary hover:bg-secondary text-on-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              {loggedToJournal ? 'check_circle' : 'bookmark_add'}
            </span>
            <span>
              {loggedToJournal ? 'Added to your NutriBloom Journal!' : 'Log into Daily Nutrition Journal'}
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
