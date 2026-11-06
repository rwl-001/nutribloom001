import React, { useState } from 'react';

export default function RecipeDetailModal({ recipe, isOpen, onClose, onLogMeal }) {
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [logged, setLogged] = useState(false);

  if (!isOpen || !recipe) return null;

  const toggleIngredient = (idx) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleLog = () => {
    setLogged(true);
    if (onLogMeal) {
      onLogMeal(recipe.title);
    }
    setTimeout(() => {
      setLogged(false);
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-surface-container-lowest rounded-3xl shadow-botanical-lg border border-surface-container overflow-hidden max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative w-full h-56 sm:h-64 bg-surface-container shrink-0">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
            <div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-xs font-semibold mb-1 shadow-xs">
                <span className="material-symbols-outlined text-[14px]">restaurant_menu</span>
                {recipe.categoryLabel}
              </span>
              <h2 className="font-headline-sm text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm">
                {recipe.title}
              </h2>
            </div>
            <div className="bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full text-on-primary font-label-md text-xs sm:text-sm font-semibold shrink-0 shadow-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px]">local_fire_department</span>
              {recipe.calories} kcal
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex flex-col gap-5 no-scrollbar">
          
          {/* Quick Stats Bar */}
          <div className="grid grid-cols-4 gap-2 bg-surface-container-low p-3 rounded-2xl text-center">
            <div className="flex flex-col">
              <span className="text-[11px] text-on-surface-variant font-medium">Protein</span>
              <span className="font-headline-sm text-base text-primary font-bold">{recipe.protein}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-on-surface-variant font-medium">Carbs</span>
              <span className="font-headline-sm text-base text-primary font-bold">{recipe.carbs || '30g'}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-on-surface-variant font-medium">Healthy Fats</span>
              <span className="font-headline-sm text-base text-primary font-bold">{recipe.fats || '12g'}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-on-surface-variant font-medium">Fiber</span>
              <span className="font-headline-sm text-base text-secondary font-bold">{recipe.fiber || '8g'}</span>
            </div>
          </div>

          {/* Key Ingredients checklist */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-base font-semibold text-on-surface">
                Key Ingredients Checklist
              </h3>
              <span className="text-xs text-outline">Tap to check off</span>
            </div>

            <div className="flex flex-col gap-2">
              {(recipe.fullIngredients || recipe.ingredients).map((ing, idx) => {
                const isChecked = !!checkedIngredients[idx];
                return (
                  <label
                    key={idx}
                    onClick={() => toggleIngredient(idx)}
                    className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer"
                    />
                    <span
                      className={`text-sm text-on-surface transition-all ${
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

          {/* Step-by-Step Instructions */}
          {recipe.instructions && (
            <div className="flex flex-col gap-3">
              <h3 className="font-headline-sm text-base font-semibold text-on-surface">
                Preparation Steps
              </h3>
              <div className="relative pl-7 flex flex-col gap-3.5">
                <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-secondary-container" />
                {recipe.instructions.map((step, idx) => (
                  <div key={idx} className="relative flex flex-col gap-0.5">
                    <div className="absolute -left-7 top-0.5 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold shadow-xs">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={handleLog}
              disabled={logged}
              className={`w-full py-3.5 rounded-full font-label-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] ${
                logged
                  ? 'bg-secondary-container text-on-secondary-container'
                  : 'bg-primary hover:bg-primary-container text-on-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {logged ? 'check_circle' : 'bookmark_add'}
              </span>
              <span>
                {logged ? 'Logged in Daily Nutrition Journal!' : 'Log into Daily Nutrition Journal'}
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

