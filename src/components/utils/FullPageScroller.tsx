"use client";

import { useRef, useEffect } from "react";

export default function FullPageScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLElement[]>([]);
  let sectionIndex = 0;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    sectionRefs.current = Array.from(
      container.querySelectorAll("section")
    ) as HTMLElement[];

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (e.deltaY > 0) {
        // scroll down
        sectionIndex = Math.min(
          sectionIndex + 1,
          sectionRefs.current.length - 1
        );
      } else {
        // scroll up
        sectionIndex = Math.max(sectionIndex - 1, 0);
      }

      sectionRefs.current[sectionIndex].scrollIntoView({
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      {children}
    </div>
  );
}
