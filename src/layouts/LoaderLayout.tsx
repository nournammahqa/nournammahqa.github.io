import { FC, ReactNode } from "react";

const LoaderLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default LoaderLayout;
