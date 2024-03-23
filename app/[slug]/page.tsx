"use client";

import Image from "next/image";

import { cn } from "@/common/libs/cn";

import { useWidthStore } from "@/stores/width";

const DetailPage = () => {
  const { mainWidth } = useWidthStore();

  return (
    <div className="flex w-full flex-col overflow-hidden">
      <header className="z-[100] max-w-[100vw] select-none bg-white">
        <div className="relative h-[45px] w-full max-w-[100vw] cursor-default opacity-100 transition-all duration-700">
          <div className="flex h-[45px] items-center justify-between overflow-hidden pl-3 pr-2.5">
            <div className="mr-2 flex h-full min-w-0 grow-0 items-center text-sm leading-[1.2]">
              <button
                type="button"
                tabIndex={0}
                className="inline-flex h-6 min-w-0 shrink cursor-pointer select-none items-center whitespace-nowrap rounded px-1.5 text-sm leading-[1.2] text-[rgb(55,53,47)] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
              >
                <div className="max-w-60 truncate">Getting Started</div>
              </button>
            </div>
            <div className="shrink grow"></div>
            <div className="z-[101] flex h-[45px] shrink-0 grow-0 items-center justify-between pl-3 pr-0 opacity-100 transition-all duration-700">
              <div></div>
              <div className="flex">
                <span className="hidden h-7 whitespace-nowrap text-sm leading-[1.2] text-[rgba(55,53,47,0.5)] opacity-0 transition-opacity">
                  <div className="flex flex-row flex-wrap">
                    <div>Edited Nov 30, 2023</div>
                  </div>
                </span>
                <div>
                  <button
                    type="button"
                    tabIndex={0}
                    className="ml-3 mr-0.5 inline-flex h-7 min-w-0 cursor-pointer select-none items-center whitespace-nowrap rounded px-2 text-sm leading-[1.2] text-[rgb(55,53,47)] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                  >
                    Share
                  </button>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    tabIndex={0}
                    className="mr-0.5 inline-flex h-7 w-[33px] cursor-pointer select-none items-center justify-center rounded p-0 transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                  >
                    <svg
                      role="graphics-symbol"
                      viewBox="0 0 20 20"
                      className="block h-5 w-5 shrink-0 fill-[rgba(55,53,47,0.85)]"
                    >
                      <path d="M5.9375 18.4844C6.38281 18.4844 6.71094 18.2656 7.25 17.7891L9.92969 15.4297H14.6328C16.9844 15.4297 18.3047 14.0703 18.3047 11.75V5.67969C18.3047 3.35938 16.9844 2 14.6328 2H4.67188C2.32812 2 1 3.35938 1 5.67969V11.75C1 14.0781 2.36719 15.4297 4.61719 15.4297H4.9375V17.3438C4.9375 18.0391 5.30469 18.4844 5.9375 18.4844ZM6.32812 16.7344V14.5078C6.32812 14.0469 6.125 13.8672 5.6875 13.8672H4.72656C3.25781 13.8672 2.55469 13.125 2.55469 11.7031V5.72656C2.55469 4.30469 3.25781 3.5625 4.72656 3.5625H14.5859C16.0469 3.5625 16.75 4.30469 16.75 5.72656V11.7031C16.75 13.125 16.0469 13.8672 14.5859 13.8672H9.84375C9.36719 13.8672 9.13281 13.9453 8.80469 14.2891L6.32812 16.7344ZM5.67969 6.82812H13.5469C13.8125 6.82812 14.0312 6.60156 14.0312 6.32812C14.0312 6.07031 13.8125 5.85156 13.5469 5.85156H5.67969C5.41406 5.85156 5.20312 6.07031 5.20312 6.32812C5.20312 6.60156 5.41406 6.82812 5.67969 6.82812ZM5.67969 9.30469H13.5469C13.8125 9.30469 14.0312 9.08594 14.0312 8.8125C14.0312 8.55469 13.8125 8.32812 13.5469 8.32812H5.67969C5.41406 8.32812 5.20312 8.55469 5.20312 8.8125C5.20312 9.08594 5.41406 9.30469 5.67969 9.30469ZM5.67969 11.7891H10.8047C11.0781 11.7891 11.2891 11.5703 11.2891 11.3047C11.2891 11.0312 11.0781 10.8125 10.8047 10.8125H5.67969C5.41406 10.8125 5.20312 11.0312 5.20312 11.3047C5.20312 11.5703 5.41406 11.7891 5.67969 11.7891Z"></path>
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  className="mr-0.5 inline-flex h-7 w-[33px] shrink-0 cursor-pointer select-none items-center justify-center rounded p-0 transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                >
                  <svg
                    role="graphics-symbol"
                    viewBox="0 0 20 20"
                    className="block h-5 w-5 shrink-0 fill-[rgba(55,53,47,0.85)]"
                  >
                    <path d="M10.0781 18.1562C14.5078 18.1562 18.1641 14.5 18.1641 10.0781C18.1641 5.65625 14.5 2 10.0703 2C5.64844 2 2 5.65625 2 10.0781C2 14.5 5.65625 18.1562 10.0781 18.1562ZM10.0781 16.5469C6.49219 16.5469 3.625 13.6641 3.625 10.0781C3.625 6.49219 6.49219 3.61719 10.0703 3.61719C13.6562 3.61719 16.5391 6.49219 16.5469 10.0781C16.5547 13.6641 13.6641 16.5469 10.0781 16.5469ZM6.14062 11.0625H10.0703C10.4297 11.0625 10.7031 10.7891 10.7031 10.4375V5.32812C10.7031 4.97656 10.4297 4.70312 10.0703 4.70312C9.72656 4.70312 9.45312 4.97656 9.45312 5.32812V9.8125H6.14062C5.78906 9.8125 5.51562 10.0859 5.51562 10.4375C5.51562 10.7891 5.78906 11.0625 6.14062 11.0625Z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="mr-0.5 inline-flex h-7 w-[33px] shrink-0 cursor-pointer select-none items-center justify-center rounded p-0 transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                >
                  <svg
                    role="graphics-symbol"
                    viewBox="0 0 20 20"
                    className="block h-5 w-5 shrink-0 fill-[rgba(55,53,47,0.85)]"
                  >
                    <path d="M4.77321 18.0645C5.14821 18.3457 5.60915 18.252 6.1404 17.8691L10.2029 14.8848L14.2576 17.8691C14.7888 18.252 15.2498 18.3457 15.6248 18.0645C15.992 17.7832 16.0701 17.3223 15.8591 16.7051L14.2576 11.9395L18.3513 9.00195C18.8826 8.62695 19.1013 8.20508 18.9529 7.76758C18.8045 7.33008 18.3904 7.11133 17.7341 7.11914L12.7185 7.1582L11.1873 2.36133C10.9841 1.73633 10.6638 1.40039 10.2029 1.40039C9.73415 1.40039 9.41383 1.73633 9.21071 2.36133L7.68727 7.1582L2.66383 7.11914C2.00758 7.11133 1.59352 7.33008 1.44508 7.75977C1.29665 8.20508 1.52321 8.62695 2.04665 9.00195L6.1404 11.9395L4.53883 16.7051C4.3279 17.3223 4.40602 17.7832 4.77321 18.0645ZM6.17165 16.1504C6.15602 16.1348 6.15602 16.127 6.17165 16.0801L7.64821 11.916C7.78102 11.5254 7.74196 11.291 7.37477 11.0488L3.72633 8.54883C3.69508 8.52539 3.67946 8.50977 3.69508 8.49414C3.7029 8.4707 3.71852 8.4707 3.75758 8.4707L8.17946 8.57227C8.58571 8.58789 8.79665 8.45508 8.91383 8.05664L10.156 3.82227C10.1716 3.77539 10.1795 3.75977 10.2029 3.75977C10.2185 3.75977 10.2341 3.77539 10.242 3.82227L11.4841 8.05664C11.6013 8.45508 11.8123 8.58789 12.2263 8.57227L16.6404 8.4707C16.6873 8.4707 16.7029 8.4707 16.7107 8.49414C16.7185 8.50977 16.7029 8.52539 16.6716 8.54883L13.0232 11.0488C12.6638 11.291 12.617 11.5254 12.7576 11.916L14.2263 16.0801C14.242 16.127 14.242 16.1348 14.2263 16.1504C14.2185 16.166 14.1951 16.1582 14.1638 16.1348L10.6638 13.4316C10.3357 13.1816 10.0623 13.1816 9.73415 13.4316L6.23415 16.1348C6.2029 16.1582 6.18727 16.166 6.17165 16.1504Z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  tabIndex={0}
                  className="flex h-7 w-8 cursor-pointer select-none items-center justify-center rounded transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                >
                  <svg
                    role="graphics-symbol"
                    viewBox="0 0 13 3"
                    className="block h-[18px] w-[18px] shrink-0 fill-[rgba(55,53,47,0.85)]"
                  >
                    <g>
                      <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
                      <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
                      <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[calc(100%+0)] select-none"></div>
      </header>
      <main
        className={cn(
          "relative z-[1] flex h-[calc(-45px+100vh)] max-h-full shrink grow-0 flex-col bg-white transition-[width] duration-[270ms]",
          mainWidth && `${mainWidth}px`
        )}
      >
        <div className="relative z-[1] mb-0 mr-0 flex grow flex-col items-center overflow-y-auto overflow-x-hidden">
          <div className="absolute left-0 top-0">
            <div></div>
          </div>
          <div
            className="whenContentEditable relative flex w-full grow flex-col items-center text-[rgb(55,53,47)]"
            contentEditable
          >
            <span className="h-px w-px caret-transparent"></span>
            <div className="grid w-full grid-cols-main pb-[30vh]">
              <div className="grid-column-full">
                <div
                  className="z-[2] flex w-full shrink-0 grow-0 select-none flex-col items-center"
                  contentEditable={false}
                ></div>
              </div>
              <div className="grid-column-content min-w-0">
                <div className="flex w-full shrink-0 grow-0 flex-col items-center">
                  <div className="w-full max-w-full pl-[calc(0px+0px)]">
                    <div
                      className="pointer-events-none select-none"
                      contentEditable={false}
                    >
                      <div className="pointer-events-auto -ml-px mb-1 mt-20 flex flex-wrap justify-start font-sans text-[rgba(55,53,47,0.5)]">
                        <button
                          type="button"
                          tabIndex={0}
                          className="pointer-events-none inline-flex h-7 min-w-0 shrink-0 cursor-pointer select-none items-center whitespace-nowrap rounded pl-1.5 pr-2 text-sm leading-[1.2] text-[rgba(55,53,47,0.5)] opacity-0 transition-opacity duration-100"
                        >
                          <svg
                            role="graphics-symbol"
                            viewBox="0 0 14 14"
                            className="mr-1.5 block h-3.5 w-3.5 shrink-0 fill-[rgba(55,53,47,0.35)]"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7 0c3.861 0 7 3.139 7 7s-3.139 7-7 7-7-3.139-7-7 3.139-7 7-7zM3.561 5.295a1.027 1.027 0 1 0 2.054 0 1.027 1.027 0 0 0-2.054 0zm5.557 1.027a1.027 1.027 0 1 1 0-2.054 1.027 1.027 0 0 1 0 2.054zm1.211 2.816a.77.77 0 0 0-.124-1.087.786.786 0 0 0-1.098.107c-.273.407-1.16.958-2.254.958-1.093 0-1.981-.55-2.244-.945a.788.788 0 0 0-1.107-.135.786.786 0 0 0-.126 1.101c.55.734 1.81 1.542 3.477 1.542 1.668 0 2.848-.755 3.476-1.541z"
                            ></path>
                          </svg>{" "}
                          Add icon
                        </button>
                        <button
                          type="button"
                          tabIndex={0}
                          className="pointer-events-none inline-flex h-7 min-w-0 shrink-0 cursor-pointer select-none items-center whitespace-nowrap rounded pl-1.5 pr-2 text-sm leading-[1.2] text-[rgba(55,53,47,0.5)] opacity-0 transition-opacity duration-100"
                        >
                          <svg
                            role="graphics-symbol"
                            viewBox="0 0 14 14"
                            className="mr-1.5 block h-3.5 w-3.5 shrink-0 fill-[rgba(55,53,47,0.35)]"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm0 12h10L8.5 5.5l-2 4-2-1.5L2 12z"
                            ></path>
                          </svg>{" "}
                          Add cover
                        </button>
                        <button
                          type="button"
                          tabIndex={0}
                          className="pointer-events-none inline-flex h-7 min-w-0 shrink-0 cursor-pointer select-none items-center whitespace-nowrap rounded pl-1.5 pr-2 text-sm leading-[1.2] text-[rgba(55,53,47,0.5)] opacity-0 transition-opacity duration-100"
                        >
                          <svg
                            role="graphics-symbol"
                            viewBox="0 0 16 16"
                            className="mr-1.5 block h-3.5 w-3.5 shrink-0 fill-[rgba(55,53,47,0.35)]"
                          >
                            <path d="M4.095 15.465c.287 0 .499-.137.84-.444l2.523-2.277 4.47.007c2.058 0 3.214-1.19 3.214-3.22V4.22c0-2.03-1.156-3.22-3.213-3.22H3.213C1.163 1 0 2.19 0 4.22V9.53c0 2.037 1.196 3.22 3.165 3.213h.273v1.983c0 .45.24.738.657.738zM3.958 5.156a.454.454 0 01-.444-.45c0-.24.198-.438.444-.438h7.157c.246 0 .445.198.445.437a.45.45 0 01-.445.451H3.958zm0 2.256a.454.454 0 01-.444-.451c0-.24.198-.444.444-.444h7.157a.448.448 0 010 .895H3.958zm0 2.256a.448.448 0 010-.896h4.669c.246 0 .437.206.437.452a.438.438 0 01-.437.444H3.958z"></path>
                          </svg>{" "}
                          Add comment
                        </button>
                      </div>
                    </div>
                    <div className="pr-[calc(0px+0px)]">
                      <div>
                        <div className="flex cursor-text items-center font-sans text-[40px] font-bold leading-[1.2] text-[rgb(55,53,47)]">
                          <h1
                            className="m-0 w-full max-w-full whitespace-pre-wrap break-words px-0.5 py-[3px] text-[1em] font-bold caret-[rgb(55,53,47)]"
                            contentEditable
                          >
                            Getting Started
                          </h1>
                        </div>
                        <div className="ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-column-content min-h-[170px] min-w-0 pt-[5px]">
                <div className="z-[4] flex w-full max-w-full shrink-0 grow flex-col items-start px-0 pb-0 text-base leading-normal">
                  <div className="mb-px mt-0.5 w-full max-w-[918px]">
                    <div className="fill-inherit text-inherit">
                      <div className="flex">
                        <div
                          className="w-full max-w-full whitespace-pre-wrap break-words px-0.5 py-[3px] caret-[rgb(55,53,47)]"
                          contentEditable
                        >
                          <Image
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                            alt=""
                            width={1}
                            height={1}
                            className="mx-[0.1em] my-0 inline-block h-[1em] w-[1em] bg-[url('https://www.notion.so/images/emoji/twitter-emoji-spritesheet-64.2d0a6b9b.png')] bg-[length:6100%_6100%] bg-[20%_63.33333333333333%] bg-no-repeat align-[-0.1em]"
                          />{" "}
                          Welcome to Jotion!
                        </div>
                        <div className="relative left-0"></div>
                      </div>
                    </div>
                  </div>
                  <div className="my-px w-full max-w-[918px]">
                    <div className="fill-inherit text-inherit">
                      <div className="flex">
                        <div
                          className="min-h-[1em] w-full max-w-full whitespace-pre-wrap break-words px-0.5 py-[3px] text-[rgb(55,53,47)] caret-[rgb(55,53,47)]"
                          contentEditable
                          aria-placeholder="Test"
                        ></div>
                        <div className="relative left-0"></div>
                      </div>
                    </div>
                  </div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                </div>
              </div>
            </div>
            <span className="h-px w-px caret-transparent"></span>
          </div>
          <div className="absolute left-0 top-0 z-[89]">
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailPage;
