import { CSSProperties, FC } from "react";

const Loader: FC<{ width: string; height: string; label?: string }> = ({
  height,
  width,
  label = "Loading",
}) => {
  return (
    <div
      className="brand-loader"
      style={{ width, height } as CSSProperties}
      aria-label={label}
      role="status"
    >
      <div className="brand-loader__glow"></div>
      <div className="brand-loader__ring">
        <span></span>
      </div>
      <div className="brand-loader__shimmer"></div>
    </div>
  );
};

export default Loader;
