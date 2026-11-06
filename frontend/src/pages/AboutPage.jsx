import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  BRAND_CONFIG,
  PHILOSOPHY_PILLARS,
  SERVICES_SUMMARY
} from '../data/nutritionData';

export default function AboutPage({ showToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    reason: 'weight',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // safe fallback
    }

    if (showToast) {
      showToast('Thank you! Your consultation request has been received.');
    }
  };

  return (
    <div className="flex flex-col w-full pb-16 md:pb-24">
      {/* Hero Section */}
      <section className="relative px-margin-mobile md:px-8 pt-space-md md:pt-12 pb-space-lg max-w-5xl mx-auto w-full flex flex-col gap-space-sm overflow-hidden">
        <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-xs font-semibold shadow-xs">
          <span
            className="material-symbols-outlined text-[16px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            nature_people
          </span>
          <span>Our Clinical Sanctuary</span>
        </div>

        <h1 className="font-headline-lg-mobile md:text-4xl text-primary tracking-tight font-semibold leading-tight">
          Your Partner in Better Nutrition
        </h1>

        <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-2xl">
          Empowering individuals to heal, thrive, and sustain vibrant health through personalized clinical nutrition and mindful eating.
        </p>

        {/* Warm Story Intro Card */}
        <div className="mt-space-sm bg-surface-container-lowest rounded-3xl p-space-md sm:p-space-lg shadow-botanical flex flex-col gap-space-sm border border-surface-container-low">
          <div className="flex items-center gap-space-xs text-secondary font-label-md text-sm font-semibold">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span>The NutriBloom Story</span>
          </div>

          <p className="font-body-sm text-sm text-on-surface leading-relaxed">
            NutriBloom was born out of shared frustration among clinical dietitians witnessing patient burnout from toxic diet culture, starvation routines, and erratic social media detoxes. We set out to bridge the gap between hospital-grade metabolic science and everyday kitchen warmth.
          </p>

          <div className="p-space-sm sm:p-space-md rounded-2xl bg-surface-container-low flex items-center gap-space-sm border border-surface-container">
            <span
              className="material-symbols-outlined text-primary text-[22px] shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              spa
            </span>
            <span className="font-label-lg text-sm sm:text-base text-primary italic font-serif">
              “Food is Medicine, Culture, and Joy.”
            </span>
          </div>
        </div>
      </section>

      {/* Founder / Lead Dietitian Profile Section */}
      <section className="px-margin-mobile md:px-8 py-space-md max-w-5xl mx-auto w-full flex flex-col gap-space-md">
        <div className="bg-surface-container-lowest rounded-3xl p-space-md sm:p-space-lg shadow-botanical flex flex-col gap-space-md relative overflow-hidden border border-surface-container-low">
          {/* Ambient organic tint backdrop */}
          <div className="absolute -right-12 -top-12 w-36 h-36 rounded-full bg-secondary-container/40 pointer-events-none blur-2xl" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-space-md">
            <div className="relative w-28 h-28 rounded-full p-1 bg-surface-container-low shadow-xs shrink-0">
              <img
                alt="Dr. Elena Vance, Lead Clinical Dietitian"
                className="w-full h-full object-cover rounded-full"
                src={BRAND_CONFIG.leadDietitianAvatar}
              />
              <div className="absolute bottom-1 right-1 bg-primary text-on-primary w-7 h-7 rounded-full flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[15px]">medical_services</span>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="font-headline-sm text-xl sm:text-2xl text-primary font-semibold">
                Dr. Elena Vance, MS, RD, CDN
              </h2>
              <span className="font-label-md text-sm text-secondary mt-0.5 font-medium">
                Chief Clinical Dietitian & Functional Nutrition Specialist
              </span>

              {/* Credential Pills */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 pt-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-xs flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[13px] text-secondary">school</span>
                  MS Columbia Univ.
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-xs flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[13px] text-secondary">workspace_premium</span>
                  10+ Yrs Clinical Exp.
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-xs flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[13px]">shield</span>
                  AND Member
                </span>
              </div>
            </div>
          </div>

          {/* Qualifications List */}
          <div className="bg-surface-container-low rounded-2xl p-space-sm sm:p-space-md flex flex-col gap-1.5 text-on-surface border border-surface-container">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">
                check_circle
              </span>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface leading-relaxed">
                <strong>Qualifications:</strong> Master of Science in Clinical Nutrition (Columbia Univ.), 10+ Years Hospital & Private Practice Experience, Certified Diabetes Care & Education Specialist (CDCES).
              </p>
            </div>
          </div>

          {/* Personal Quote Card */}
          <blockquote className="p-space-sm sm:p-space-md rounded-2xl bg-surface-container-high/60 text-on-surface-variant font-body-sm text-xs sm:text-sm italic leading-relaxed">
            “True health isn't measured by what you cut out, but by the wholesome nutrients you nourish your cells with every single day.”
          </blockquote>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="px-margin-mobile md:px-8 py-space-md max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
        <div className="bg-surface-container-lowest rounded-3xl p-space-md sm:p-space-lg shadow-botanical flex flex-col gap-space-xs border border-surface-container-low">
          <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              flag
            </span>
          </div>
          <h3 className="font-headline-sm text-lg text-primary font-semibold mt-1">
            Our Mission
          </h3>
          <p className="font-body-md text-sm text-on-surface leading-relaxed">
            To replace restrictive dieting with sustainable, bio-individual food wisdom that honors your unique body and metabolic signature.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-3xl p-space-md sm:p-space-lg shadow-botanical flex flex-col gap-space-xs border border-surface-container-low">
          <div className="w-10 h-10 rounded-full bg-surface-container-high text-primary flex items-center justify-center">
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              visibility
            </span>
          </div>
          <h3 className="font-headline-sm text-lg text-primary font-semibold mt-1">
            Our Vision
          </h3>
          <p className="font-body-md text-sm text-on-surface leading-relaxed">
            A world where preventative nutrition is accessible, transparent, and celebrated in every home as an empowering lifestyle foundation.
          </p>
        </div>
      </section>

      {/* Core Nutrition Philosophy (3 Pillars) */}
      <section className="px-margin-mobile md:px-8 py-space-md max-w-5xl mx-auto w-full flex flex-col gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-xs uppercase tracking-wider text-secondary font-semibold">
            Scientific Foundations
          </span>
          <h2 className="font-headline-lg-mobile md:text-3xl text-primary font-semibold">
            Our Core Nutrition Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-3xl p-space-md sm:p-space-lg shadow-botanical flex items-start gap-space-sm border border-surface-container-low"
            >
              <div className="p-2.5 rounded-full bg-surface-container-low text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  {pillar.icon}
                </span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-label-lg text-sm sm:text-base text-primary font-semibold">
                  {pillar.title}
                </h4>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Offered Summary Bento */}
      <section className="px-margin-mobile md:px-8 py-space-md max-w-5xl mx-auto w-full flex flex-col gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-xs uppercase tracking-wider text-secondary font-semibold">
            Clinical Pathways
          </span>
          <h2 className="font-headline-lg-mobile md:text-3xl text-primary font-semibold">
            Services We Offer
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
          {SERVICES_SUMMARY.map((service, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-3xl p-space-md shadow-botanical flex flex-col justify-between gap-space-sm border border-surface-container-low"
            >
              <div className="w-9 h-9 rounded-full bg-secondary-container text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">
                  {service.icon}
                </span>
              </div>
              <div>
                <h4 className="font-label-lg text-sm text-primary font-semibold leading-snug">
                  {service.title}
                </h4>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clean Contact Form & Clinic Location */}
      <section className="px-margin-mobile md:px-8 py-space-md max-w-5xl mx-auto w-full flex flex-col gap-space-md">
        <div className="bg-surface-container-lowest rounded-3xl p-space-md sm:p-space-lg shadow-botanical-lg flex flex-col gap-space-md border border-surface-container-low">
          <div>
            <h3 className="font-headline-sm text-xl text-primary font-semibold">
              Start Your Nutrition Journey
            </h3>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-1">
              Have a question or ready to schedule your initial consultation? Send us a message.
            </p>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-space-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-xs text-on-surface font-semibold" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-sm border border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all shadow-xs"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-xs text-on-surface font-semibold" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-sm border border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* Reason Dropdown */}
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-xs text-on-surface font-semibold" htmlFor="reason">
                  Reason for Consultation
                </label>
                <div className="relative">
                  <select
                    id="reason"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full appearance-none px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-sm border border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all shadow-xs pr-9"
                  >
                    <option value="weight">Weight Management</option>
                    <option value="pcos">PCOS & Hormones</option>
                    <option value="gut">Gut Health</option>
                    <option value="inquiry">General Inquiry</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-2.5 text-[18px] text-outline pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-xs text-on-surface font-semibold" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your health goals..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-sm border border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all shadow-xs"
                />
              </div>

              {/* Primary CTA Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-sm font-semibold shadow-xs active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-1"
              >
                <span>Send Consultation Request</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          ) : (
            /* Success State */
            <div className="p-space-md sm:p-space-lg rounded-2xl bg-secondary-container text-on-secondary-container flex flex-col items-center text-center gap-space-xs border border-secondary-container">
              <span
                className="material-symbols-outlined text-[36px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                task_alt
              </span>
              <h4 className="font-headline-sm text-lg text-primary font-semibold">
                Request Received
              </h4>
              <p className="font-body-sm text-sm text-on-surface max-w-sm">
                Thank you, {formData.fullName || 'friend'}! Our clinical coordinator will reach out within 24 business hours.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ fullName: '', email: '', reason: 'weight', message: '' });
                }}
                className="mt-2 text-xs font-semibold text-primary underline"
              >
                Send Another Inquiry
              </button>
            </div>
          )}

          {/* Direct Contact & Clinic Info */}
          <div className="pt-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-xs sm:text-sm border-t border-surface-container-low">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">
                location_on
              </span>
              <div>
                <span className="font-label-md text-xs sm:text-sm text-primary font-semibold block">
                  NutriBloom Clinic Sanctuary
                </span>
                <span>{BRAND_CONFIG.contact.address}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                call
              </span>
              <span>{BRAND_CONFIG.contact.clinicPhone} • {BRAND_CONFIG.contact.hours}</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="pt-space-xs flex flex-col gap-space-xs">
            <span className="font-label-sm text-xs text-outline uppercase tracking-wider font-semibold">
              Connect With Us
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <a
                className="h-9 px-3.5 rounded-full bg-surface-container-low text-primary flex items-center gap-1.5 font-label-sm text-xs font-medium hover:bg-secondary-container transition-colors"
                href="#instagram"
                onClick={(e) => e.preventDefault()}
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                <span>Instagram</span>
              </a>
              <a
                className="h-9 px-3.5 rounded-full bg-surface-container-low text-primary flex items-center gap-1.5 font-label-sm text-xs font-medium hover:bg-secondary-container transition-colors"
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
              >
                <span className="material-symbols-outlined text-[16px]">business_center</span>
                <span>LinkedIn</span>
              </a>
              <a
                className="h-9 px-3.5 rounded-full bg-surface-container-low text-primary flex items-center gap-1.5 font-label-sm text-xs font-medium hover:bg-secondary-container transition-colors"
                href="#podcast"
                onClick={(e) => e.preventDefault()}
              >
                <span className="material-symbols-outlined text-[16px]">podcasts</span>
                <span>Podcast</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

