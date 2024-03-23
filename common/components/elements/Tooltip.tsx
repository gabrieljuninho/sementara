import { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
}

const Tooltip = ({ children }: TooltipProps) => {
  return (
    <div className="relative z-[100000000]">
      {children}
      <div className="absolute -right-2.5 top-1/2 z-[100000001] -translate-y-1/2 bg-black text-white">
        asiap
      </div>
    </div>
  );
};

export default Tooltip;
