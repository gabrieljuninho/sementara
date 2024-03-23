import { ReactNode } from "react";

import Sidebar from "./sidebar";

import SearchModal from "./modal/SearchModal";
import SearchDropdown from "./dropdown";

interface LayoutsProps {
  children: ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  return (
    <div className="relative h-screen overflow-hidden bg-transparent">
      <div className="h-full bg-white fill-current font-sans leading-normal text-[rgb(55,53,47)]">
        <div className="h-full">
          <div className="relative flex h-full w-screen cursor-text bg-white">
            <Sidebar />
            {children}
          </div>
        </div>
        <div className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-[999] overflow-hidden">
          <div className="relative z-0"></div>
          <SearchModal />
          <SearchDropdown />
        </div>
      </div>
    </div>
  );
};

export default Layouts;
