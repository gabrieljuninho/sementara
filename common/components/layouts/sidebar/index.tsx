"use client";

import { ElementRef, MouseEvent, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useMediaQuery } from "usehooks-ts";

import { useWidthStore } from "@/stores/width";

import { cn } from "@/common/libs/cn";

import Tooltip from "../../elements/Tooltip";

const Sidebar = () => {
  let updatedMainWidth: number;

  const { setMainWidth } = useWidthStore();

  const isMobile = useMediaQuery("(max-width: 768px)");

  const [isHover, setIsHover] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isMobile);

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"nav">>(null);
  const sidebarContentRef = useRef<ElementRef<"div">>(null);
  const prevClientX = useRef<number | null>(null);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    isResizingRef.current = true;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: any) => {
    if (!isResizingRef.current) return;

    let newWidth = e.clientX;

    if (newWidth < 220) newWidth = 220;
    if (newWidth > 480) newWidth = 480;

    if (!sidebarContentRef.current) return;

    if (sidebarRef.current && sidebarContentRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      sidebarContentRef.current.style.setProperty("width", `${newWidth}px`);
    }

    updatedMainWidth = 1146 - (newWidth - 220) * ((1146 - 886) / (480 - 220));

    setMainWidth(updatedMainWidth);

    prevClientX.current = e.clientX;
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <nav
      ref={sidebarRef}
      className={cn(
        "group pointer-events-none relative z-[111] w-60 shrink-0 grow-0 cursor-default bg-[rgb(251,251,250)]",
        isHover ? "shadow-sidebar-hover" : "shadow-sidebar",
        isResetting && "transition-all duration-300 ease-in-out",
        isMobile && "w-0"
      )}
    >
      <div className="h-full font-medium text-[rgba(25,23,17,0.6)]">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-[9] flex w-0 flex-col overflow-visible">
          <div
            ref={sidebarContentRef}
            className="pointer-events-auto visible relative flex h-full w-60 flex-col opacity-100"
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 -z-[1] hidden rounded-r-lg bg-white shadow-modifier"></div>
            <div className="absolute bottom-0 left-0 right-0 top-0 -z-[1] hidden rounded-r-lg shadow-sidebar transition-shadow duration-300"></div>
            <div className="relative flex h-full max-h-full flex-col overflow-hidden">
              <div className="flex h-full max-w-full flex-col">
                <div className="block shrink-0 grow-0">
                  <button
                    type="button"
                    className="mx-1 mb-0 mt-1 flex h-[37px] w-[calc(100%-8px)] min-w-0 cursor-pointer select-none items-center rounded p-0 transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                  >
                    <div className="my-px ml-0 flex min-h-[27px] w-full items-center overflow-hidden px-2.5 py-0.5 text-sm">
                      <div className="mr-2 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                        <div className="relative">
                          <div className="mt-px flex h-[22px] w-[22px] items-center justify-center rounded-[0.25em] font-medium text-[rgb(55,53,47)]">
                            <div>
                              <div className="h-full w-full">
                                <Image
                                  src="https://lh3.googleusercontent.com/a/ACg8ocJbFSvYxMnpXgDOIjvVsoRFva-VwFOMnPEr6osLxaDZ=s100"
                                  alt=""
                                  width={100}
                                  height={100}
                                  referrerPolicy="same-origin"
                                  className="block h-[19.536px] w-[19.536px] rounded object-cover transition-opacity duration-100"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-auto truncate">
                        <div className="flex items-center justify-start">
                          <div className="mr-1.5 mt-0 flex flex-col truncate">
                            <div className="truncate font-medium text-[rgb(55,53,47)]">
                              Bing Code&apos;s Jotion
                            </div>
                            <div className="truncate text-[11px] font-normal leading-3 text-[rgba(55,53,47,0.65)]"></div>
                          </div>
                          <div className="h-2.5 w-2.5 shrink-0 grow-0 fill-[rgba(55,53,47,0.45)]">
                            <svg
                              role="graphics-symbol"
                              viewBox="-1 -1 9 11"
                              className="block h-full w-full shrink-0 fill-inherit"
                            >
                              <path
                                id="path0_stroke"
                                d="M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto mr-3 flex h-full items-center">
                      <button
                        type="button"
                        className={cn(
                          "relative ml-2.5 inline-flex h-6 w-6 shrink-0 cursor-default select-none items-center justify-center rounded p-0 opacity-0 transition-opacity duration-[330ms] group-hover:opacity-100",
                          isMobile && "opacity-100"
                        )}
                      >
                        <svg
                          role="graphics-symbol"
                          viewBox="0 0 16 16"
                          className="block h-4 w-4 shrink-0 fill-[rgba(55,53,47,0.45)]"
                        >
                          <path d="M7.07031 13.8887C7.2207 14.0391 7.40527 14.1211 7.62402 14.1211C8.06836 14.1211 8.41699 13.7725 8.41699 13.3281C8.41699 13.1094 8.32812 12.9043 8.17773 12.7539L3.37207 8.05762L8.17773 3.375C8.32812 3.21777 8.41699 3.0127 8.41699 2.80078C8.41699 2.35645 8.06836 2.00781 7.62402 2.00781C7.40527 2.00781 7.2207 2.08984 7.07031 2.24023L1.73828 7.44922C1.56055 7.62012 1.46484 7.8252 1.46484 8.06445C1.46484 8.29688 1.55371 8.49512 1.73828 8.67969L7.07031 13.8887ZM13.1748 13.8887C13.3252 14.0391 13.5098 14.1211 13.7354 14.1211C14.1797 14.1211 14.5283 13.7725 14.5283 13.3281C14.5283 13.1094 14.4395 12.9043 14.2891 12.7539L9.4834 8.05762L14.2891 3.375C14.4395 3.21777 14.5283 3.0127 14.5283 2.80078C14.5283 2.35645 14.1797 2.00781 13.7354 2.00781C13.5098 2.00781 13.3252 2.08984 13.1748 2.24023L7.84961 7.44922C7.66504 7.62012 7.57617 7.8252 7.56934 8.06445C7.56934 8.29688 7.66504 8.49512 7.84961 8.67969L13.1748 13.8887Z"></path>
                        </svg>
                      </button>
                    </div>
                  </button>
                </div>
                <div className="shrink-0 grow-0 pb-2">
                  <button
                    type="button"
                    tabIndex={0}
                    className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                  >
                    <div className="my-px flex min-h-[27px] w-full items-center px-2.5 py-0.5 text-sm">
                      <div className="mr-2 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                        <svg
                          role="graphics-symbol"
                          viewBox="0 0 20 20"
                          className="block h-full w-5 shrink-0 fill-[rgba(55,53,47,0.45)]"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.24609 8.82031C3.24609 8.05469 3.38965 7.33691 3.67676 6.66699C3.96842 5.99251 4.36947 5.40007 4.87988 4.88965C5.3903 4.37467 5.98047 3.97363 6.65039 3.68652C7.32487 3.39941 8.04492 3.25586 8.81055 3.25586C9.58073 3.25586 10.3008 3.39941 10.9707 3.68652C11.6452 3.97363 12.2376 4.37467 12.748 4.88965C13.2585 5.40007 13.6572 5.99251 13.9443 6.66699C14.236 7.33691 14.3818 8.05469 14.3818 8.82031C14.3818 9.42188 14.2884 9.99382 14.1016 10.5361C13.9193 11.0785 13.6663 11.5729 13.3428 12.0195L16.46 15.1504C16.5557 15.2415 16.6263 15.3486 16.6719 15.4717C16.722 15.5947 16.7471 15.7246 16.7471 15.8613C16.7471 16.0527 16.7038 16.2259 16.6172 16.3809C16.5306 16.5358 16.4121 16.6566 16.2617 16.7432C16.1113 16.8343 15.9382 16.8799 15.7422 16.8799C15.6055 16.8799 15.4733 16.8548 15.3457 16.8047C15.2227 16.7591 15.111 16.6862 15.0107 16.5859L11.873 13.4482C11.4355 13.7399 10.957 13.9701 10.4375 14.1387C9.92253 14.3027 9.38021 14.3848 8.81055 14.3848C8.04492 14.3848 7.32487 14.2412 6.65039 13.9541C5.98047 13.667 5.3903 13.2682 4.87988 12.7578C4.36947 12.2474 3.96842 11.6572 3.67676 10.9873C3.38965 10.3128 3.24609 9.59049 3.24609 8.82031ZM4.70215 8.82031C4.70215 9.38997 4.80697 9.92318 5.0166 10.4199C5.23079 10.9167 5.52702 11.3542 5.90527 11.7324C6.28353 12.1061 6.72103 12.4001 7.21777 12.6143C7.71452 12.8285 8.24544 12.9355 8.81055 12.9355C9.38021 12.9355 9.91341 12.8285 10.4102 12.6143C10.9069 12.4001 11.3421 12.1061 11.7158 11.7324C12.0941 11.3542 12.3903 10.9167 12.6045 10.4199C12.8187 9.92318 12.9258 9.38997 12.9258 8.82031C12.9258 8.25521 12.8187 7.72428 12.6045 7.22754C12.3903 6.73079 12.0941 6.29329 11.7158 5.91504C11.3421 5.53678 10.9069 5.24284 10.4102 5.0332C9.91341 4.81901 9.38021 4.71191 8.81055 4.71191C8.24544 4.71191 7.71452 4.81901 7.21777 5.0332C6.72103 5.24284 6.28353 5.53678 5.90527 5.91504C5.52702 6.29329 5.23079 6.73079 5.0166 7.22754C4.80697 7.72428 4.70215 8.25521 4.70215 8.82031Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="min-w-0 flex-auto truncate text-left">
                        Search
                      </div>
                    </div>
                  </button>
                  <button
                    type="button"
                    tabIndex={0}
                    className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                  >
                    <div className="my-px flex min-h-[27px] w-full items-center px-2.5 py-0.5 text-sm">
                      <div className="mr-2 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                        <svg
                          role="graphics-symbol"
                          viewBox="0 0 20 20"
                          className="block h-5 w-5 shrink-0 fill-[rgba(55,53,47,0.45)]"
                        >
                          <path d="M4.61084 16.0537C3.90837 16.0537 3.37305 15.8717 3.00488 15.5078C2.64095 15.1481 2.45898 14.6191 2.45898 13.9209V10.1504C2.45898 9.89225 2.47168 9.67432 2.49707 9.49658C2.52669 9.31462 2.57536 9.15169 2.64307 9.00781C2.71077 8.86393 2.80387 8.71794 2.92236 8.56982L4.94092 6.09424C5.20752 5.76416 5.44238 5.50602 5.64551 5.31982C5.85286 5.12939 6.07715 4.99609 6.31836 4.91992C6.5638 4.83952 6.88118 4.79932 7.27051 4.79932H12.7358C13.1252 4.79932 13.4404 4.83952 13.6816 4.91992C13.9271 4.99609 14.1514 5.12939 14.3545 5.31982C14.5576 5.50602 14.7946 5.76416 15.0654 6.09424L17.0776 8.56982C17.2004 8.71794 17.2956 8.86393 17.3633 9.00781C17.431 9.15169 17.4775 9.31462 17.5029 9.49658C17.5283 9.67432 17.541 9.89225 17.541 10.1504V13.9209C17.541 14.6191 17.359 15.1481 16.9951 15.5078C16.6312 15.8717 16.098 16.0537 15.3955 16.0537H4.61084ZM4.69971 14.6445H15.3066C15.5817 14.6445 15.7912 14.5747 15.9351 14.4351C16.0832 14.2912 16.1572 14.0711 16.1572 13.7749V10.7852H12.4946C12.4142 11.1533 12.2576 11.4813 12.0249 11.769C11.7964 12.0568 11.5086 12.2853 11.1616 12.4546C10.8146 12.6196 10.4274 12.7021 10 12.7021C9.57682 12.7021 9.19173 12.6196 8.84473 12.4546C8.49772 12.2896 8.20785 12.0632 7.9751 11.7754C7.74235 11.4834 7.58789 11.1533 7.51172 10.7852H3.84277V13.7749C3.84277 14.0711 3.91471 14.2912 4.05859 14.4351C4.20671 14.5747 4.42041 14.6445 4.69971 14.6445ZM10 11.4072C10.2751 11.4072 10.512 11.3395 10.7109 11.2041C10.9098 11.0687 11.0643 10.8973 11.1743 10.6899C11.2843 10.4784 11.3394 10.2646 11.3394 10.0488V10.0298C11.3394 9.90706 11.3774 9.79915 11.4536 9.70605C11.5298 9.60872 11.6525 9.56006 11.8218 9.56006H15.8335C15.9351 9.56006 15.9964 9.52409 16.0176 9.45215C16.043 9.38021 16.0303 9.3125 15.9795 9.24902L13.7197 6.43701C13.5885 6.26774 13.4447 6.14502 13.2881 6.06885C13.1315 5.98844 12.9495 5.94824 12.7422 5.94824H7.25781C7.05469 5.94824 6.87484 5.98844 6.71826 6.06885C6.56169 6.14502 6.41569 6.26774 6.28027 6.43701L4.0332 9.24902C3.97819 9.3125 3.96126 9.38021 3.98242 9.45215C4.00781 9.52409 4.07129 9.56006 4.17285 9.56006H8.18457C8.35384 9.56006 8.47656 9.60872 8.55273 9.70605C8.62891 9.79915 8.66699 9.90706 8.66699 10.0298V10.0488C8.66699 10.2646 8.71989 10.4784 8.82568 10.6899C8.93571 10.8973 9.09017 11.0687 9.28906 11.2041C9.48796 11.3395 9.72493 11.4072 10 11.4072Z"></path>
                        </svg>
                      </div>
                      <div className="min-w-0 flex-auto truncate text-left">
                        Inbox
                      </div>
                      <div className="flex h-full shrink-0 grow-0 items-center justify-center"></div>
                    </div>
                  </button>
                  <button
                    type="button"
                    tabIndex={0}
                    className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                  >
                    <div className="my-px flex min-h-[27px] w-full items-center px-2.5 py-0.5 text-sm">
                      <div className="mr-2 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                        <svg
                          role="graphics-symbol"
                          viewBox="0 0 20 20"
                          className="block h-full w-5 shrink-0 fill-[rgba(55,53,47,0.45)]"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 11.15C10.6352 11.15 11.15 10.6352 11.15 10C11.15 9.3649 10.6352 8.85002 10 8.85002C9.3649 8.85002 8.85002 9.3649 8.85002 10C8.85002 10.6352 9.3649 11.15 10 11.15ZM10 12.35C11.2979 12.35 12.35 11.2979 12.35 10C12.35 8.70216 11.2979 7.65002 10 7.65002C8.70216 7.65002 7.65002 8.70216 7.65002 10C7.65002 11.2979 8.70216 12.35 10 12.35Z"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.66313 13.92L9.29337 15.7942C9.30705 15.835 9.3452 15.8624 9.38815 15.8624H10.6119C10.6548 15.8624 10.693 15.835 10.7066 15.7942L11.3369 13.92L11.8486 13.6609C11.9847 13.592 12.1165 13.5157 12.2435 13.4325L12.7244 13.1173L14.6647 13.509C14.7068 13.5175 14.7496 13.4982 14.7711 13.461L15.3829 12.4012C15.4044 12.364 15.3997 12.3173 15.3713 12.2851L14.0625 10.8013L14.0938 10.2287C14.0979 10.1531 14.1 10.0769 14.1 10C14.1 9.92309 14.0979 9.8468 14.0938 9.77119L14.0625 9.19865L15.3713 7.71477C15.3997 7.68257 15.4044 7.63582 15.3829 7.59862L14.7711 6.53886C14.7496 6.50166 14.7068 6.48233 14.6647 6.49083L12.7243 6.8826L12.2434 6.56746C12.1164 6.48424 11.9847 6.40796 11.8487 6.33909L11.3369 6.07998L10.7066 4.20568C10.693 4.16497 10.6548 4.13755 10.6119 4.13755L9.38815 4.13755C9.3452 4.13755 9.30705 4.16497 9.29337 4.20568L8.6631 6.08L8.15134 6.33911C8.01535 6.40796 7.88361 6.48424 7.75665 6.56744L7.27577 6.88258L5.33531 6.4908C5.29321 6.4823 5.25039 6.50162 5.22891 6.53882L4.61706 7.59858C4.59558 7.63578 4.60026 7.68253 4.62867 7.71473L5.93757 9.19866L5.90625 9.77121C5.90211 9.84681 5.90001 9.92309 5.90001 10C5.90001 10.0769 5.90211 10.1531 5.90625 10.2287L5.93756 10.8012L4.62867 12.2851C4.60026 12.3173 4.59559 12.3641 4.61706 12.4013L5.22892 13.461C5.25039 13.4982 5.29322 13.5176 5.33531 13.5091L7.27565 13.1173L7.75654 13.4325C7.88354 13.5157 8.01533 13.592 8.15137 13.6609L8.66313 13.92ZM6.98912 14.6034C7.15941 14.715 7.33626 14.8174 7.51897 14.9099L7.96638 16.2405C8.1717 16.8511 8.74396 17.2624 9.38815 17.2624H10.6119C11.2561 17.2624 11.8283 16.8511 12.0336 16.2405L12.481 14.91C12.6638 14.8174 12.8406 14.715 13.0109 14.6034L14.3876 14.8813C15.0191 15.0088 15.6614 14.7189 15.9835 14.161L16.5953 13.1012C16.9174 12.5433 16.8474 11.8421 16.4212 11.359L15.4917 10.3052C15.4972 10.2041 15.5 10.1024 15.5 10C15.5 9.89756 15.4972 9.79578 15.4917 9.69472L16.4212 8.64087C16.8474 8.15776 16.9174 7.45651 16.5954 6.89862L15.9835 5.83886C15.6614 5.28097 15.0191 4.99103 14.3876 5.11852L13.0108 5.3965C12.8405 5.28493 12.6637 5.18255 12.4811 5.09007L12.0336 3.75947C11.8283 3.14887 11.2561 2.73755 10.6119 2.73755H9.38815C8.74396 2.73755 8.1717 3.14886 7.96638 3.75946L7.51894 5.09008C7.33629 5.18256 7.1595 5.28493 6.98928 5.39648L5.61238 5.11849C4.98092 4.991 4.33858 5.28093 4.01648 5.83882L3.40462 6.89858C3.08253 7.45647 3.15261 8.15772 3.57874 8.64083L4.50834 9.69474C4.50281 9.79579 4.50001 9.89757 4.50001 10C4.50001 10.1024 4.50281 10.2041 4.50833 10.3052L3.57875 11.359C3.15261 11.8421 3.08253 12.5434 3.40463 13.1013L4.01648 14.161C4.33858 14.7189 4.98092 15.0089 5.61237 14.8814L6.98912 14.6034Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="min-w-0 flex-auto truncate text-left">
                        Settings & members
                      </div>
                    </div>
                  </button>
                  <button
                    type="button"
                    tabIndex={0}
                    className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                  >
                    <div className="my-px flex min-h-[27px] w-full items-center px-2.5 py-0.5 text-sm">
                      <div className="mr-2 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                        <svg
                          role="graphics-symbol"
                          viewBox="0 0 22 22"
                          className="block h-3.5 w-3.5 shrink-0 fill-[rgba(55,53,47,0.45)]"
                        >
                          <path d="M11 22C17.0326 22 22 17.0326 22 11C22 4.97795 17.0221 0 10.9895 0C4.9674 0 0 4.97795 0 11C0 17.0326 4.9674 22 11 22ZM5.83221 11.0105C5.83221 10.3461 6.30681 9.87152 6.96069 9.87152H9.88207V6.95014C9.88207 6.30681 10.3461 5.83221 10.9895 5.83221C11.6539 5.83221 12.1285 6.30681 12.1285 6.95014V9.87152H15.0499C15.6932 9.87152 16.1678 10.3461 16.1678 11.0105C16.1678 11.6539 15.6932 12.1179 15.0499 12.1179H12.1285V15.0499C12.1285 15.6932 11.6539 16.1572 10.9895 16.1572C10.3461 16.1572 9.88207 15.6932 9.88207 15.0499V12.1179H6.96069C6.30681 12.1179 5.83221 11.6539 5.83221 11.0105Z"></path>
                        </svg>
                      </div>
                      <div className="min-w-0 flex-auto truncate text-left">
                        New page
                      </div>
                    </div>
                  </button>
                </div>
                <div className="z-[99] -mt-0.5 h-0.5 w-full transition-shadow duration-300 hover:shadow-[0_1px_0_rgba(55,53,47,0.09)]"></div>
                <div className="z-[1] mb-0 mr-0 overflow-y-auto overflow-x-hidden pb-5 pt-1.5">
                  <div className="m-0">
                    <div className="flex flex-col"></div>
                    <div className="flex flex-col"></div>
                    <div className="flex flex-col"></div>
                    <div className="flex flex-col">
                      <div className="block">
                        <div>
                          <div>
                            <Link
                              href="/Getting-Started-407bdda45d31450ab86e1ac72609b2b9?pvs=12"
                              rel="noopener noreferrer"
                              className="mx-1 block w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] text-inherit transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                            >
                              <div className="my-px flex min-h-[27px] w-full items-center rounded-[3px] bg-[rgba(0,0,0,0.04)] py-0.5 pl-[5px] pr-2.5 text-sm font-semibold text-[rgb(55,53,47)]">
                                <div className="mr-0 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                                  <button
                                    type="button"
                                    tabIndex={0}
                                    className="relative flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                  >
                                    <svg
                                      role="graphics-symbol"
                                      viewBox="0 0 12 12"
                                      className="-rotate-z-90 block h-3 w-3 shrink-0 fill-[rgba(55,53,47,0.35)] opacity-100 transition-transform duration-200"
                                    >
                                      <path d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z"></path>
                                    </svg>
                                  </button>
                                </div>
                                <div className="relative -ml-[3px] mr-1 flex h-[18px] w-[22px] shrink-0 grow-0 items-center justify-center">
                                  <button
                                    type="button"
                                    className="flex h-5 w-5 shrink-0 cursor-pointer select-none items-center justify-center rounded-[0.25em] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                  >
                                    <span>
                                      <svg
                                        role="graphics-symbol"
                                        viewBox="0 0 16 16"
                                        className="block h-[18px] w-[18px] fill-[rgba(55,53,47,0.45)]"
                                      >
                                        <path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM10.4336 9.00098H5.42969C5.16992 9.00098 4.98535 9.19238 4.98535 9.43164C4.98535 9.67773 5.16992 9.86914 5.42969 9.86914H10.4336C10.6797 9.86914 10.8643 9.67773 10.8643 9.43164C10.8643 9.19238 10.6797 9.00098 10.4336 9.00098ZM10.4336 11.2979H5.42969C5.16992 11.2979 4.98535 11.4893 4.98535 11.7354C4.98535 11.9746 5.16992 12.1592 5.42969 12.1592H10.4336C10.6797 12.1592 10.8643 11.9746 10.8643 11.7354C10.8643 11.4893 10.6797 11.2979 10.4336 11.2979Z"></path>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <div className="flex min-w-0 flex-auto items-center overflow-hidden text-clip whitespace-nowrap">
                                  <div className="truncate">
                                    Getting Started
                                  </div>
                                </div>
                                <div className="flex h-full shrink-0 grow-0 items-center justify-center">
                                  <div className="clip-rect-1 absolute block h-px w-px overflow-hidden whitespace-nowrap pl-[3px]">
                                    <button
                                      type="button"
                                      className="ml-1 flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                    >
                                      <svg
                                        role="graphics-symbol"
                                        viewBox="0 0 13 3"
                                        className="block h-full w-3.5 fill-[rgba(25,23,17,0.6)]"
                                      >
                                        <g>
                                          <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
                                          <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
                                          <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
                                        </g>
                                      </svg>
                                    </button>
                                    <button
                                      type="button"
                                      className="ml-1 flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                    >
                                      <svg
                                        role="graphics-symbol"
                                        viewBox="0 0 14 14"
                                        className="block h-full w-3.5 fill-[rgba(25,23,17,0.6)]"
                                      >
                                        <path d="M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div>
                            <Link
                              href="/Getting-Started-407bdda45d31450ab86e1ac72609b2b9?pvs=12"
                              rel="noopener noreferrer"
                              className="mx-1 block w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] text-inherit transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                            >
                              <div className="my-px flex min-h-[27px] w-full items-center rounded-[3px] py-0.5 pl-[5px] pr-2.5 text-sm font-semibold text-[rgba(55,53,47,0.65)]">
                                <div className="mr-0 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                                  <button
                                    type="button"
                                    tabIndex={0}
                                    className="relative flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                  >
                                    <svg
                                      role="graphics-symbol"
                                      viewBox="0 0 12 12"
                                      className="-rotate-z-90 block h-3 w-3 shrink-0 fill-[rgba(55,53,47,0.35)] opacity-100 transition-transform duration-200"
                                    >
                                      <path d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z"></path>
                                    </svg>
                                  </button>
                                </div>
                                <div className="relative -ml-[3px] mr-1 flex h-[18px] w-[22px] shrink-0 grow-0 items-center justify-center">
                                  <button
                                    type="button"
                                    className="flex h-5 w-5 shrink-0 cursor-pointer select-none items-center justify-center rounded-[0.25em] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                  >
                                    <div>
                                      <div className="h-full w-full">
                                        <Image
                                          src="https://www.notion.so/icons/user_lightgray.svg?mode=light"
                                          alt=""
                                          width={150}
                                          height={150}
                                          referrerPolicy="same-origin"
                                          className="block h-5 w-5 rounded object-cover transition-opacity duration-100"
                                        />
                                      </div>
                                    </div>
                                  </button>
                                </div>
                                <div className="flex min-w-0 flex-auto items-center overflow-hidden text-clip whitespace-nowrap">
                                  <div className="truncate">Personal Home</div>
                                </div>
                                <div className="flex h-full shrink-0 grow-0 items-center justify-center">
                                  <div className="clip-rect-1 absolute block h-px w-px overflow-hidden whitespace-nowrap pl-[3px]">
                                    <button
                                      type="button"
                                      className="ml-1 flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                    >
                                      <svg
                                        role="graphics-symbol"
                                        viewBox="0 0 13 3"
                                        className="block h-full w-3.5 fill-[rgba(25,23,17,0.6)]"
                                      >
                                        <g>
                                          <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
                                          <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
                                          <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
                                        </g>
                                      </svg>
                                    </button>
                                    <button
                                      type="button"
                                      className="ml-1 flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                    >
                                      <svg
                                        role="graphics-symbol"
                                        viewBox="0 0 14 14"
                                        className="block h-full w-3.5 fill-[rgba(25,23,17,0.6)]"
                                      >
                                        <path d="M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div>
                            <Link
                              href="/Getting-Started-407bdda45d31450ab86e1ac72609b2b9?pvs=12"
                              rel="noopener noreferrer"
                              className="mx-1 block w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] text-inherit transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                            >
                              <div className="my-px flex min-h-[27px] w-full items-center rounded-[3px] py-0.5 pl-[5px] pr-2.5 text-sm font-semibold text-[rgba(55,53,47,0.65)]">
                                <div className="mr-0 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                                  <button
                                    type="button"
                                    tabIndex={0}
                                    className="relative flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                  >
                                    <svg
                                      role="graphics-symbol"
                                      viewBox="0 0 12 12"
                                      className="-rotate-z-90 block h-3 w-3 shrink-0 fill-[rgba(55,53,47,0.35)] opacity-100 transition-transform duration-200"
                                    >
                                      <path d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z"></path>
                                    </svg>
                                  </button>
                                </div>
                                <div className="relative -ml-[3px] mr-1 flex h-[18px] w-[22px] shrink-0 grow-0 items-center justify-center">
                                  <button
                                    type="button"
                                    className="flex h-5 w-5 shrink-0 cursor-pointer select-none items-center justify-center rounded-[0.25em] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                  >
                                    <div>
                                      <div className="h-full w-full">
                                        <Image
                                          src="https://www.notion.so/icons/push-pin_lightgray.svg?mode=light"
                                          alt=""
                                          width={150}
                                          height={150}
                                          referrerPolicy="same-origin"
                                          className="block h-5 w-5 rounded object-cover transition-opacity duration-100"
                                        />
                                      </div>
                                    </div>
                                  </button>
                                </div>
                                <div className="flex min-w-0 flex-auto items-center overflow-hidden text-clip whitespace-nowrap">
                                  <div className="truncate">Quick Note</div>
                                </div>
                                <div className="flex h-full shrink-0 grow-0 items-center justify-center">
                                  <div className="clip-rect-1 absolute block h-px w-px overflow-hidden whitespace-nowrap pl-[3px]">
                                    <button
                                      type="button"
                                      className="ml-1 flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                    >
                                      <svg
                                        role="graphics-symbol"
                                        viewBox="0 0 13 3"
                                        className="block h-full w-3.5 fill-[rgba(25,23,17,0.6)]"
                                      >
                                        <g>
                                          <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
                                          <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
                                          <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
                                        </g>
                                      </svg>
                                    </button>
                                    <button
                                      type="button"
                                      className="ml-1 flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                    >
                                      <svg
                                        role="graphics-symbol"
                                        viewBox="0 0 14 14"
                                        className="block h-full w-3.5 fill-[rgba(25,23,17,0.6)]"
                                      >
                                        <path d="M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div>
                            <Link
                              href="/Getting-Started-407bdda45d31450ab86e1ac72609b2b9?pvs=12"
                              rel="noopener noreferrer"
                              className="mx-1 block w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] text-inherit transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                            >
                              <div className="my-px flex min-h-[27px] w-full items-center rounded-[3px] py-0.5 pl-[5px] pr-2.5 text-sm font-semibold text-[rgba(55,53,47,0.65)]">
                                <div className="mr-0 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                                  <button
                                    type="button"
                                    tabIndex={0}
                                    className="relative flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                  >
                                    <svg
                                      role="graphics-symbol"
                                      viewBox="0 0 12 12"
                                      className="-rotate-z-90 block h-3 w-3 shrink-0 fill-[rgba(55,53,47,0.35)] opacity-100 transition-transform duration-200"
                                    >
                                      <path d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z"></path>
                                    </svg>
                                  </button>
                                </div>
                                <div className="relative -ml-[3px] mr-1 flex h-[18px] w-[22px] shrink-0 grow-0 items-center justify-center">
                                  <button
                                    type="button"
                                    className="flex h-5 w-5 shrink-0 cursor-pointer select-none items-center justify-center rounded-[0.25em] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                  >
                                    <div>
                                      <div className="h-full w-full">
                                        <Image
                                          src="https://www.notion.so/icons/cut_lightgray.svg?mode=light"
                                          alt=""
                                          width={150}
                                          height={150}
                                          referrerPolicy="same-origin"
                                          className="block h-5 w-5 rounded object-cover transition-opacity duration-100"
                                        />
                                      </div>
                                    </div>
                                  </button>
                                </div>
                                <div className="flex min-w-0 flex-auto items-center overflow-hidden text-clip whitespace-nowrap">
                                  <div className="truncate">Task List</div>
                                </div>
                                <div className="flex h-full shrink-0 grow-0 items-center justify-center">
                                  <div className="clip-rect-1 absolute block h-px w-px overflow-hidden whitespace-nowrap pl-[3px]">
                                    <button
                                      type="button"
                                      className="ml-1 flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                    >
                                      <svg
                                        role="graphics-symbol"
                                        viewBox="0 0 13 3"
                                        className="block h-full w-3.5 fill-[rgba(25,23,17,0.6)]"
                                      >
                                        <g>
                                          <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
                                          <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
                                          <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
                                        </g>
                                      </svg>
                                    </button>
                                    <button
                                      type="button"
                                      className="ml-1 flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                    >
                                      <svg
                                        role="graphics-symbol"
                                        viewBox="0 0 14 14"
                                        className="block h-full w-3.5 fill-[rgba(25,23,17,0.6)]"
                                      >
                                        <path d="M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div>
                            <Link
                              href="/Getting-Started-407bdda45d31450ab86e1ac72609b2b9?pvs=12"
                              rel="noopener noreferrer"
                              className="mx-1 block w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] text-inherit transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                            >
                              <div className="my-px flex min-h-[27px] w-full items-center rounded-[3px] py-0.5 pl-[5px] pr-2.5 text-sm font-semibold text-[rgba(55,53,47,0.65)]">
                                <div className="mr-0 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                                  <button
                                    type="button"
                                    tabIndex={0}
                                    className="relative flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                  >
                                    <svg
                                      role="graphics-symbol"
                                      viewBox="0 0 12 12"
                                      className="-rotate-z-90 block h-3 w-3 shrink-0 fill-[rgba(55,53,47,0.35)] opacity-100 transition-transform duration-200"
                                    >
                                      <path d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z"></path>
                                    </svg>
                                  </button>
                                </div>
                                <div className="relative -ml-[3px] mr-1 flex h-[18px] w-[22px] shrink-0 grow-0 items-center justify-center">
                                  <button
                                    type="button"
                                    className="flex h-5 w-5 shrink-0 cursor-pointer select-none items-center justify-center rounded-[0.25em] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                  >
                                    <div>
                                      <div className="h-full w-full">
                                        <Image
                                          src="https://www.notion.so/icons/book_lightgray.svg?mode=light"
                                          alt=""
                                          width={150}
                                          height={150}
                                          referrerPolicy="same-origin"
                                          className="block h-5 w-5 rounded object-cover transition-opacity duration-100"
                                        />
                                      </div>
                                    </div>
                                  </button>
                                </div>
                                <div className="flex min-w-0 flex-auto items-center overflow-hidden text-clip whitespace-nowrap">
                                  <div className="truncate">Journal</div>
                                </div>
                                <div className="flex h-full shrink-0 grow-0 items-center justify-center">
                                  <div className="clip-rect-1 absolute block h-px w-px overflow-hidden whitespace-nowrap pl-[3px]">
                                    <button
                                      type="button"
                                      className="ml-1 flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                    >
                                      <svg
                                        role="graphics-symbol"
                                        viewBox="0 0 13 3"
                                        className="block h-full w-3.5 fill-[rgba(25,23,17,0.6)]"
                                      >
                                        <g>
                                          <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
                                          <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
                                          <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
                                        </g>
                                      </svg>
                                    </button>
                                    <button
                                      type="button"
                                      className="ml-1 flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                    >
                                      <svg
                                        role="graphics-symbol"
                                        viewBox="0 0 14 14"
                                        className="block h-full w-3.5 fill-[rgba(25,23,17,0.6)]"
                                      >
                                        <path d="M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div>
                            <Link
                              href="/Getting-Started-407bdda45d31450ab86e1ac72609b2b9?pvs=12"
                              rel="noopener noreferrer"
                              className="mx-1 block w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] text-inherit transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                            >
                              <div className="my-px flex min-h-[27px] w-full items-center rounded-[3px] py-0.5 pl-[5px] pr-2.5 text-sm font-semibold text-[rgba(55,53,47,0.65)]">
                                <div className="mr-0 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                                  <button
                                    type="button"
                                    tabIndex={0}
                                    className="relative flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                  >
                                    <svg
                                      role="graphics-symbol"
                                      viewBox="0 0 12 12"
                                      className="-rotate-z-90 block h-3 w-3 shrink-0 fill-[rgba(55,53,47,0.35)] opacity-100 transition-transform duration-200"
                                    >
                                      <path d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z"></path>
                                    </svg>
                                  </button>
                                </div>
                                <div className="relative -ml-[3px] mr-1 flex h-[18px] w-[22px] shrink-0 grow-0 items-center justify-center">
                                  <button
                                    type="button"
                                    className="flex h-5 w-5 shrink-0 cursor-pointer select-none items-center justify-center rounded-[0.25em] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                  >
                                    <div>
                                      <div className="h-full w-full">
                                        <Image
                                          src="https://www.notion.so/icons/book-closed_lightgray.svg?mode=light"
                                          alt=""
                                          width={150}
                                          height={150}
                                          referrerPolicy="same-origin"
                                          className="block h-5 w-5 rounded object-cover transition-opacity duration-100"
                                        />
                                      </div>
                                    </div>
                                  </button>
                                </div>
                                <div className="flex min-w-0 flex-auto items-center overflow-hidden text-clip whitespace-nowrap">
                                  <div className="truncate">Reading List</div>
                                </div>
                                <div className="flex h-full shrink-0 grow-0 items-center justify-center">
                                  <div className="clip-rect-1 absolute block h-px w-px overflow-hidden whitespace-nowrap pl-[3px]">
                                    <button
                                      type="button"
                                      className="ml-1 flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms]"
                                    >
                                      <svg
                                        role="graphics-symbol"
                                        viewBox="0 0 13 3"
                                        className="block h-full w-3.5 fill-[rgba(25,23,17,0.6)]"
                                      >
                                        <g>
                                          <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
                                          <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
                                          <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
                                        </g>
                                      </svg>
                                    </button>
                                    <button
                                      type="button"
                                      className="ml-1 flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                    >
                                      <svg
                                        role="graphics-symbol"
                                        viewBox="0 0 14 14"
                                        className="block h-full w-3.5 fill-[rgba(25,23,17,0.6)]"
                                      >
                                        <path d="M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <button
                            type="button"
                            tabIndex={0}
                            className="block w-full cursor-pointer select-none transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                          >
                            <div className="my-px flex min-h-[27px] w-full items-center px-2.5 py-0.5 text-sm text-[rgba(55,53,47,0.65)]">
                              <div className="mr-2 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                                <div className="flex items-center justify-center">
                                  <svg
                                    role="graphics-symbol"
                                    viewBox="0 0 14 14"
                                    className="block h-4 w-4 shrink-0 fill-[rgba(55,53,47,0.45)]"
                                  >
                                    <path d="M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="min-w-0 flex-auto truncate text-left">
                                Add a page
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[18px]"></div>
                  <div className="shrink-0 grow-0">
                    <button
                      type="button"
                      tabIndex={0}
                      className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                    >
                      <div className="my-px flex min-h-6 w-full items-center px-2.5 py-0.5 text-xs">
                        <div className="mr-2 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                          <svg
                            role="graphics-symbol"
                            viewBox="0 0 20 20"
                            className="block h-4 w-4 shrink-0 fill-inherit text-[rgba(55,53,47,0.45)]"
                          >
                            <g>
                              <path d="M13.362 13.552c0 1.545-1.376 2.622-3.323 2.622-2.26 0-3.259-1.051-3.259-2.22 0-.986.623-1.765 1.571-2.154-.87-.714-1.142-1.286-1.142-2.039 0-1.272.973-2.44 2.998-2.44 1.74 0 2.688.883 2.688 1.986 0 .987-.585 1.558-1.247 1.96 1.299.805 1.714 1.428 1.714 2.285zM11.22 9.645c0-.701-.48-1.143-1.207-1.143-.65 0-.896.338-.896.727 0 .35.13.61.753.987l.96.584c.286-.39.39-.714.39-1.155zm-.065 4.556c0-.376-.246-.649-1.077-1.168l-.883-.558c-.39.402-.532.779-.532 1.246 0 .818.584 1.207 1.505 1.207.61 0 .987-.272.987-.727z"></path>
                              <path d="M16.664 0H3.334A3.333 3.333 0 000 3.334v13.332A3.333 3.333 0 003.334 20h13.332A3.333 3.333 0 0020 16.666V3.334A3.333 3.333 0 0016.666 0h-.002zm-.525 17.932H3.861a1.797 1.797 0 01-1.797-1.797V5.485h15.872v10.652c0 .993-.804 1.797-1.797 1.797v-.002z"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="min-w-0 flex-auto truncate">
                          <div className="flex items-center">
                            Calendar{" "}
                            <svg
                              role="graphics-symbol"
                              viewBox="0 0 16 16"
                              className="ml-1 block h-3.5 w-3.5 fill-[rgba(55,53,47,0.45)]"
                            >
                              <path d="M13.1475 10.5869V3.72363C13.1475 3.25195 12.833 2.93066 12.3477 2.93066H5.48438C5.02637 2.93066 4.70508 3.27246 4.70508 3.67578C4.70508 4.07227 5.05371 4.40039 5.46387 4.40039H7.89746L10.8438 4.30469L9.59961 5.39844L3.08496 11.9199C2.92773 12.0771 2.8457 12.2686 2.8457 12.46C2.8457 12.8564 3.20801 13.2256 3.61816 13.2256C3.80957 13.2256 3.99414 13.1504 4.15137 12.9932L10.6729 6.47168L11.7803 5.22754L11.6641 8.05762V10.6074C11.6641 11.0176 11.9922 11.373 12.4023 11.373C12.8057 11.373 13.1475 11.0312 13.1475 10.5869Z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="flex h-full shrink-0 grow-0 items-center justify-center">
                          <div className="ml-1.5 w-fit self-center whitespace-nowrap rounded bg-[rgba(35,131,226,0.1)] px-1 py-0.5 text-[11px] font-medium leading-[1.3] tracking-normal text-[rgb(35,131,226)]">
                            New
                          </div>
                        </div>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                    >
                      <div className="my-px flex min-h-6 w-full items-center px-2.5 py-0.5 text-xs">
                        <div className="mr-2 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                          <svg
                            role="graphics-symbol"
                            viewBox="0 0 20 20"
                            className="block h-5 w-full shrink-0 fill-[rgba(55,53,47,0.45)]"
                          >
                            <g clipPath="url(#a)">
                              <g clipPath="url(#b)">
                                <path d="M15.898 14.531H14.57v1.18c0 1.664-.867 2.531-2.562 2.531H4.102c-1.688 0-2.563-.867-2.563-2.531V7.742c0-1.664.875-2.531 2.563-2.531H5.43V4.03c0-1.664.875-2.531 2.562-2.531h7.906c1.688 0 2.563.86 2.563 2.531v7.961c0 1.672-.875 2.54-2.563 2.54ZM15.805 13c.726 0 1.125-.375 1.125-1.133V4.164c0-.758-.399-1.14-1.125-1.14H8.078c-.719 0-1.125.382-1.125 1.14v1.047h5.055c1.695 0 2.562.867 2.562 2.531V13h1.235Zm-3.883 3.71c.726 0 1.117-.374 1.117-1.132V7.875c0-.758-.39-1.133-1.117-1.133H4.195c-.718 0-1.125.375-1.125 1.133v7.703c0 .758.407 1.133 1.125 1.133h7.727Z"></path>
                                <path d="M8 11.426c.855 0 1.574-.758 1.574-1.739C9.574 8.73 8.848 8 8 8c-.848 0-1.578.742-1.574 1.695 0 .973.722 1.73 1.574 1.73Zm-2.602 3.633h5.2c.437 0 .703-.207.703-.551 0-1.008-1.278-2.39-3.301-2.39-2.027 0-3.3 1.382-3.3 2.39 0 .344.26.55.698.55Z"></path>
                              </g>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path d="M0 0h20v20H0z"></path>
                              </clipPath>
                              <clipPath id="b">
                                <path
                                  transform="translate(-2.5 .5)"
                                  d="M0 0h28v21H0z"
                                ></path>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="min-w-0 flex-auto truncate text-left">
                          Create a teamspace
                        </div>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                    >
                      <div className="my-px flex min-h-6 w-full items-center px-2.5 py-0.5 text-xs">
                        <div className="mr-2 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                          <svg
                            role="graphics-symbol"
                            viewBox="0 0 14 15"
                            className="block h-[15px] w-full shrink-0 fill-[rgba(55,53,47,0.45)]"
                          >
                            <g>
                              <path d="M.11 5.918c0 2.367 1.628 4.348 3.837 4.916v1.412c0 1.283.686 1.969 1.987 1.969h5.97c1.295 0 1.987-.686 1.987-1.969V6.24c0-1.289-.692-1.969-1.987-1.969H10.07A5.112 5.112 0 005.23.85C2.4.85.11 3.117.11 5.918zm1.247 0c0-2.11 1.729-3.826 3.873-3.826a3.87 3.87 0 013.493 2.18h-2.79c-1.3 0-1.986.68-1.986 1.968v3.293a3.83 3.83 0 01-2.59-3.615zm4.688 6.99c-.516 0-.791-.258-.791-.797V6.375c0-.54.275-.797.79-.797h5.749c.516 0 .791.258.791.797v5.736c0 .54-.275.797-.791.797H6.045z"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="min-w-0 flex-auto truncate text-left">
                          Templates
                        </div>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                    >
                      <div className="my-px flex min-h-6 w-full items-center px-2.5 py-0.5 text-xs">
                        <div className="mr-2 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                          <svg
                            role="graphics-symbol"
                            viewBox="0 0 14 14"
                            className="block h-[15px] w-full shrink-0 fill-[rgba(55,53,47,0.45)]"
                          >
                            <path d="M11.2857,6.05714 L10.08571,4.85714 L7.85714,7.14786 L7.85714,1 L6.14286,1 L6.14286,7.14786 L3.91429,4.85714 L2.71429,6.05714 L7,10.42857 L11.2857,6.05714 Z M1,11.2857 L1,13 L13,13 L13,11.2857 L1,11.2857 Z"></path>
                          </svg>
                        </div>
                        <div className="min-w-0 flex-auto truncate text-left">
                          Import
                        </div>
                      </div>
                    </button>
                    <div>
                      <button
                        type="button"
                        className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded-[3px] transition-colors duration-100 hover:bg-[rgba(55,53,47,0.08)]"
                      >
                        <div className="my-px flex min-h-6 w-full items-center px-2.5 py-0.5 text-xs">
                          <div className="mr-2 flex h-[22px] w-[22px] shrink-0 grow-0 items-center justify-center rounded text-[rgba(55,53,47,0.65)]">
                            <svg
                              role="graphics-symbol"
                              viewBox="0 0 16 16"
                              className="block h-full w-3.5 shrink-0 fill-[rgba(55,53,47,0.45)]"
                            >
                              <path d="M4.8623 15.4287H11.1445C12.1904 15.4287 12.8672 14.793 12.915 13.7402L13.3799 3.88965H14.1318C14.4736 3.88965 14.7402 3.62988 14.7402 3.28809C14.7402 2.95312 14.4736 2.69336 14.1318 2.69336H11.0898V1.66797C11.0898 0.62207 10.4268 0 9.29199 0H6.69434C5.56641 0 4.89648 0.62207 4.89648 1.66797V2.69336H1.86133C1.5332 2.69336 1.25977 2.95312 1.25977 3.28809C1.25977 3.62988 1.5332 3.88965 1.86133 3.88965H2.62012L3.08496 13.7471C3.13281 14.7998 3.80273 15.4287 4.8623 15.4287ZM6.1543 1.72949C6.1543 1.37402 6.40039 1.14844 6.7832 1.14844H9.20312C9.58594 1.14844 9.83203 1.37402 9.83203 1.72949V2.69336H6.1543V1.72949ZM4.99219 14.2188C4.61621 14.2188 4.34277 13.9453 4.32227 13.542L3.86426 3.88965H12.1152L11.6709 13.542C11.6572 13.9453 11.3838 14.2188 10.9941 14.2188H4.99219ZM5.9834 13.1182C6.27051 13.1182 6.45508 12.9336 6.44824 12.667L6.24316 5.50293C6.23633 5.22949 6.04492 5.05176 5.77148 5.05176C5.48438 5.05176 5.2998 5.23633 5.30664 5.50293L5.51172 12.667C5.51855 12.9404 5.70996 13.1182 5.9834 13.1182ZM8 13.1182C8.28711 13.1182 8.47852 12.9336 8.47852 12.667V5.50293C8.47852 5.23633 8.28711 5.05176 8 5.05176C7.71289 5.05176 7.52148 5.23633 7.52148 5.50293V12.667C7.52148 12.9336 7.71289 13.1182 8 13.1182ZM10.0166 13.1182C10.29 13.1182 10.4746 12.9404 10.4814 12.667L10.6934 5.50293C10.7002 5.23633 10.5088 5.05176 10.2285 5.05176C9.95508 5.05176 9.76367 5.22949 9.75684 5.50293L9.54492 12.667C9.53809 12.9336 9.72949 13.1182 10.0166 13.1182Z"></path>
                            </svg>
                          </div>
                          <div className="min-w-0 flex-auto truncate text-left">
                            Trash
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-auto block flex-[0_0_auto]"></div>
              </div>
            </div>
            <div
              className="pointer-events-auto absolute bottom-0 right-0 top-0 z-[1] w-0 grow-0"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
              onClick={() => {}}
            >
              <div className="-ml-1.5 h-full w-3 cursor-col-resize"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
