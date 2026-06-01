import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mx = 0, my = 0, tx = 0, ty = 0;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx - 6 + 'px';
      cursor.style.top = my - 6 + 'px';
    };

    const animTrail = () => {
      tx += (mx - tx) * 0.12;
      ty += (my - ty) * 0.12;
      trail.style.left = tx - 18 + 'px';
      trail.style.top = ty - 18 + 'px';
      animationFrameId = requestAnimationFrame(animTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animTrail();

    // Setup hover effect for clickable elements globally
    const handleMouseEnter = () => cursor.style.transform = 'scale(2)';
    const handleMouseLeave = () => cursor.style.transform = 'scale(1)';

    const setupHoverListeners = () => {
      document.querySelectorAll('a, button, .btn, .skill-card, .project-card, .cert-card, .cert-btn').forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initial setup
    setTimeout(setupHoverListeners, 1000);

    // MutationObserver to attach to new elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          setupHoverListeners();
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      document.querySelectorAll('a, button, .btn, .skill-card, .project-card, .cert-card, .cert-btn').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-trail" ref={trailRef}></div>
    </>
  );
};

export default CustomCursor;
