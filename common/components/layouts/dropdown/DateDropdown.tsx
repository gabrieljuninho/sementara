"use client";

import { useEffect, useRef } from "react";

const DateDropdown = () => {
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
    <div className="pointer-events-none fixed left-[706.875px] top-[148px]">
      <div className="h-6 w-[83px]"></div>
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-start justify-start">
        <div className="pointer-events-auto relative top-full">
          <div className="relative -top-[5px] left-0 flex origin-[0%_top] flex-col-reverse items-center opacity-100 transition-all duration-[270ms]">
            <div className="relative max-w-[calc(-24px+100vw)] overflow-hidden rounded-md bg-white pb-2 pt-3 shadow-dialog backdrop-filter-none">
              <div className="mx-3 flex items-center justify-between">
                <button
                  type="button"
                  tabIndex={0}
                  className="shrink-0 cursor-pointer select-none rounded px-0.5 pb-0.5 transition-colors duration-[20ms]"
                >
                  <div className="flex items-center fill-[rgba(55,53,47,0.35)] text-[13px] font-medium text-[rgba(55,53,47,0.65)]">
                    <span className="mr-1">Last edited</span>
                    <svg
                      role="graphics-symbol"
                      viewBox="0 0 30 30"
                      className="block h-2.5 w-2.5 shrink-0 fill-inherit"
                    >
                      <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon>
                    </svg>
                  </div>
                </button>
                <button
                  type="button"
                  tabIndex={0}
                  className="shrink-0 cursor-pointer select-none rounded fill-[rgba(55,53,47,0.35)] px-0.5 pb-0.5 text-[13px] font-medium text-[rgba(55,53,47,0.65)] transition-colors duration-[20ms]"
                >
                  Clear
                </button>
              </div>
              <div className="mb-[15px] mt-3 pb-[15px] shadow-divider">
                <button
                  type="button"
                  tabIndex={0}
                  className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                >
                  <div className="flex min-h-7 w-full select-none items-center text-sm leading-[120%]">
                    <div className="ml-2.5 mr-1 flex items-center justify-center">
                      <svg
                        role="graphics-symbol"
                        viewBox="0 0 16 16"
                        className="block h-[18px] w-[18px] shrink-0 fill-inherit"
                      >
                        <path d="M3.24902 14.7764H12.6621C14.1455 14.7764 14.918 14.0107 14.918 12.5479V4.22852C14.918 2.76562 14.1455 2 12.6621 2H3.24902C1.77246 2 1 2.75879 1 4.22852V12.5479C1 14.0107 1.77246 14.7764 3.24902 14.7764ZM3.24219 13.416C2.6748 13.416 2.36035 13.1221 2.36035 12.5205V6.23145C2.36035 5.62988 2.6748 5.33594 3.24219 5.33594H12.6689C13.2363 5.33594 13.5508 5.62988 13.5508 6.23145V12.5205C13.5508 13.1221 13.2363 13.416 12.6689 13.416H3.24219ZM6.63965 7.69434H7.04297C7.28906 7.69434 7.37109 7.61914 7.37109 7.37988V6.97656C7.37109 6.73047 7.28906 6.65527 7.04297 6.65527H6.63965C6.39355 6.65527 6.31152 6.73047 6.31152 6.97656V7.37988C6.31152 7.61914 6.39355 7.69434 6.63965 7.69434ZM8.875 7.69434H9.27832C9.51758 7.69434 9.59961 7.61914 9.59961 7.37988V6.97656C9.59961 6.73047 9.51758 6.65527 9.27832 6.65527H8.875C8.62891 6.65527 8.54688 6.73047 8.54688 6.97656V7.37988C8.54688 7.61914 8.62891 7.69434 8.875 7.69434ZM11.1035 7.69434H11.5068C11.7529 7.69434 11.835 7.61914 11.835 7.37988V6.97656C11.835 6.73047 11.7529 6.65527 11.5068 6.65527H11.1035C10.8643 6.65527 10.7822 6.73047 10.7822 6.97656V7.37988C10.7822 7.61914 10.8643 7.69434 11.1035 7.69434ZM4.41113 9.89551H4.80762C5.05371 9.89551 5.13574 9.82031 5.13574 9.57422V9.1709C5.13574 8.93164 5.05371 8.85645 4.80762 8.85645H4.41113C4.16504 8.85645 4.08301 8.93164 4.08301 9.1709V9.57422C4.08301 9.82031 4.16504 9.89551 4.41113 9.89551ZM6.63965 9.89551H7.04297C7.28906 9.89551 7.37109 9.82031 7.37109 9.57422V9.1709C7.37109 8.93164 7.28906 8.85645 7.04297 8.85645H6.63965C6.39355 8.85645 6.31152 8.93164 6.31152 9.1709V9.57422C6.31152 9.82031 6.39355 9.89551 6.63965 9.89551ZM8.875 9.89551H9.27832C9.51758 9.89551 9.59961 9.82031 9.59961 9.57422V9.1709C9.59961 8.93164 9.51758 8.85645 9.27832 8.85645H8.875C8.62891 8.85645 8.54688 8.93164 8.54688 9.1709V9.57422C8.54688 9.82031 8.62891 9.89551 8.875 9.89551ZM11.1035 9.89551H11.5068C11.7529 9.89551 11.835 9.82031 11.835 9.57422V9.1709C11.835 8.93164 11.7529 8.85645 11.5068 8.85645H11.1035C10.8643 8.85645 10.7822 8.93164 10.7822 9.1709V9.57422C10.7822 9.82031 10.8643 9.89551 11.1035 9.89551ZM4.41113 12.0898H4.80762C5.05371 12.0898 5.13574 12.0146 5.13574 11.7754V11.3721C5.13574 11.126 5.05371 11.0508 4.80762 11.0508H4.41113C4.16504 11.0508 4.08301 11.126 4.08301 11.3721V11.7754C4.08301 12.0146 4.16504 12.0898 4.41113 12.0898ZM6.63965 12.0898H7.04297C7.28906 12.0898 7.37109 12.0146 7.37109 11.7754V11.3721C7.37109 11.126 7.28906 11.0508 7.04297 11.0508H6.63965C6.39355 11.0508 6.31152 11.126 6.31152 11.3721V11.7754C6.31152 12.0146 6.39355 12.0898 6.63965 12.0898ZM8.875 12.0898H9.27832C9.51758 12.0898 9.59961 12.0146 9.59961 11.7754V11.3721C9.59961 11.126 9.51758 11.0508 9.27832 11.0508H8.875C8.62891 11.0508 8.54688 11.126 8.54688 11.3721V11.7754C8.54688 12.0146 8.62891 12.0898 8.875 12.0898Z"></path>
                      </svg>
                    </div>
                    <div className="ml-1.5 mr-3 min-w-0 flex-auto">
                      <div className="truncate text-left">Today</div>
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  tabIndex={0}
                  className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                >
                  <div className="flex min-h-7 w-full select-none items-center text-sm leading-[120%]">
                    <div className="ml-2.5 mr-1 flex items-center justify-center">
                      <svg
                        role="graphics-symbol"
                        viewBox="0 0 16 16"
                        className="block h-[18px] w-[18px] shrink-0 fill-inherit"
                      >
                        <path d="M3.24902 14.7764H12.6621C14.1455 14.7764 14.918 14.0107 14.918 12.5479V4.22852C14.918 2.76562 14.1455 2 12.6621 2H3.24902C1.77246 2 1 2.75879 1 4.22852V12.5479C1 14.0107 1.77246 14.7764 3.24902 14.7764ZM3.24219 13.416C2.6748 13.416 2.36035 13.1221 2.36035 12.5205V6.23145C2.36035 5.62988 2.6748 5.33594 3.24219 5.33594H12.6689C13.2363 5.33594 13.5508 5.62988 13.5508 6.23145V12.5205C13.5508 13.1221 13.2363 13.416 12.6689 13.416H3.24219ZM6.63965 7.69434H7.04297C7.28906 7.69434 7.37109 7.61914 7.37109 7.37988V6.97656C7.37109 6.73047 7.28906 6.65527 7.04297 6.65527H6.63965C6.39355 6.65527 6.31152 6.73047 6.31152 6.97656V7.37988C6.31152 7.61914 6.39355 7.69434 6.63965 7.69434ZM8.875 7.69434H9.27832C9.51758 7.69434 9.59961 7.61914 9.59961 7.37988V6.97656C9.59961 6.73047 9.51758 6.65527 9.27832 6.65527H8.875C8.62891 6.65527 8.54688 6.73047 8.54688 6.97656V7.37988C8.54688 7.61914 8.62891 7.69434 8.875 7.69434ZM11.1035 7.69434H11.5068C11.7529 7.69434 11.835 7.61914 11.835 7.37988V6.97656C11.835 6.73047 11.7529 6.65527 11.5068 6.65527H11.1035C10.8643 6.65527 10.7822 6.73047 10.7822 6.97656V7.37988C10.7822 7.61914 10.8643 7.69434 11.1035 7.69434ZM4.41113 9.89551H4.80762C5.05371 9.89551 5.13574 9.82031 5.13574 9.57422V9.1709C5.13574 8.93164 5.05371 8.85645 4.80762 8.85645H4.41113C4.16504 8.85645 4.08301 8.93164 4.08301 9.1709V9.57422C4.08301 9.82031 4.16504 9.89551 4.41113 9.89551ZM6.63965 9.89551H7.04297C7.28906 9.89551 7.37109 9.82031 7.37109 9.57422V9.1709C7.37109 8.93164 7.28906 8.85645 7.04297 8.85645H6.63965C6.39355 8.85645 6.31152 8.93164 6.31152 9.1709V9.57422C6.31152 9.82031 6.39355 9.89551 6.63965 9.89551ZM8.875 9.89551H9.27832C9.51758 9.89551 9.59961 9.82031 9.59961 9.57422V9.1709C9.59961 8.93164 9.51758 8.85645 9.27832 8.85645H8.875C8.62891 8.85645 8.54688 8.93164 8.54688 9.1709V9.57422C8.54688 9.82031 8.62891 9.89551 8.875 9.89551ZM11.1035 9.89551H11.5068C11.7529 9.89551 11.835 9.82031 11.835 9.57422V9.1709C11.835 8.93164 11.7529 8.85645 11.5068 8.85645H11.1035C10.8643 8.85645 10.7822 8.93164 10.7822 9.1709V9.57422C10.7822 9.82031 10.8643 9.89551 11.1035 9.89551ZM4.41113 12.0898H4.80762C5.05371 12.0898 5.13574 12.0146 5.13574 11.7754V11.3721C5.13574 11.126 5.05371 11.0508 4.80762 11.0508H4.41113C4.16504 11.0508 4.08301 11.126 4.08301 11.3721V11.7754C4.08301 12.0146 4.16504 12.0898 4.41113 12.0898ZM6.63965 12.0898H7.04297C7.28906 12.0898 7.37109 12.0146 7.37109 11.7754V11.3721C7.37109 11.126 7.28906 11.0508 7.04297 11.0508H6.63965C6.39355 11.0508 6.31152 11.126 6.31152 11.3721V11.7754C6.31152 12.0146 6.39355 12.0898 6.63965 12.0898ZM8.875 12.0898H9.27832C9.51758 12.0898 9.59961 12.0146 9.59961 11.7754V11.3721C9.59961 11.126 9.51758 11.0508 9.27832 11.0508H8.875C8.62891 11.0508 8.54688 11.126 8.54688 11.3721V11.7754C8.54688 12.0146 8.62891 12.0898 8.875 12.0898Z"></path>
                      </svg>
                    </div>
                    <div className="ml-1.5 mr-3 min-w-0 flex-auto">
                      <div className="truncate text-left">Last 7 days</div>
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  tabIndex={0}
                  className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                >
                  <div className="flex min-h-7 w-full select-none items-center text-sm leading-[120%]">
                    <div className="ml-2.5 mr-1 flex items-center justify-center">
                      <svg
                        role="graphics-symbol"
                        viewBox="0 0 16 16"
                        className="block h-[18px] w-[18px] shrink-0 fill-inherit"
                      >
                        <path d="M3.24902 14.7764H12.6621C14.1455 14.7764 14.918 14.0107 14.918 12.5479V4.22852C14.918 2.76562 14.1455 2 12.6621 2H3.24902C1.77246 2 1 2.75879 1 4.22852V12.5479C1 14.0107 1.77246 14.7764 3.24902 14.7764ZM3.24219 13.416C2.6748 13.416 2.36035 13.1221 2.36035 12.5205V6.23145C2.36035 5.62988 2.6748 5.33594 3.24219 5.33594H12.6689C13.2363 5.33594 13.5508 5.62988 13.5508 6.23145V12.5205C13.5508 13.1221 13.2363 13.416 12.6689 13.416H3.24219ZM6.63965 7.69434H7.04297C7.28906 7.69434 7.37109 7.61914 7.37109 7.37988V6.97656C7.37109 6.73047 7.28906 6.65527 7.04297 6.65527H6.63965C6.39355 6.65527 6.31152 6.73047 6.31152 6.97656V7.37988C6.31152 7.61914 6.39355 7.69434 6.63965 7.69434ZM8.875 7.69434H9.27832C9.51758 7.69434 9.59961 7.61914 9.59961 7.37988V6.97656C9.59961 6.73047 9.51758 6.65527 9.27832 6.65527H8.875C8.62891 6.65527 8.54688 6.73047 8.54688 6.97656V7.37988C8.54688 7.61914 8.62891 7.69434 8.875 7.69434ZM11.1035 7.69434H11.5068C11.7529 7.69434 11.835 7.61914 11.835 7.37988V6.97656C11.835 6.73047 11.7529 6.65527 11.5068 6.65527H11.1035C10.8643 6.65527 10.7822 6.73047 10.7822 6.97656V7.37988C10.7822 7.61914 10.8643 7.69434 11.1035 7.69434ZM4.41113 9.89551H4.80762C5.05371 9.89551 5.13574 9.82031 5.13574 9.57422V9.1709C5.13574 8.93164 5.05371 8.85645 4.80762 8.85645H4.41113C4.16504 8.85645 4.08301 8.93164 4.08301 9.1709V9.57422C4.08301 9.82031 4.16504 9.89551 4.41113 9.89551ZM6.63965 9.89551H7.04297C7.28906 9.89551 7.37109 9.82031 7.37109 9.57422V9.1709C7.37109 8.93164 7.28906 8.85645 7.04297 8.85645H6.63965C6.39355 8.85645 6.31152 8.93164 6.31152 9.1709V9.57422C6.31152 9.82031 6.39355 9.89551 6.63965 9.89551ZM8.875 9.89551H9.27832C9.51758 9.89551 9.59961 9.82031 9.59961 9.57422V9.1709C9.59961 8.93164 9.51758 8.85645 9.27832 8.85645H8.875C8.62891 8.85645 8.54688 8.93164 8.54688 9.1709V9.57422C8.54688 9.82031 8.62891 9.89551 8.875 9.89551ZM11.1035 9.89551H11.5068C11.7529 9.89551 11.835 9.82031 11.835 9.57422V9.1709C11.835 8.93164 11.7529 8.85645 11.5068 8.85645H11.1035C10.8643 8.85645 10.7822 8.93164 10.7822 9.1709V9.57422C10.7822 9.82031 10.8643 9.89551 11.1035 9.89551ZM4.41113 12.0898H4.80762C5.05371 12.0898 5.13574 12.0146 5.13574 11.7754V11.3721C5.13574 11.126 5.05371 11.0508 4.80762 11.0508H4.41113C4.16504 11.0508 4.08301 11.126 4.08301 11.3721V11.7754C4.08301 12.0146 4.16504 12.0898 4.41113 12.0898ZM6.63965 12.0898H7.04297C7.28906 12.0898 7.37109 12.0146 7.37109 11.7754V11.3721C7.37109 11.126 7.28906 11.0508 7.04297 11.0508H6.63965C6.39355 11.0508 6.31152 11.126 6.31152 11.3721V11.7754C6.31152 12.0146 6.39355 12.0898 6.63965 12.0898ZM8.875 12.0898H9.27832C9.51758 12.0898 9.59961 12.0146 9.59961 11.7754V11.3721C9.59961 11.126 9.51758 11.0508 9.27832 11.0508H8.875C8.62891 11.0508 8.54688 11.126 8.54688 11.3721V11.7754C8.54688 12.0146 8.62891 12.0898 8.875 12.0898Z"></path>
                      </svg>
                    </div>
                    <div className="ml-1.5 mr-3 min-w-0 flex-auto">
                      <div className="truncate text-left">Last 30 days</div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="flex h-full max-h-[70vh] min-w-[180px] max-w-[calc(-24px+100vw)] flex-col">
                <div className="translate-z-0 z-[1] mb-0 mr-0 min-h-0 grow overflow-y-auto overflow-x-hidden">
                  <div className="flex items-center justify-center py-1.5">
                    <div className="px-4">
                      <div className="m-0 text-sm">
                        <div className="mx-[1em] my-0 flex flex-col items-center first:ml-0 last:mr-0">
                          <div className="flex w-full items-center justify-between p-0 text-left">
                            <h2 className="z-[1] m-0 items-center whitespace-nowrap border-2 border-transparent px-[0.25em] py-0 text-left text-sm font-medium text-current">
                              Mar 2024
                            </h2>
                            <div className="whitespace-nowrap pr-1">
                              <button
                                type="button"
                                className="h-6 w-6 rounded-[3px] border-0 p-1.5"
                              >
                                <svg
                                  viewBox="0 0 120 120"
                                  className="h-full w-full fill-current text-[rgba(55,53,47,0.85)]"
                                >
                                  <path
                                    d="M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z"
                                    fill="currentColor"
                                    fillRule="nonzero"
                                  ></path>
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="h-6 w-6 rounded-[3px] border-0 p-1.5"
                              >
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 120 120"
                                  className="h-full w-full fill-current text-[rgba(55,53,47,0.85)]"
                                >
                                  <path
                                    d="M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <table className="m-0 max-w-[calc(32px*7)] border-collapse border-spacing-0">
                            <thead className="border-0">
                              <tr className="h-full">
                                <th
                                  scope="col"
                                  className="h-8 p-0 text-center align-middle text-xs font-normal text-[#8b9898]"
                                >
                                  <span>Su</span>
                                  <span className="clip-rect-1 absolute top-0 m-0 box-border h-px w-px appearance-none overflow-hidden border-none bg-transparent p-0">
                                    Sunday
                                  </span>
                                </th>
                                <th
                                  scope="col"
                                  className="h-8 p-0 text-center align-middle text-xs font-normal text-[#8b9898]"
                                >
                                  <span>Mo</span>
                                  <span className="clip-rect-1 absolute top-0 m-0 box-border h-px w-px appearance-none overflow-hidden border-none bg-transparent p-0">
                                    Monday
                                  </span>
                                </th>
                                <th
                                  scope="col"
                                  className="h-8 p-0 text-center align-middle text-xs font-normal text-[#8b9898]"
                                >
                                  <span>Tu</span>
                                  <span className="clip-rect-1 absolute top-0 m-0 box-border h-px w-px appearance-none overflow-hidden border-none bg-transparent p-0">
                                    Tuesday
                                  </span>
                                </th>
                                <th
                                  scope="col"
                                  className="h-8 p-0 text-center align-middle text-xs font-normal text-[#8b9898]"
                                >
                                  <span>We</span>
                                  <span className="clip-rect-1 absolute top-0 m-0 box-border h-px w-px appearance-none overflow-hidden border-none bg-transparent p-0">
                                    Wednesday
                                  </span>
                                </th>
                                <th
                                  scope="col"
                                  className="h-8 p-0 text-center align-middle text-xs font-normal text-[#8b9898]"
                                >
                                  <span>Th</span>
                                  <span className="clip-rect-1 absolute top-0 m-0 box-border h-px w-px appearance-none overflow-hidden border-none bg-transparent p-0">
                                    Thursday
                                  </span>
                                </th>
                                <th
                                  scope="col"
                                  className="h-8 p-0 text-center align-middle text-xs font-normal text-[#8b9898]"
                                >
                                  <span>Fr</span>
                                  <span className="clip-rect-1 absolute top-0 m-0 box-border h-px w-px appearance-none overflow-hidden border-none bg-transparent p-0">
                                    Friday
                                  </span>
                                </th>
                                <th
                                  scope="col"
                                  className="h-8 p-0 text-center align-middle text-xs font-normal text-[#8b9898]"
                                >
                                  <span>Sa</span>
                                  <span className="clip-rect-1 absolute top-0 m-0 box-border h-px w-px appearance-none overflow-hidden border-none bg-transparent p-0">
                                    Saturday
                                  </span>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="border-0">
                              <tr className="h-[30px]">
                                <td className="h-8 w-8 p-0 text-center">
                                  <button
                                    type="button"
                                    tabIndex={-1}
                                    className="relative m-0 box-border flex h-8 w-8 max-w-8 cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-[3px] border-0 bg-none p-0 leading-[1.2] text-[#8b9898] hover:cursor-pointer hover:rounded-[3px] hover:border-2 hover:border-[#2383e2] hover:bg-[rgba(35,131,226,0.15)]"
                                  >
                                    25
                                  </button>
                                </td>
                                <td className="h-8 w-8 p-0 text-center">
                                  <button
                                    type="button"
                                    tabIndex={-1}
                                    className="relative m-0 box-border flex h-8 w-8 max-w-8 cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-[3px] border-0 bg-none p-0 leading-[1.2] text-[#8b9898] hover:cursor-pointer hover:rounded-[3px] hover:border-2 hover:border-[#2383e2] hover:bg-[rgba(35,131,226,0.15)]"
                                  >
                                    26
                                  </button>
                                </td>
                                <td className="h-8 w-8 p-0 text-center">
                                  <button
                                    type="button"
                                    tabIndex={-1}
                                    className="relative m-0 box-border flex h-8 w-8 max-w-8 cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-[3px] border-0 bg-none p-0 leading-[1.2] text-[#8b9898] hover:cursor-pointer hover:rounded-[3px] hover:border-2 hover:border-[#2383e2] hover:bg-[rgba(35,131,226,0.15)]"
                                  >
                                    27
                                  </button>
                                </td>
                                <td className="h-8 w-8 p-0 text-center">
                                  <button
                                    type="button"
                                    tabIndex={-1}
                                    className="relative m-0 box-border flex h-8 w-8 max-w-8 cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-[3px] border-0 bg-none p-0 leading-[1.2] text-[#8b9898] hover:cursor-pointer hover:rounded-[3px] hover:border-2 hover:border-[#2383e2] hover:bg-[rgba(35,131,226,0.15)]"
                                  >
                                    28
                                  </button>
                                </td>
                                <td className="h-8 w-8 p-0 text-center">
                                  <button
                                    type="button"
                                    tabIndex={-1}
                                    className="relative m-0 box-border flex h-8 w-8 max-w-8 cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-[3px] border-0 bg-none p-0 leading-[1.2] text-[#8b9898] hover:cursor-pointer hover:rounded-[3px] hover:border-2 hover:border-[#2383e2] hover:bg-[rgba(35,131,226,0.15)]"
                                  >
                                    29
                                  </button>
                                </td>
                                <td className="h-8 w-8 p-0 text-center">
                                  <button
                                    type="button"
                                    tabIndex={-1}
                                    className="after:translate-3d-today relative z-[1] m-0 box-border flex h-8 w-8 max-w-8 cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-[3px] border-0 bg-none p-0 font-normal leading-[1.2] text-white after:absolute after:left-1/2 after:top-1/2 after:-z-[1] after:block after:h-[26px] after:w-[26px] after:rounded-[100%] after:bg-[#eb5757] after:content-[''] hover:cursor-pointer hover:rounded-[3px] hover:border-2 hover:border-[#2383e2] hover:bg-[rgba(35,131,226,0.15)]"
                                  >
                                    1
                                  </button>
                                </td>
                                <td className="h-8 w-8 p-0 text-center">
                                  <button
                                    type="button"
                                    tabIndex={-1}
                                    className="relative m-0 box-border flex h-8 w-8 max-w-8 cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-[3px] border-0 bg-none p-0 leading-[1.2] hover:cursor-pointer hover:rounded-[3px] hover:border-2 hover:border-[#2383e2] hover:bg-[rgba(35,131,226,0.15)]"
                                  >
                                    2
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
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

export default DateDropdown;
