import React from 'react';

export default function ToastBanner({ toast, onClose }) {
  if (!toast.visible) return null;

  return (
    <div
      role="alert"
      className="fixed top-20 left-4 right-4 max-w-md mx-auto z-50 transition-all duration-300 transform translate-y-0 opacity-100 flex items-center justify-between p-space-sm bg-primary text-on-primary rounded-full shadow-botanical-lg border border-primary-container"
    >
      <div className="flex items-center gap-space-xs pl-space-xs">
        <span className="material-symbols-outlined text-[19px] text-primary-fixed">
          {toast.type === 'error' ? 'error_outline' : 'check_circle'}
        </span>
        <span className="font-label-sm text-label-sm tracking-wide">
          {toast.message}
        </span>
      </div>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="w-7 h-7 rounded-full flex items-center justify-center bg-primary-container text-on-primary-container hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
      >
        <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
    </div>
  );
}

