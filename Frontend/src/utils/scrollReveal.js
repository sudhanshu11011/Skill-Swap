export const observeScrollReveal = () => {
  const elements = document.querySelectorAll(
    "[data-reveal], [data-stagger], [data-reveal-left], [data-reveal-right], [data-chat-message], [data-cta-content], [data-cta-buttons]",
  );

  if (!elements.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
};
