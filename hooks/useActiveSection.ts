"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Professional active section detection using IntersectionObserver.
 * Returns the ID of the section that is currently most visible in the viewport.
 * 
 * Supports a "lock" mechanism to prevent updates during programmatic scrolling.
 * 
 * @param sectionIds - Array of section IDs to monitor (e.g., ["home", "skills", "projects"])
 * @returns Object with activeId and setActiveId function
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const isLockedRef = useRef(false);
  const lockTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const targetIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Track intersection ratios for all sections
    const visibilityMap = new Map<string, number>();

    // Initialize all sections with 0 visibility
    sectionIds.forEach((id) => {
      visibilityMap.set(id, 0);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        // COMPLETELY IGNORE all updates if locked during programmatic scroll
        if (isLockedRef.current) {
          return;
        }

        // Update visibility for each observed section
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        // Find the section with the highest visibility ratio
        let maxVisibility = 0;
        let mostVisibleId = sectionIds[0] ?? "";

        visibilityMap.forEach((ratio, id) => {
          // Only consider sections with at least 10% visibility
          if (ratio > maxVisibility && ratio >= 0.1) {
            maxVisibility = ratio;
            mostVisibleId = id;
          }
        });

        // Only update if we have a clearly visible section
        if (maxVisibility >= 0.1) {
          setActiveId(mostVisibleId);
        }
      },
      {
        // Account for fixed navbar height (80px) + buffer
        rootMargin: "-80px 0px -50% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    // Observe all sections
    const elements: Element[] = [];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        elements.push(element);
      }
    });

    // Cleanup
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      if (lockTimeoutRef.current) {
        clearTimeout(lockTimeoutRef.current);
      }
    };
  }, [sectionIds]);

  // Function to manually set active ID and lock observer updates
  const setActiveIdWithLock = (id: string, lockDuration = 1200) => {
    // CRITICAL: Lock FIRST, before any state changes
    // This prevents IntersectionObserver from processing queued callbacks
    isLockedRef.current = true;
    
    // Clear any existing timeout
    if (lockTimeoutRef.current) {
      clearTimeout(lockTimeoutRef.current);
    }
    
    // Now set the target section as active
    setActiveId(id);
    targetIdRef.current = id;
    
    // Unlock after the scroll animation completes
    lockTimeoutRef.current = setTimeout(() => {
      isLockedRef.current = false;
      // Ensure target section is still active after unlock
      if (targetIdRef.current) {
        setActiveId(targetIdRef.current);
        targetIdRef.current = null;
      }
    }, lockDuration);
  };

  return { activeId, setActiveId: setActiveIdWithLock };
}
