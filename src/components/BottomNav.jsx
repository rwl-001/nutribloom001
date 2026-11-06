import React from 'react';

export default function BottomNav({ currentPath, onNavigate }) {
  const items = [
    {
      id: 'home',
      label: 'Home',
      icon: 'eco'
    },
    {
      id: 'nutrition-plans',
      label: 'Plans',
      icon: 'assignment_turned_in'
    },
    {
      id: 'healthy-recipes',
      label: 'Recipes',
      icon: 'restaurant_menu'
    },
    {
      id: 'about-us',
      label: 'About Us',
      icon: 'spa'
    }
  ];

  return (
    <nav className="fixed bottom-0 w-full z-40 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(30,45,36,0.05)] border-t border-surface-container/50 md:hidden">
      <div className="flex items-center justify-around h-16 px-space-xs max-w-lg mx-auto">
        {items.map((item) => {
          const isActive = currentPath === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center min-w-[48px] min-h-[44px] flex-1 py-1 transition-all group ${
                isActive
                  ? 'text-primary font-semibold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <div
                className={`px-3 py-0.5 rounded-full transition-all duration-200 ${
                  isActive ? 'bg-secondary-container scale-105' : 'group-hover:bg-surface-container-low'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[22px] transition-transform ${
                    isActive ? 'font-semibold' : ''
                  }`}
                >
                  {item.icon}
                </span>
              </div>
              <span className="font-label-sm text-[11px] mt-0.5 tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

