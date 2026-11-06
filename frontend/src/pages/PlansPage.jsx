import React, { useState } from 'react';
import {
  NUTRITION_PLANS,
  SAMPLE_DAY_MEALS
} from '../data/nutritionData';

export default function PlansPage({
  onOpenConsultation,
  onOpenQuiz
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeMealSlot, setActiveMealSlot] = useState('breakfast');

  const categories = [
    { id: 'all', label: 'All Plans' },
    { id: 'clinical', label: 'Medical / Clinical' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'athletic', label: 'Athletic' }
  ];

  const filteredPlans = NUTRITION_PLANS.filter((plan) => {
    if (selectedCategory === 'all') return true;
    return plan.category === selectedCategory;
  });

  const currentMeal = SAMPLE_DAY_MEALS[activeMealSlot];

  return (
    <div className="flex flex-col w-full pb-16 md:pb-24">
      {/* Header Intro Section */}
      <section className="px-margin-mobile md:px-8 pt-space-md md:pt-12 pb-space-lg max-w-5xl mx-auto w-full flex flex-col">
        <div className="inline-flex items-center gap-space-xs self-start px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container mb-space-sm shadow-xs">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
            Clinical Guidance
          </span>
        </div>
        <h1 className="font-headline-lg-mobile md:text-4xl text-primary tracking-tight font-semibold">
          Find Your Perfect Nutrition Plan
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-2xl leading-relaxed">
          Scientifically calibrated dietary regimens formulated by certified clinical nutritionists to match your medical history and lifestyle.
        </p>

        {/* Category Filter Track */}
        <div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-space-sm -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 mt-space-md">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`shrink-0 px-4 py-2 rounded-full font-label-md text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-sm font-semibold'
                    : 'bg-surface-container-low text-primary hover:bg-surface-container font-medium'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Nutrition Plans Cards Grid */}
      <section className="px-margin-mobile md:px-8 flex flex-col gap-space-lg pb-space-xl max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {filteredPlans.map((plan) => (
            <article
              key={plan.id}
              className="plan-card w-full bg-surface-container-lowest rounded-3xl overflow-hidden shadow-botanical flex flex-col transition-all duration-300 hover:shadow-botanical-lg border border-surface-container-low"
            >
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-surface-container-low">
                <img
                  className="w-full h-full object-cover"
                  src={plan.image}
                  alt={plan.imageAlt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-on-primary font-label-sm text-xs shadow-xs flex items-center gap-1 font-semibold ${
                      plan.badgeVariant === 'tertiary'
                        ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                        : 'bg-primary text-on-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {plan.badgeIcon}
                    </span>
                    {plan.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full text-primary font-label-md text-xs font-medium shadow-xs">
                  {plan.duration}
                </div>
              </div>

              <div className="p-space-md sm:p-space-lg flex flex-col gap-space-sm flex-1 justify-between">
                <div>
                  <div className="flex items-baseline justify-between">
                    <h2 className="font-headline-sm text-xl text-on-surface font-semibold">
                      {plan.title}
                    </h2>
                    <span className="font-headline-sm text-xl text-primary font-bold">
                      ${plan.price}
                      <span className="font-label-sm text-xs text-on-surface-variant font-normal">
                        {plan.period}
                      </span>
                    </span>
                  </div>

                  <p className="font-body-sm text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="my-space-sm p-space-sm sm:p-space-md rounded-2xl bg-surface-container-low flex flex-col gap-2">
                    <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-semibold">
                      Clinical Highlights
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                      {plan.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-on-surface">
                          <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                            check_circle
                          </span>
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation(plan)}
                  type="button"
                  className="w-full mt-space-xs py-3.5 px-4 rounded-full bg-primary text-on-primary font-label-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary-container active:scale-[0.99] transition-all shadow-xs"
                >
                  <span>View Plan & Consultation</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Meal Plan Showcase */}
      <section className="px-margin-mobile md:px-8 py-space-xl bg-surface-container-low border-y border-surface-container">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col mb-space-md">
            <div className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm uppercase tracking-wider mb-1 font-semibold">
              <span className="material-symbols-outlined text-[16px]">restaurant</span>
              Nutrition in Action
            </div>
            <h2 className="font-headline-md text-2xl sm:text-3xl text-primary tracking-tight font-semibold">
              Sample Balanced Day On NutriBloom
            </h2>
            <p className="font-body-sm text-sm text-on-surface-variant mt-1">
              Tap each meal slot to review dietitian-designed macronutrient balance.
            </p>
          </div>

          {/* Meal Time Selector Tabs */}
          <div className="grid grid-cols-4 gap-1 p-1 bg-surface-container rounded-full mb-space-md max-w-lg">
            {['breakfast', 'lunch', 'snacks', 'dinner'].map((slot) => {
              const isActive = activeMealSlot === slot;
              return (
                <button
                  key={slot}
                  onClick={() => setActiveMealSlot(slot)}
                  type="button"
                  className={`py-2 rounded-full font-label-sm text-xs sm:text-sm text-center transition-all capitalize ${
                    isActive
                      ? 'bg-primary text-on-primary font-semibold shadow-xs'
                      : 'text-on-surface-variant hover:text-primary font-medium'
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>

          {/* Dynamic Meal Detail Card */}
          <div className="bg-surface-container-lowest rounded-3xl p-space-md sm:p-space-lg shadow-botanical border border-surface-container-low">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-xs text-secondary uppercase font-semibold">
                  {currentMeal.time}
                </span>
                <h3 className="font-headline-sm text-xl text-on-surface mt-1 font-semibold">
                  {currentMeal.title}
                </h3>
                <span className="font-body-sm text-sm text-on-surface-variant">
                  {currentMeal.subtitle}
                </span>
              </div>
              <div className="text-right">
                <span className="font-headline-sm text-2xl text-primary font-bold">
                  {currentMeal.calories}
                </span>
                <span className="font-label-sm text-xs text-on-surface-variant block">
                  kcal
                </span>
              </div>
            </div>

            {/* Macros bar */}
            <div className="mt-space-md pt-space-sm flex items-center justify-between bg-surface-container-low px-4 py-3 rounded-2xl">
              <div className="flex flex-col items-center">
                <span className="font-label-sm text-xs text-on-surface-variant">Protein</span>
                <span className="font-label-lg text-sm sm:text-base text-primary font-semibold">
                  {currentMeal.protein}
                </span>
              </div>
              <div className="h-6 w-px bg-outline-variant/30" />
              <div className="flex flex-col items-center">
                <span className="font-label-sm text-xs text-on-surface-variant">Carbs</span>
                <span className="font-label-lg text-sm sm:text-base text-primary font-semibold">
                  {currentMeal.carbs}
                </span>
              </div>
              <div className="h-6 w-px bg-outline-variant/30" />
              <div className="flex flex-col items-center">
                <span className="font-label-sm text-xs text-on-surface-variant">Healthy Fats</span>
                <span className="font-label-lg text-sm sm:text-base text-primary font-semibold">
                  {currentMeal.fats}
                </span>
              </div>
              <div className="h-6 w-px bg-outline-variant/30" />
              <div className="flex flex-col items-center">
                <span className="font-label-sm text-xs text-on-surface-variant">Fiber</span>
                <span className="font-label-lg text-sm sm:text-base text-secondary font-semibold">
                  {currentMeal.fiber}
                </span>
              </div>
            </div>

            <div className="mt-space-sm flex items-center gap-2 text-on-surface-variant text-xs sm:text-sm">
              <span className="material-symbols-outlined text-[18px] text-secondary">
                tips_and_updates
              </span>
              <span>{currentMeal.insight}</span>
            </div>
          </div>

          {/* Daily Total Micro-Badge */}
          <div className="mt-space-md p-space-sm sm:p-space-md rounded-2xl bg-secondary-container/50 flex flex-col sm:flex-row items-start sm:items-center justify-between text-on-secondary-container border border-secondary-container/60 gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-secondary">
                insights
              </span>
              <span className="font-label-md text-sm font-semibold">
                Full Day Totals
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs sm:text-sm font-medium">
              <span><strong>1,460</strong> kcal</span>
              <span><strong>81g</strong> Protein</span>
              <span><strong>36g</strong> Fiber</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quiz / Callout Banner */}
      <section className="p-margin-mobile md:px-8 py-space-xl max-w-5xl mx-auto w-full">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-on-primary p-space-lg sm:p-10 shadow-botanical-lg">
          <div className="relative z-10 flex flex-col gap-space-sm max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary-container self-start font-label-sm text-xs font-medium">
              <span className="material-symbols-outlined text-[15px]">psychology_alt</span>
              Personalized Assessment
            </div>

            <h2 className="font-headline-md text-2xl sm:text-3xl text-on-primary tracking-tight font-semibold">
              Not sure which plan fits your body?
            </h2>

            <p className="font-body-md text-sm sm:text-base text-on-primary-container leading-relaxed">
              Every metabolism is unique. Answer a few lifestyle questions or meet our registered dietitians to uncover your customized nutritional path.
            </p>

            <div className="flex flex-col sm:flex-row gap-space-sm mt-space-sm">
              <button
                onClick={onOpenQuiz}
                type="button"
                className="py-3.5 px-6 rounded-full bg-on-primary text-primary font-label-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-xs hover:bg-surface-container-lowest active:scale-[0.99] transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">quiz</span>
                <span>Take 2-Min Nutrition Quiz</span>
              </button>
              <button
                onClick={() => onOpenConsultation()}
                type="button"
                className="py-3.5 px-6 rounded-full bg-primary-container text-on-primary font-label-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary-container/80 transition-all border border-on-primary/20"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                <span>Book Dietitian Discovery Call</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Micro-banner */}
      <section className="px-margin-mobile md:px-8 pb-space-lg max-w-5xl mx-auto w-full flex items-center justify-around text-center text-on-surface-variant font-label-sm text-xs sm:text-sm">
        <div className="flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-secondary text-[22px]">
            medical_services
          </span>
          <span>Accredited Clinical Dietitians</span>
        </div>
        <div className="w-px h-8 bg-surface-container-high" />
        <div className="flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-secondary text-[22px]">
            sync_saved_locally
          </span>
          <span>Pause or Switch Anytime</span>
        </div>
        <div className="w-px h-8 bg-surface-container-high" />
        <div className="flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-secondary text-[22px]">
            lock_reset
          </span>
          <span>HIPAA Compliant Care</span>
        </div>
      </section>
    </div>
  );
}

