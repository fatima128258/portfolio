import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const navbarHeight = 80; // Fixed navbar height offset
  const targetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 800; // Consistent 800ms for all scrolls
  let startTime: number | null = null;

  // Easing function: smooth ease-in-out cubic
  function easeInOutCubic(t: number): number {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animate(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * easeProgress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
