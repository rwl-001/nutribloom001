import React from 'react';
import { BRAND_CONFIG } from '../data/nutritionData';

export default function Header({
  currentPath,
  onNavigate,
  onOpenConsultation,
  onOpenJournal,
  journalCount = 0
}) {
  const getPageTitle = () => {
    switch (currentPath) {
      case 'home':
        return 'Home';
      case 'nutrition-plans':
        return 'Nutrition Plans';
      case 'healthy-recipes':
        return 'Healthy Recipes';
      case 'about-us':
        return 'About Us';
      default:
        return 'Wellness';
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: 'eco' },
    { id: 'nutrition-plans', label: 'Plans', icon: 'assignment_turned_in' },
    { id: 'healthy-recipes', label: 'Recipes', icon: 'restaurant_menu' },
    { id: 'about-us', label: 'About Us', icon: 'spa' }
  ];

  return (
    <header className="fixed top-0 w-full z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe transition-all border-b border-surface-container/60">
      <div className="max-w-6xl mx-auto h-16 px-margin-mobile md:px-8 flex items-center justify-between">
        
        {/* Brand identity */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-space-sm group text-left focus:outline-none"
        >
          <img
            alt="NutriBloom Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src={BRAND_CONFIG.logoUrl}
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-[19px] tracking-tight text-primary leading-tight font-semibold">
              NutriBloom
            </span>
            <span className="font-label-sm text-[11px] text-on-surface-variant leading-none md:hidden">
              {getPageTitle()}
            </span>
            <span className="hidden md:inline font-label-sm text-[10px] text-secondary tracking-widest uppercase">
              Clinical Wellness
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-container-low/80 p-1.5 rounded-full border border-surface-container">
          {navLinks.map((link) => {
            const isActive = currentPath === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-xs'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[17px]">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action icons: Daily Journal, Quick Support Agent & Profile */}
        <div className="flex items-center gap-space-xs sm:gap-space-sm">
          {/* Daily Journal Tracker Button */}
          <button
            onClick={onOpenJournal}
            title="Daily Nutrition Journal"
            className="relative w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-primary bg-surface-container-low hover:bg-surface-container hover:scale-105 active:scale-95 transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[20px]">
              menu_book
            </span>
            {journalCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {journalCount}
              </span>
            )}
          </button>

          {/* Quick Consultation button */}
          <button
            onClick={onOpenConsultation}
            title="Book Quick Clinical Consultation"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-primary bg-surface-container-low hover:bg-surface-container hover:scale-105 active:scale-95 transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[20px]">
              support_agent
            </span>
          </button>

          {/* Profile Avatar */}
          <div
            className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 cursor-pointer group"
            onClick={() => onNavigate('about-us')}
            title="Lead Clinical Dietitian: Dr. Elena Vance"
          >
            <img
              alt="Dr. Elena Vance Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-secondary-container group-hover:ring-primary transition-all"
              src={BRAND_CONFIG.leadDietitianAvatar}
            />
            <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}
