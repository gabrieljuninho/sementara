"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const CreateByDropdown = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      let dropdownRefLeftValue;
      let dialogRefLeftValue;
      let newTopValue;

      if (screenWidth >= 469) {
        dialogRefLeftValue = 0;
      } else {
        const reductionFactor = 1;
        dialogRefLeftValue = Math.max(0, 469 - screenWidth) / reductionFactor;
      }

      if (dialogRef.current) {
        dialogRef.current.style.left = `-${dialogRefLeftValue}px`;
      }

      if (screenWidth <= 755) {
        dropdownRefLeftValue = 206.578;
      } else {
        const additionalWidth = screenWidth - 755;

        dropdownRefLeftValue = 206.578 + additionalWidth * 0.5;
      }

      if (dropdownRef.current) {
        dropdownRef.current.style.left = `${dropdownRefLeftValue}px`;
      }

      if (screenHeight >= 344) {
        newTopValue = 0;
      } else {
        const reductionFactor = 1;

        newTopValue = Math.max(0, 344 - screenHeight) / reductionFactor;
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
      <div className="h-6 w-[123px]"></div>
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-start justify-start">
        <div className="pointer-events-auto relative top-full">
          <div
            ref={dialogRef}
            className="relative flex origin-[0%_top] flex-col-reverse items-center opacity-100 transition-opacity duration-[270ms]"
          >
            <div className="relative max-w-[calc(-24px+100vw)] overflow-hidden rounded-md bg-white shadow-dialog backdrop-filter-none">
              <div className="flex h-full max-h-[40vh] w-[250px] min-w-[180px] max-w-[calc(-24px+100vw)] flex-col">
                <div className="shrink-0">
                  <div className="flex min-w-0 flex-1 flex-col items-stretch">
                    <div className="z-[1] mx-2 mb-0.5 mt-1.5 flex max-h-[20vh] min-h-[30px] cursor-text flex-nowrap items-start overflow-auto rounded bg-[rgba(242,241,238,0.6)] px-1.5 pb-px pt-1.5 text-xs shadow-search-dropdown">
                      <div className="flex min-w-0 grow flex-wrap">
                        <div className="font-size-inherit mb-1 ml-0 mr-1.5 mt-0 flex w-auto min-w-[60px] flex-[1_1_60px] items-center border-none bg-transparent p-0 leading-5">
                          <input
                            type="text"
                            placeholder="Search people"
                            className="font-size-inherit block h-[18px] w-full resize-none border-none bg-transparent p-0 leading-[inherit] outline-none"
                          />
                        </div>
                      </div>
                      <div className="shrink-0">
                        <button
                          type="button"
                          tabIndex={0}
                          className="mt-0.5 shrink-0 grow-0 cursor-pointer select-none rounded-[20px] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                        >
                          <svg
                            role="graphics-symbol"
                            viewBox="0 0 16 16"
                            className="block h-3.5 w-3.5 shrink-0 fill-[rgba(55,53,47,0.35)]"
                          >
                            <path d="M7.993 15.528a7.273 7.273 0 01-2.923-.593A7.633 7.633 0 012.653 13.3a7.797 7.797 0 01-1.633-2.417 7.273 7.273 0 01-.593-2.922c0-1.035.198-2.01.593-2.922A7.758 7.758 0 015.063.99 7.273 7.273 0 017.985.395a7.29 7.29 0 012.93.593 7.733 7.733 0 012.417 1.64 7.647 7.647 0 011.64 2.41c.396.914.594 1.888.594 2.923 0 1.035-.198 2.01-.593 2.922a7.735 7.735 0 01-4.058 4.05 7.272 7.272 0 01-2.922.594zM5.59 11.06c.2 0 .371-.066.513-.198L8 8.951l1.904 1.911a.675.675 0 00.498.198.667.667 0 00.491-.198.67.67 0 00.205-.49.64.64 0 00-.205-.491L8.981 7.969l1.92-1.911a.686.686 0 00.204-.491.646.646 0 00-.205-.484.646.646 0 00-.483-.205.67.67 0 00-.49.205L8 6.995 6.081 5.083a.696.696 0 00-.49-.19.682.682 0 00-.491.198.651.651 0 00-.198.49c0 .181.068.342.205.484l1.912 1.904-1.912 1.92a.646.646 0 00-.205.483c0 .19.066.354.198.49.136.132.3.198.49.198z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="translate-z-0 z-[1] mb-0 mr-0 min-h-0 grow overflow-y-auto overflow-x-hidden">
                  <div tabIndex={0}>
                    <div className="py-1.5">
                      <button
                        type="button"
                        className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded bg-[rgba(55,53,47,0.08)] transition-colors duration-[20ms] "
                      >
                        <div className="flex min-h-7 w-full select-none items-center text-sm leading-[120%]">
                          <div className="ml-2.5 mr-1 flex items-center justify-center">
                            <div>
                              <div className="rounded-[100%] bg-white shadow-none outline -outline-offset-1 outline-[rgba(227,226,224,0.5)]">
                                <div className="flex h-5 w-5 select-none items-center justify-center rounded-[100%] opacity-100">
                                  <div className="h-full w-full">
                                    <Image
                                      src="https://lh3.googleusercontent.com/a/ACg8ocJbFSvYxMnpXgDOIjvVsoRFva-VwFOMnPEr6osLxaDZ=s100"
                                      alt=""
                                      width={100}
                                      height={100}
                                      className="block h-full w-full rounded-[100%] object-cover"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ml-1.5 mr-3 min-w-0 flex-auto">
                            <div className="truncate text-left">Bing Code</div>
                          </div>
                        </div>
                      </button>
                      <div className="flex min-h-7 w-full select-none items-center text-sm leading-[120%]">
                        <div className="mx-3 min-w-0 flex-auto">
                          <div className="truncate text-left">
                            <span className="text-[rgba(55,53,47,0.65)]">
                              No results found.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateByDropdown;
