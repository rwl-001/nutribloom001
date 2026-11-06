import React, { useState } from 'react';
import {
  BRAND_CONFIG,
  CLINICAL_SERVICES,
  HOLISTIC_BENEFITS,
  RECIPES,
  TESTIMONIALS
} from '../data/nutritionData';

export default function HomePage({
  onNavigate,
  onOpenConsultation,
  onOpenRecipeDetail,
  showToast,
  favorites,
  onToggleFavorite
}) {
  // Cadence Slider State
  const [cadenceLevel, setCadenceLevel] = useState(2);

  // Testimonial Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const getCadenceData = (lvl) => {
    switch (Number(lvl)) {
      case 1:
        return {
          label: "Gentle Reset",
          fiber: "26g / day",
          anti: "+78% Bioactive"
        };
      case 2:
        return {
          label: "Balanced Restoration",
          fiber: "32g / day",
          anti: "+94% Bioactive"
        };
      case 3:
      default:
        return {
          label: "Athletic Vitality",
          fiber: "38g / day",
          anti: "+98% Bioactive"
        };
    }
  };

  const cadenceInfo = getCadenceData(cadenceLevel);

  const featuredMeals = RECIPES.filter((r) =>
    ["avocado-quinoa-bowl", "berry-chia-oats", "tofu-crunch-salad"].includes(r.id)
  );

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[activeTestimonial];

  return (
    <div className="flex flex-col w-full pb-16 md:pb-24">

      {/* Hero Section */}
      <section className="relative px-margin-mobile md:px-8 pt-space-lg md:pt-14 pb-space-xl overflow-hidden max-w-5xl mx-auto w-full">
        {/* Subtle Botanical Ambient Elements */}
        <div className="absolute -top-12 -right-16 w-64 h-64 rounded-full bg-secondary-container/40 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-56 h-56 rounded-full bg-surface-container-high/60 blur-2xl pointer-events-none" />

        <div className="relative flex flex-col items-start gap-space-md">
          {/* Clinical Badge */}
          <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container text-primary shadow-xs border border-surface-container-high">
            <span className="material-symbols-outlined text-[16px] text-secondary">
              verified
            </span>
            <span className="font-label-sm text-label-sm tracking-wide font-medium">
              Certified Clinical Dietetics
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-headline-lg-mobile md:text-5xl md:leading-[1.15] text-on-surface font-semibold tracking-tight">
            Nourish Your Body. <br />
            <span className="text-primary italic font-serif">
              Transform Your Life.
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-body-md md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Personalized, evidence-based nutrition plans and wholesome dietitian-crafted meals to heal your gut, optimize energy, and sustain long-term vitality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-space-sm pt-space-xs">
            <button
              onClick={() => onNavigate('nutrition-plans')}
              className="w-full sm:w-auto flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all active:scale-[0.98]"
            >
              <span>Explore Nutrition Plans</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
            <button
              onClick={() => onNavigate('healthy-recipes')}
              className="w-full sm:w-auto flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-full bg-surface-container text-primary font-label-lg text-label-lg shadow-xs hover:bg-surface-container-high transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[18px]">
                restaurant_menu
              </span>
              <span>Discover Recipes</span>
            </button>
          </div>

          {/* Quick Trust Indicators Bar */}
          <div className="w-full mt-space-md p-space-md rounded-2xl bg-surface-container-lowest shadow-botanical flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm border border-surface-container-low">
            <div className="flex items-center gap-space-xs">
              <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  4.9/5 Rating
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  1,200+ clients healed
                </span>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-surface-container-highest" />

            <div className="flex items-center gap-space-xs">
              <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[18px]">
                  chips
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  100% Science
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Peer-reviewed protocol
                </span>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-surface-container-highest" />

            <div className="flex items-center gap-space-xs">
              <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[18px]">
                  verified_user
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Board Certified
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Licensed Clinical Nutritionists
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Nutrition Services */}
      <section className="px-margin-mobile md:px-8 py-space-lg max-w-5xl mx-auto w-full flex flex-col gap-space-md">
        <div className="flex items-end justify-between">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
              Targeted Care
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Clinical Services
            </h2>
          </div>
          <button
            onClick={() => onNavigate('nutrition-plans')}
            className="font-label-md text-label-md text-primary flex items-center gap-0.5 hover:underline font-medium"
          >
            All Services
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        {/* Bento Service Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {CLINICAL_SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative p-space-lg rounded-3xl bg-surface-container-lowest shadow-botanical flex flex-col justify-between gap-space-sm group hover:shadow-botanical-lg transition-all border border-surface-container-low"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-12 h-12 rounded-2xl ${service.iconBg} ${service.iconColor} flex items-center justify-center`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {service.icon}
                  </span>
                </div>
                <span className="px-space-sm py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm font-medium">
                  {service.tag}
                </span>
              </div>

              <div>
                <h3 className="font-headline-sm text-lg text-on-surface font-semibold">
                  {service.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-space-xs flex items-center justify-between border-t border-surface-container-low/70">
                <span className="font-label-sm text-label-sm text-secondary font-medium">
                  {service.highlight}
                </span>
                <button
                  onClick={() => onNavigate('nutrition-plans')}
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Daily Balance Calculator Micro-Widget */}
      <section className="px-margin-mobile md:px-8 py-space-md max-w-5xl mx-auto w-full">
        <div className="p-space-lg rounded-3xl bg-secondary-container/45 flex flex-col gap-space-md relative overflow-hidden border border-secondary-container shadow-xs">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[20px]">
              tune
            </span>
            <span className="font-label-md text-label-md text-primary font-semibold tracking-wide">
              Your Balance Baseline
            </span>
          </div>

          <div>
            <p className="font-headline-sm text-xl text-on-surface font-medium">
              Adjust your daily activity goal
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              See immediate projected cellular renewal support.
            </p>
          </div>

          {/* Interactive Range Slider */}
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="flex justify-between items-center text-on-surface font-label-md text-label-md">
              <span className="text-on-surface-variant">Target Lifestyle Cadence</span>
              <span className="font-semibold text-primary px-3 py-0.5 rounded-full bg-white shadow-xs">
                {cadenceInfo.label}
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="3"
              step="1"
              value={cadenceLevel}
              onChange={(e) => setCadenceLevel(Number(e.target.value))}
              className="w-full accent-primary h-2.5 bg-surface-container-highest rounded-full cursor-pointer appearance-none"
            />

            <div className="flex justify-between text-[11px] text-on-surface-variant font-medium px-1">
              <span>Gentle Reset</span>
              <span>Balanced</span>
              <span>Athletic Vitality</span>
            </div>
          </div>

          {/* Dynamic Metrics Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-space-sm pt-space-xs max-w-xl">
            <div className="p-space-md rounded-2xl bg-surface-container-lowest/95 flex flex-col shadow-xs border border-white">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Recommended Fiber
              </span>
              <span className="font-headline-sm text-xl text-primary font-semibold mt-1 tabular-nums">
                {cadenceInfo.fiber}
              </span>
            </div>
            <div className="p-space-md rounded-2xl bg-surface-container-lowest/95 flex flex-col shadow-xs border border-white">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Anti-Inflammatory Index
              </span>
              <span className="font-headline-sm text-xl text-secondary font-semibold mt-1 tabular-nums">
                {cadenceInfo.anti}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Balanced Nutrition */}
      <section className="px-margin-mobile md:px-8 py-space-lg max-w-5xl mx-auto w-full flex flex-col gap-space-md">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
            Biological Synergy
          </span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
            Holistic Health Dividends
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Sustainable physiology designed to liberate you from restrictive diets.
          </p>
        </div>

        {/* 4 Clean Stat / Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
          {HOLISTIC_BENEFITS.map((b, idx) => (
            <div
              key={idx}
              className="p-space-md rounded-2xl bg-surface-container-lowest shadow-botanical flex items-start gap-space-sm border border-surface-container-low"
            >
              <div
                className={`w-10 h-10 rounded-xl ${b.bg} text-primary shrink-0 flex items-center justify-center`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {b.icon}
                </span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-label-lg text-label-lg text-on-surface font-semibold">
                  {b.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Healthy Meal Cards */}
      <section className="px-margin-mobile md:px-8 py-space-lg max-w-5xl mx-auto w-full flex flex-col gap-space-md">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
              Nourishing Kitchen
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Dietitian-Crafted Meals
            </h2>
          </div>
          <button
            onClick={() => onNavigate('healthy-recipes')}
            className="font-label-md text-label-md text-primary font-medium hover:underline inline-flex items-center"
          >
            View All
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        {/* Meal Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {featuredMeals.map((meal) => {
            const isFav = !!favorites[meal.id];
            return (
              <div
                key={meal.id}
                className="p-space-md rounded-3xl bg-surface-container-lowest shadow-botanical flex flex-col gap-space-sm border border-surface-container-low transition-all hover:shadow-botanical-lg"
              >
                <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-surface-container-high">
                  <img
                    className="w-full h-full object-cover"
                    src={meal.image}
                    alt={meal.imageAlt}
                  />

                  {/* High Fiber / Protein Badge */}
                  <div className="absolute top-3 left-3 px-space-sm py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-semibold shadow-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">eco</span>
                    <span>{meal.tags[0] || 'Nutrient Dense'}</span>
                  </div>

                  {/* Interactive Favorite Button */}
                  <button
                    onClick={() => {
                      onToggleFavorite(meal.id, meal.title);
                    }}
                    aria-label="Add to favorites"
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center transition-colors shadow-xs active:scale-90 ${
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
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-headline-sm text-base text-on-surface font-semibold line-clamp-1">
                    {meal.title}
                  </h3>
                  <div className="flex items-center gap-space-sm font-body-sm text-xs text-on-surface-variant">
                    <span className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        local_fire_department
                      </span>
                      {meal.calories} kcal
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[15px]">
                        timer
                      </span>
                      {meal.time}
                    </span>
                    <span>•</span>
                    <span className="text-secondary font-medium truncate">
                      {meal.tags[1] || 'Prebiotic'}
                    </span>
                  </div>
                </div>

                <div className="pt-space-xs flex items-center justify-between border-t border-surface-container-low">
                  <div className="flex gap-1.5 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-[11px]">
                      {meal.tags[0]?.split('•')[0]?.trim() || 'Wholesome'}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-[11px]">
                      {meal.protein} Protein
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenRecipeDetail(meal)}
                    className="font-label-sm text-xs text-primary font-semibold flex items-center gap-0.5 hover:underline"
                  >
                    View Recipe
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Recipes Link */}
        <button
          onClick={() => onNavigate('healthy-recipes')}
          className="w-full py-3.5 rounded-2xl bg-surface-container text-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-space-xs hover:bg-surface-container-high transition-colors"
        >
          <span>View All Recipes</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </section>

      {/* Client Testimonials Carousel Section */}
      <section className="px-margin-mobile md:px-8 py-space-lg max-w-5xl mx-auto w-full flex flex-col gap-space-md">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
              Patient Journey
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Transformative Outcomes
            </h2>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrevTestimonial}
              aria-label="Previous Testimonial"
              className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary active:scale-95 hover:bg-surface-container-high transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button
              onClick={handleNextTestimonial}
              aria-label="Next Testimonial"
              className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary active:scale-95 hover:bg-surface-container-high transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Active Carousel Card Container */}
        <div className="relative p-space-lg rounded-3xl bg-surface-container-lowest shadow-botanical flex flex-col gap-space-md transition-all duration-300 border border-surface-container-low">
          {/* Rating Stars & Badge */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5 text-secondary">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-primary font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span>Verified Patient</span>
            </div>
          </div>

          {/* Quote */}
          <p className="font-body-lg text-base sm:text-lg text-on-surface italic leading-relaxed">
            {currentTestimonial.quote}
          </p>

          {/* Client Bio & Attending Dietitian */}
          <div className="pt-space-xs flex items-center justify-between bg-surface-container-low p-space-sm sm:p-space-md rounded-2xl">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-primary font-semibold flex items-center justify-center text-[14px]">
                {currentTestimonial.avatar}
              </div>
              <div className="flex flex-col">
                <span className="font-label-lg text-sm sm:text-base text-on-surface font-semibold">
                  {currentTestimonial.author}
                </span>
                <span className="font-label-sm text-xs text-on-surface-variant">
                  {currentTestimonial.detail}
                </span>
              </div>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-label-sm text-xs text-secondary font-medium">
                Dietitian
              </span>
              <span className="font-label-sm text-xs text-on-surface-variant">
                {currentTestimonial.dietitian}
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center items-center gap-2 pt-space-xs">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTestimonial(i)}
              className={`rounded-full transition-all ${
                i === activeTestimonial
                  ? 'w-6 h-1.5 bg-primary'
                  : 'w-1.5 h-1.5 bg-surface-container-highest hover:bg-outline'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Clean Footer Section */}
      <footer className="mt-space-lg px-margin-mobile md:px-8 pt-space-xl pb-space-lg bg-surface-container-low rounded-t-3xl flex flex-col gap-space-lg max-w-5xl mx-auto w-full border-t border-surface-container">
        {/* Brand Summary & Mission */}
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[24px]">
              eco
            </span>
            <span className="font-headline-sm text-xl text-primary font-semibold">
              NutriBloom
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md leading-relaxed">
            Clinical precision meets organic wellness. Helping you build enduring metabolic vitality through bespoke nutritional biology.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md text-primary font-semibold uppercase tracking-wider">
            Quick Navigation
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs font-label-md text-label-md text-on-surface-variant">
            <button
              onClick={() => onNavigate('home')}
              className="py-1 hover:text-primary transition-colors flex items-center gap-1 text-left"
            >
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              Home
            </button>
            <button
              onClick={() => onNavigate('nutrition-plans')}
              className="py-1 hover:text-primary transition-colors flex items-center gap-1 text-left"
            >
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              Plans
            </button>
            <button
              onClick={() => onNavigate('healthy-recipes')}
              className="py-1 hover:text-primary transition-colors flex items-center gap-1 text-left"
            >
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              Recipes
            </button>
            <button
              onClick={() => onNavigate('about-us')}
              className="py-1 hover:text-primary transition-colors flex items-center gap-1 text-left"
            >
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              About Us
            </button>
          </div>
        </div>

        {/* Contact & Operating Information */}
        <div className="p-space-md rounded-2xl bg-surface-container-lowest flex flex-col gap-space-sm shadow-xs border border-surface-container">
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            Direct Clinical Desk
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-body-sm text-body-sm text-on-surface-variant">
            <a
              className="flex items-center gap-space-xs hover:text-primary transition-colors"
              href={`mailto:${BRAND_CONFIG.contact.email}`}
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">
                mail
              </span>
              {BRAND_CONFIG.contact.email}
            </a>
            <a
              className="flex items-center gap-space-xs hover:text-primary transition-colors"
              href={`tel:${BRAND_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">
                call
              </span>
              {BRAND_CONFIG.contact.phone}
            </a>
            <div className="flex items-center gap-space-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-secondary">
                schedule
              </span>
              {BRAND_CONFIG.contact.hours}
            </div>
          </div>
        </div>

        {/* Regulatory & Copyright Note */}
        <div className="pt-space-sm flex flex-col gap-space-xs text-center items-center">
          <div className="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Clinical Disclaimer</span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
            © 2025 NutriBloom Inc. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

