"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

const PagesDropdown = () => {
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
        dropdownRefLeftValue = 329.719;
      } else {
        const additionalWidth = screenWidth - 755;

        dropdownRefLeftValue = 329.719 + additionalWidth * 0.5;
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
      <div className="h-6 w-[72px]"></div>
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
                            placeholder="Search pages"
                            className="font-size-inherit block h-[18px] w-full resize-none border-none bg-transparent p-0 leading-[inherit] outline-none"
                          />
                        </div>
                      </div>
                      <div className="shrink-0"></div>
                    </div>
                  </div>
                </div>
                <div className="translate-z-0 z-[1] mb-0 mr-0 grow overflow-y-auto overflow-x-hidden">
                  <div tabIndex={0}>
                    <div className="py-1.5">
                      <button
                        type="button"
                        tabIndex={-1}
                        className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                      >
                        <div className="flex min-h-7 w-full select-none items-center text-sm leading-[120%]">
                          <div className="ml-2.5 mr-1 flex items-center justify-center">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[0.25em]">
                              <span>
                                <svg
                                  role="graphics-symbol"
                                  viewBox="0 0 16 16"
                                  className="block h-[18px] w-[18px] shrink-0 fill-[rgb(145,145,142)]"
                                >
                                  <path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM10.4336 9.00098H5.42969C5.16992 9.00098 4.98535 9.19238 4.98535 9.43164C4.98535 9.67773 5.16992 9.86914 5.42969 9.86914H10.4336C10.6797 9.86914 10.8643 9.67773 10.8643 9.43164C10.8643 9.19238 10.6797 9.00098 10.4336 9.00098ZM10.4336 11.2979H5.42969C5.16992 11.2979 4.98535 11.4893 4.98535 11.7354C4.98535 11.9746 5.16992 12.1592 5.42969 12.1592H10.4336C10.6797 12.1592 10.8643 11.9746 10.8643 11.7354C10.8643 11.4893 10.6797 11.2979 10.4336 11.2979Z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="ml-1.5 mr-3 min-w-0 flex-auto">
                            <div className="truncate">
                              <div className="truncate text-left">Untitled</div>
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
                          <div className="ml-2.5 mr-1 flex items-center justify-center">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[0.25em]">
                              <span>
                                <svg
                                  role="graphics-symbol"
                                  viewBox="0 0 16 16"
                                  className="block h-[18px] w-[18px] shrink-0 fill-[rgb(145,145,142)]"
                                >
                                  <path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM10.4336 9.00098H5.42969C5.16992 9.00098 4.98535 9.19238 4.98535 9.43164C4.98535 9.67773 5.16992 9.86914 5.42969 9.86914H10.4336C10.6797 9.86914 10.8643 9.67773 10.8643 9.43164C10.8643 9.19238 10.6797 9.00098 10.4336 9.00098ZM10.4336 11.2979H5.42969C5.16992 11.2979 4.98535 11.4893 4.98535 11.7354C4.98535 11.9746 5.16992 12.1592 5.42969 12.1592H10.4336C10.6797 12.1592 10.8643 11.9746 10.8643 11.7354C10.8643 11.4893 10.6797 11.2979 10.4336 11.2979Z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="ml-1.5 mr-3 min-w-0 flex-auto">
                            <div className="truncate">
                              <div className="truncate text-left">
                                Getting Started
                              </div>
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
                          <div className="ml-2.5 mr-1 flex items-center justify-center">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[0.25em]">
                              <div>
                                <div className="h-full w-full">
                                  <Image
                                    src="https://www.notion.so/icons/user_lightgray.svg?mode=light"
                                    alt=""
                                    width={150}
                                    height={150}
                                    referrerPolicy="same-origin"
                                    className="block h-[19.2px] w-[19.2px] rounded object-cover transition-opacity duration-100"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ml-1.5 mr-3 min-w-0 flex-auto">
                            <div className="truncate">
                              <div className="truncate text-left">
                                Personal Home
                              </div>
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
                          <div className="ml-2.5 mr-1 flex items-center justify-center">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[0.25em]">
                              <div>
                                <div className="h-full w-full">
                                  <Image
                                    src="https://www.notion.so/icons/push-pin_lightgray.svg?mode=light"
                                    alt=""
                                    width={150}
                                    height={150}
                                    referrerPolicy="same-origin"
                                    className="block h-[19.2px] w-[19.2px] rounded object-cover transition-opacity duration-100"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ml-1.5 mr-3 min-w-0 flex-auto">
                            <div className="truncate">
                              <div className="truncate text-left">
                                Quick Note
                              </div>
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

export default PagesDropdown;
