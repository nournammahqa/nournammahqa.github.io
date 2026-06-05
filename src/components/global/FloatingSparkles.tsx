import { FC } from "react";
import "../../assets/sparkles.css";

const FloatingSparkles: FC = () => {
  const sparkles = Array.from({ length: 14 }, (_, i) => i);

  return (
    <div className="sparkles-container">
      {sparkles.map((i) => {
        const size = 6 + Math.random() * 14;

        return (
          <span
            key={`sparkle-${i}`}
            className="sparkle-dot"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingSparkles;
