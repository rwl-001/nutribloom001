import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { BRAND_CONFIG } from '../data/nutritionData';

export default function QuickConsultationModal({ isOpen, onClose, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    focus: 'Weight Management & Metabolic Reset',
    preferredTime: 'Morning (9am - 12pm EST)'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }

    if (showToast) {
      showToast(`Consultation requested for ${formData.name}!`);
    }

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-botanical-lg border border-surface-container overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-secondary-container/50 blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-secondary-container text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                task_alt
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
              Consultation Scheduled!
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
              Thank you, {formData.name}. Dr. Elena Vance's clinical desk will confirm your intake packet via email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">
                  support_agent
                </span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                  Clinical Intake Desk
                </span>
                <h3 className="font-headline-sm text-[22px] text-primary font-semibold leading-tight">
                  Book 1:1 Dietitian Discovery Call
                </h3>
              </div>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              A complimentary 15-minute diagnostic session to assess your metabolic history, lab biomarkers, and goals.
            </p>

            <div className="flex flex-col gap-3 mt-1">
              <div>
                <label className="font-label-sm text-label-sm text-on-surface block mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface block mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface block mb-1">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="font-label-sm text-label-sm text-on-surface block mb-1">
                  Clinical Concern / Focus Area
                </label>
                <select
                  value={formData.focus}
                  onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all"
                >
                  <option value="Weight Management & Metabolic Reset">Weight Management & Metabolic Reset</option>
                  <option value="PCOS, Insulin & Hormonal Health">PCOS, Insulin & Hormonal Health</option>
                  <option value="Gut Microbiome Restoration (IBS/Bloating)">Gut Microbiome Restoration (IBS/Bloating)</option>
                  <option value="Athletic Peak Performance & Fueling">Athletic Peak Performance & Fueling</option>
                  <option value="Comprehensive Lab / Blood Panel Audit">Comprehensive Lab / Blood Panel Audit</option>
                </select>
              </div>

              <div>
                <label className="font-label-sm text-label-sm text-on-surface block mb-1">
                  Preferred Consultation Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all"
                >
                  <option value="Morning (9am - 12pm EST)">Morning (9:00 AM – 12:00 PM EST)</option>
                  <option value="Afternoon (1pm - 4pm EST)">Afternoon (1:00 PM – 4:00 PM EST)</option>
                  <option value="Evening (4pm - 6pm EST)">Evening (4:00 PM – 6:00 PM EST)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all"
            >
              <span>Confirm Diagnostic Appointment</span>
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            </button>
            <div className="flex items-center justify-center gap-1.5 text-on-surface-variant text-[11px]">
              <span className="material-symbols-outlined text-[14px] text-secondary">lock</span>
              <span>100% HIPAA Compliant & Confidential</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

