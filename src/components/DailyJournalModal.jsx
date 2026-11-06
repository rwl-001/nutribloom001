import React from 'react';

export default function DailyJournalModal({
  isOpen,
  onClose,
  loggedMeals,
  onRemoveMeal,
  waterGlasses,
  onAddWater,
  onResetWater
}) {
  if (!isOpen) return null;

  // Calculate totals
  const totalCalories = loggedMeals.reduce((acc, m) => acc + (m.calories || 0), 0);
  const totalProtein = loggedMeals.reduce((acc, m) => {
    const val = parseInt(m.protein, 10) || 0;
    return acc + val;
  }, 0);
  const totalFiber = loggedMeals.reduce((acc, m) => {
    const val = parseInt(m.fiber, 10) || 0;
    return acc + val;
  }, 0);

  const calorieTarget = 2000;
  const proteinTarget = 110;
  const fiberTarget = 35;
  const calPercent = Math.min(Math.round((totalCalories / calorieTarget) * 100), 100);
  const proteinPercent = Math.min(Math.round((totalProtein / proteinTarget) * 100), 100);
  const fiberPercent = Math.min(Math.round((totalFiber / fiberTarget) * 100), 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-xl bg-surface-container-lowest rounded-3xl shadow-botanical-lg border border-surface-container overflow-hidden max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-surface-container-low border-b border-surface-container flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-secondary-container text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">
                menu_book
              </span>
            </div>
            <div>
              <span className="font-label-sm text-xs text-secondary uppercase tracking-wider font-semibold">
                Daily Intake Tracker
              </span>
              <h3 className="font-headline-sm text-xl text-primary font-bold leading-tight">
                Nutrition Journal
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6 no-scrollbar">

          {/* Daily Progress Gauge Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-surface-container-low flex flex-col items-center text-center border border-surface-container">
              <span className="font-label-sm text-xs text-on-surface-variant">Calories</span>
              <span className="font-headline-sm text-lg text-primary font-bold mt-0.5 tabular-nums">
                {totalCalories}
              </span>
              <span className="text-[11px] text-outline">/ {calorieTarget} kcal</span>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-300"
                  style={{ width: `${calPercent}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low flex flex-col items-center text-center border border-surface-container">
              <span className="font-label-sm text-xs text-on-surface-variant">Protein</span>
              <span className="font-headline-sm text-lg text-primary font-bold mt-0.5 tabular-nums">
                {totalProtein}g
              </span>
              <span className="text-[11px] text-outline">/ {proteinTarget}g goal</span>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-secondary h-full rounded-full transition-all duration-300"
                  style={{ width: `${proteinPercent}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low flex flex-col items-center text-center border border-surface-container">
              <span className="font-label-sm text-xs text-on-surface-variant">Fiber</span>
              <span className="font-headline-sm text-lg text-secondary font-bold mt-0.5 tabular-nums">
                {totalFiber}g
              </span>
              <span className="text-[11px] text-outline">/ {fiberTarget}g goal</span>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-secondary-fixed h-full rounded-full transition-all duration-300"
                  style={{ width: `${fiberPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Hydration Tracker */}
          <div className="p-4 rounded-2xl bg-secondary-container/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-secondary-container">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[26px] text-secondary">
                water_drop
              </span>
              <div>
                <span className="font-label-sm text-sm text-on-surface font-semibold block">
                  Cellular Hydration Tracker
                </span>
                <span className="text-xs text-on-surface-variant">
                  {waterGlasses} of 8 glasses logged ({waterGlasses * 250} ml)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onAddWater}
                className="px-3.5 py-1.5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-semibold flex items-center gap-1 transition-all shadow-xs"
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
                <span>+1 Glass</span>
              </button>
              {waterGlasses > 0 && (
                <button
                  onClick={onResetWater}
                  className="text-xs text-on-surface-variant hover:text-error underline px-1"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Today's Logged Meals List */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h4 className="font-headline-sm text-base text-on-surface font-semibold">
                Today's Logged Meals ({loggedMeals.length})
              </h4>
              <span className="text-xs text-outline">Tap trash to remove</span>
            </div>

            {loggedMeals.length > 0 ? (
              <div className="flex flex-col gap-2.5">
                {loggedMeals.map((meal, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-surface-container-low flex items-center justify-between gap-3 border border-surface-container hover:bg-surface-container transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-xs">
                        <span className="material-symbols-outlined text-[20px]">
                          restaurant
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-label-lg text-sm text-on-surface font-semibold truncate">
                          {meal.title}
                        </h5>
                        <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                          <span>{meal.calories} kcal</span>
                          <span>•</span>
                          <span>{meal.protein} Protein</span>
                          {meal.time && (
                            <>
                              <span>•</span>
                              <span>{meal.time}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveMeal(idx)}
                      className="w-8 h-8 rounded-full hover:bg-error/10 text-outline hover:text-error flex items-center justify-center transition-colors shrink-0"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        delete_outline
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 rounded-2xl bg-surface-container-low flex flex-col items-center text-center p-4 border border-dashed border-surface-container-highest">
                <span className="material-symbols-outlined text-[32px] text-outline mb-1">
                  lunch_dining
                </span>
                <p className="font-body-md text-sm text-on-surface-variant font-medium">
                  No meals logged yet today
                </p>
                <p className="text-xs text-outline max-w-xs mt-0.5">
                  Browse recipes or meal timelines and tap "Log into Daily Nutrition Journal" to begin tracking.
                </p>
              </div>
            )}
          </div>

          {/* Clinical Dietitian Daily Note */}
          <div className="p-4 rounded-2xl bg-surface-container-high/60 flex items-start gap-3 border border-surface-container">
            <span
              className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              clinical_notes
            </span>
            <div className="text-xs sm:text-sm text-on-surface leading-relaxed">
              <strong>Clinical Dietitian Note:</strong> Consistent prebiotic fiber intake throughout the day stabilizes the gut mucosal lining and prevents afternoon cortisol spikes.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

