import { homePage } from "@db";
import { useEffect, useRef } from "react";

const TypeWriter = () => {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    let x = 1;
    const interval = setInterval(() => {
      if (ref.current) {
        ref.current.textContent = homePage.texts[x];
      }
      if (x < homePage.texts.length - 1) {
        x++;
      } else {
        x = 0;
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="type-writer z-50">
      <span className="hero-kicker">QA & Coordination Portfolio</span>
      <div className="hero-name uppercase">{homePage.name}</div>
      <h1 className="hero-title">QA Engineer and Project Coordinator for dependable product delivery.</h1>
      <span ref={ref} className="text sec-text xl:!text-xl">
        {" "}
        QA Engineer & Project Coordinator
      </span>
    </div>
  );
};

export default TypeWriter;
