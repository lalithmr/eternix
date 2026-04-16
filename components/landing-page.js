"use client";

import { useEffect, useState } from "react";
import NavBar from "./nav-bar";
import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import ProgramsSection from "./programs-section";
import CtaSection from "./cta-section";
import Footer from "./footer";
import CoachSection from "./coach-section";

export default function LandingPage() {
  const [theme, setTheme] = useState("dark");
  const [showSeatAlert, setShowSeatAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSeatAlert(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("eternix_theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;
      setTheme(prefersLight ? "light" : "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("eternix_theme", newTheme);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animateCount = (element) => {
      if (!element || element.dataset.animated === "true") {
        return;
      }

      const target = Number(element.dataset.target);

      if (prefersReducedMotion) {
        element.textContent = target.toString();
        element.dataset.animated = "true";
        return;
      }

      const duration = 1600;
      const startTime = performance.now();

      const step = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.floor(target * eased).toString();

        if (progress < 1) {
          window.requestAnimationFrame(step);
          return;
        }

        element.textContent = target.toString();
        element.dataset.animated = "true";
      };

      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");

          if (entry.target.classList.contains("stat-card")) {
            const number = entry.target.querySelector(
              ".stat-number[data-target]"
            );
            if (number) {
              animateCount(number);
            }
          }

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="site-shell" data-theme={theme}>
      {showSeatAlert && (
        <div className="floating-alert slide-in-top">
          <div className="alert-content">
            <span className="alert-icon">🔥</span>
            <span className="alert-message">Hurry! Only a few seats left.</span>
          </div>
          <button
            className="close-alert-btn"
            onClick={() => setShowSeatAlert(false)}
            aria-label="Close alert"
          >
            &times;
          </button>
        </div>
      )}
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <main>
        <AboutSection />
        <ProgramsSection />
        <CoachSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
