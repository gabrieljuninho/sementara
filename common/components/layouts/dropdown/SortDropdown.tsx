"use client";

import React, { useEffect, useRef } from "react";

const SortDropdown = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      let newLeftValue;
      let newTopValue;

      if (screenWidth <= 755) {
        newLeftValue = 12;
      } else {
        const additionalWidth = screenWidth - 755;
        const halfAdditionalWidth = additionalWidth / 2;

        newLeftValue =
          12 +
          Math.floor(halfAdditionalWidth) +
          (additionalWidth % 2 === 0 ? 0 : 0.5);
      }

      if (screenHeight >= 344) {
        newTopValue = 0;
      } else {
        const reductionFactor = 1;
        newTopValue = Math.max(0, 344 - screenHeight) / reductionFactor;
      }

      if (dropdownRef.current) {
        dropdownRef.current.style.left = `${newLeftValue}px`;
      }

      if (dialogRef.current) {
        dialogRef.current.style.top = `${-newTopValue}px`;
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="pointer-events-none fixed top-[148px]">
      <div className="h-6 w-[79px]"></div>
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-start justify-start">
        <div className="pointer-events-auto relative top-full">
          <div
            ref={dialogRef}
            className="relative left-0 flex origin-[0%_top] flex-col-reverse items-center opacity-100 transition-all duration-[270ms]"
          >
            <div className="relative max-w-[calc(-24px+100vw)] overflow-hidden rounded-md bg-white pb-2 pt-3 shadow-dialog backdrop-filter-none">
              <div className="flex h-full max-h-[70vh] min-w-[180px] max-w-[calc(-24px+100vw)] flex-col">
                <div className="translate-z-0 z-[1] mb-0 mr-0 min-h-0 grow overflow-y-auto overflow-x-hidden">
                  <div tabIndex={0}>
                    <div>
                      <button
                        type="button"
                        tabIndex={-1}
                        className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                      >
                        <div className="flex min-h-7 w-full select-none items-center text-sm leading-[120%]">
                          <div className="mx-3 min-w-0 flex-auto">
                            <div className="truncate text-left">
                              Best matches
                            </div>
                          </div>
                        </div>
                      </button>
                      <button
                        type="button"
                        tabIndex={-1}
                        className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                      >
                        <div className="flex min-h-7 w-full select-none items-center text-sm leading-[120%]">
                          <div className="mx-3 min-w-0 flex-auto">
                            <div className="truncate text-left">
                              Last edited: Newest first
                            </div>
                          </div>
                        </div>
                      </button>
                      <button
                        type="button"
                        tabIndex={-1}
                        className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                      >
                        <div className="flex min-h-7 w-full select-none items-center text-sm leading-[120%]">
                          <div className="mx-3 min-w-0 flex-auto">
                            <div className="truncate text-left">
                              Last edited: Oldest first
                            </div>
                          </div>
                        </div>
                      </button>
                      <button
                        type="button"
                        tabIndex={-1}
                        className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                      >
                        <div className="flex min-h-7 w-full select-none items-center text-sm leading-[120%]">
                          <div className="mx-3 min-w-0 flex-auto">
                            <div className="truncate text-left">
                              Created: Newest first
                            </div>
                          </div>
                        </div>
                      </button>
                      <button
                        type="button"
                        tabIndex={-1}
                        className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                      >
                        <div className="flex min-h-7 w-full select-none items-center text-sm leading-[120%]">
                          <div className="mx-3 min-w-0 flex-auto">
                            <div className="truncate text-left">
                              Created: Oldest first
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <footer className="shrink-0"></footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortDropdown;
