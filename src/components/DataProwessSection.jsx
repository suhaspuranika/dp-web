import React, { useEffect, useRef } from "react";
import "./DataProwessSection.css";

/**
 * Props:
 *  - pattern: 'dots' | 'grid' | 'noise' | undefined
 *      choose the background pattern overlay (default: 'dots')
 */
const DataProwessSection = ({ pattern = "gird" }) => {
  const outerRingRef = useRef(null);
  const innerRingRef = useRef(null);
  const ringContainerRef = useRef(null);
  const decorationRef = useRef(null);
  const heroTitleRef = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const initRotatingBalls = () => {
      const outerRing = outerRingRef.current;
      const innerRing = innerRingRef.current;
      const ringContainer = ringContainerRef.current;

      if (!outerRing || !innerRing || !ringContainer) return;

      // clear existing
      outerRing.innerHTML = "";
      innerRing.innerHTML = "";

      // base sizing
      const size = Math.min(
        ringContainer.clientWidth || 80,
        ringContainer.clientHeight || 80
      );

      const radiusOuter = Math.round(size * 0.5);
      const radiusInner = Math.round(size * 0.18);

      const outerBallCount = 6;
      const innerBallCount = 6;

      const outerBallPixel = Math.max(10, Math.round(size * 0.25));
      const innerBallPixel = Math.max(6, Math.round(size * 0.1));

      // outer balls
      for (let i = 0; i < outerBallCount; i++) {
        const angle = (i * (360 / outerBallCount) * Math.PI) / 180;
        const x = radiusOuter * Math.cos(angle);
        const y = radiusOuter * Math.sin(angle);

        const ball = document.createElement("div");
        ball.className = "ball outer-ball";
        ball.style.width = `${outerBallPixel}px`;
        ball.style.height = `${outerBallPixel}px`;
        const half = outerBallPixel / 2;
        ball.style.left = `calc(50% + ${x}px - ${half}px)`;
        ball.style.top = `calc(50% + ${y}px - ${half}px)`;

        outerRing.appendChild(ball);
      }

      // inner balls
      for (let i = 0; i < innerBallCount; i++) {
        const angle = (i * (360 / innerBallCount) * Math.PI) / 180;
        const x = radiusInner * Math.cos(angle);
        const y = radiusInner * Math.sin(angle);

        const ball = document.createElement("div");
        ball.className = "ball inner-ball";
        ball.style.width = `${innerBallPixel}px`;
        ball.style.height = `${innerBallPixel}px`;
        const half = innerBallPixel / 2;
        ball.style.left = `calc(50% + ${x}px - ${half}px)`;
        ball.style.top = `calc(50% + ${y}px - ${half}px)`;

        innerRing.appendChild(ball);
      }

      // place decoration on 'p'
      const deco = decorationRef.current;
      const heroTitle = heroTitleRef.current;
      const line2 = line2Ref.current;
      if (deco && heroTitle && line2 && line2.firstChild) {
        // tweak offsets
        const X_TWEAK = -10; // move a little left
        const Y_TWEAK = 0;   // adjust up/down if needed

        try {
          const range = document.createRange();
          range.setStart(line2.firstChild, 0);
          range.setEnd(line2.firstChild, 1); // 'p'
          const pRect = range.getBoundingClientRect();
          const heroTitleRect = heroTitle.getBoundingClientRect();
          const line2Rect = line2.getBoundingClientRect();

          const pCenterX = pRect.left - heroTitleRect.left + pRect.width / 2;
          const pCenterY =
            line2Rect.top - heroTitleRect.top + line2Rect.height * 0.12;

          deco.style.position = "absolute";
          deco.style.left = `${pCenterX + X_TWEAK}px`;
          deco.style.top = `${pCenterY + Y_TWEAK}px`;
          deco.style.transform = "translate(-50%, -50%)";
          deco.style.pointerEvents = "none";
          deco.style.margin = "0";
          deco.style.padding = "0";
        } catch (e) {
          // fallback approximation
          const line2Rect = line2.getBoundingClientRect();
          const heroTitleRect = heroTitle.getBoundingClientRect();
          const computedStyle = window.getComputedStyle(line2);
          const fontSize = parseFloat(computedStyle.fontSize) || 16;
          const letterSpacing = parseFloat(computedStyle.letterSpacing) || 0;

          const approxCenterX = fontSize * 0.6 + letterSpacing / 2;
          const pCenterY =
            line2Rect.top - heroTitleRect.top + line2Rect.height * 0.12;

          deco.style.position = "absolute";
          deco.style.left = `${approxCenterX - 10}px`;
          deco.style.top = `${pCenterY}px`;
          deco.style.transform = "translate(-50%, -50%)";
          deco.style.pointerEvents = "none";
        }
      }
    };

    const positionBalls = () => {
      requestAnimationFrame(() => {
        initRotatingBalls();
        setTimeout(initRotatingBalls, 100);
      });
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(positionBalls);
    } else {
      positionBalls();
    }

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(initRotatingBalls, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // compute hero pattern class
  const patternClass =
    pattern === "grid"
      ? "hero--grid"
      : pattern === "noise"
      ? "hero--noise"
      : "hero--dots";

  return (
    <section id="home" className={`hero ${patternClass}`}>
      <div className="hero-content">
        <h1 className="hero-title" ref={heroTitleRef}>
          <div className="title-decoration" ref={decorationRef}>
            <div className="ring-container" ref={ringContainerRef}>
              <div className="ring outer-ring" ref={outerRingRef}></div>
              <div className="ring inner-ring" ref={innerRingRef}></div>
            </div>
          </div>
          <div className="main-title">
            <span className="line1">data</span>
            <span className="line2" ref={line2Ref}>
              prowess
            </span>
          </div>
        </h1>
        <p className="hero-tagline">
          SOFTWARE DEVELOPMENT AND CONSULTING COMPANY
        </p>
      </div>
    </section>
  );
};

export default DataProwessSection;
