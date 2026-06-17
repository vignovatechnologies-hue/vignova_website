// src/lib/animations.ts
// Reduced durations for snappy page transitions

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, delay: i * 0.05 },
  }),
};