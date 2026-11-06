import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { NUTRITION_QUIZ_QUESTIONS, NUTRITION_PLANS } from '../data/nutritionData';

export default function NutritionQuizModal({ isOpen, onClose, onSelectPlan }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [matchedPlan, setMatchedPlan] = useState(null);

  if (!isOpen) return null;

  const currentQ = NUTRITION_QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (option) => {
    const updated = { ...selectedAnswers, [currentStep]: option };
    setSelectedAnswers(updated);

    if (currentStep < NUTRITION_QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate recommendation based on first answer planId or category
      const planId = updated[0]?.planId || 'weight-management';
      const foundPlan = NUTRITION_PLANS.find((p) => p.id === planId) || NUTRITION_PLANS[0];
      setMatchedPlan(foundPlan);

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // safe fallback
      }
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setMatchedPlan(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm">
      <div
        className="relative w-full max-w-lg bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-botanical-lg border border-surface-container overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {!matchedPlan ? (
          <div className="flex flex-col gap-4">
            {/* Header with progress */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-on-surface-variant">
                <span className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  <span className="material-symbols-outlined text-[16px]">psychology_alt</span>
                  Clinical Diagnostic Quiz
                </span>
                <span className="font-label-sm text-label-sm font-semibold">
                  Question {currentStep + 1} of {NUTRITION_QUIZ_QUESTIONS.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStep + 1) / NUTRITION_QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question title */}
            <div className="pt-2">
              <h3 className="font-headline-sm text-[21px] text-on-surface font-semibold leading-snug">
                {currentQ.question}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Select the option that most honestly reflects your current lifestyle.
              </p>
            </div>

            {/* Options list */}
            <div className="flex flex-col gap-2.5 pt-2">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt)}
                  className="p-3.5 rounded-2xl text-left bg-surface-container-low hover:bg-secondary-container hover:text-primary transition-all flex items-center justify-between group border border-transparent hover:border-secondary/30"
                >
                  <span className="font-body-md text-sm font-medium text-on-surface group-hover:text-primary">
                    {opt.label}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary group-hover:translate-x-0.5 transition-all">
                    chevron_right
                  </span>
                </button>
              ))}
            </div>

            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="self-start text-xs font-semibold text-secondary hover:underline flex items-center gap-1 pt-1"
              >
                <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                Previous Question
              </button>
            )}
          </div>
        ) : (
          /* Recommended Result Screen */
          <div className="flex flex-col gap-4 text-center items-center py-2">
            <div className="w-14 h-14 rounded-full bg-secondary-container text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </div>

            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold tracking-wider">
                Personalized Assessment Result
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-semibold mt-1">
                Your Ideal Protocol: {matchedPlan.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mt-1">
                Based on your metabolic markers and schedule, this clinical pathway offers maximum bioavailability and cellular balance.
              </p>
            </div>

            {/* Plan Preview snippet */}
            <div className="w-full p-4 rounded-2xl bg-surface-container-low text-left flex items-center gap-3 border border-surface-container">
              <img
                src={matchedPlan.image}
                alt={matchedPlan.title}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <span className="font-label-sm text-[11px] text-secondary font-semibold uppercase">
                  {matchedPlan.badge}
                </span>
                <h4 className="font-headline-sm text-base text-on-surface font-semibold truncate">
                  {matchedPlan.title}
                </h4>
                <p className="font-label-sm text-xs text-primary font-semibold">
                  ${matchedPlan.price}{matchedPlan.period} • {matchedPlan.duration}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-2.5 pt-2">
              <button
                onClick={() => {
                  onClose();
                  if (onSelectPlan) onSelectPlan(matchedPlan);
                }}
                className="flex-1 py-3 px-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-sm font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <span>View Full Plan</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
              <button
                onClick={resetQuiz}
                className="py-3 px-4 rounded-full bg-surface-container text-on-surface-variant hover:text-primary font-label-md text-sm font-medium transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

