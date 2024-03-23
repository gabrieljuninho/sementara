import Image from "next/image";

const SearchModal = () => {
  return (
    <div className="pointer-events-auto relative z-0">
      <div className="pointer-events-auto fixed left-0 top-0 flex h-screen w-screen items-start justify-center">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[rgba(15,15,15,0.6)]"></div>
        <div className="translate-3d-0 relative top-[90px] z-[1] mb-0 max-h-modal min-h-modal w-full max-w-[755px] overflow-hidden rounded-xl bg-white shadow-modal backdrop-filter-none">
          <div className="flex h-full max-h-modal min-h-modal min-w-[180px] max-w-full flex-col">
            <div className="translate-z-0 flex max-h-modal min-h-modal grow flex-row justify-between">
              <div className="z-[2] flex flex-1 flex-col overflow-hidden">
                <div className="flex flex-1">
                  <div className="z-[1] flex h-12 w-full shrink-0 grow-0 items-center border-none bg-transparent py-0 pl-3 pr-4 text-lg leading-[inherit] shadow-divider">
                    <div className="mr-1.5">
                      <div className="flex h-6 w-6 items-center justify-center">
                        <svg
                          role="graphics-symbol"
                          viewBox="0 0 16 16"
                          className="block h-4 w-4 shrink-0 fill-[rgba(55,53,47,0.45)]"
                        >
                          <path d="M.281 6.438c0-.875.164-1.696.492-2.461a6.484 6.484 0 011.375-2.032A6.237 6.237 0 016.64.078 6.2 6.2 0 019.11.57c.77.328 1.447.787 2.03 1.375a6.374 6.374 0 011.368 2.032c.333.765.5 1.586.5 2.46 0 .688-.107 1.342-.32 1.961a6.28 6.28 0 01-.868 1.696l3.563 3.578c.11.104.19.226.242.367.057.14.086.29.086.445 0 .22-.05.417-.149.594a1.122 1.122 0 01-1 .57c-.156 0-.307-.028-.453-.086a1.058 1.058 0 01-.382-.25l-3.586-3.585c-.5.333-1.047.596-1.641.789a6.089 6.089 0 01-1.86.28 6.237 6.237 0 01-2.468-.491 6.4 6.4 0 01-2.024-1.367A6.509 6.509 0 01.773 8.913a6.256 6.256 0 01-.492-2.476zm1.664 0c0 .65.12 1.26.36 1.828a4.775 4.775 0 001.015 1.5c.433.427.933.763 1.5 1.007a4.548 4.548 0 001.82.368c.652 0 1.261-.123 1.829-.368a4.747 4.747 0 002.508-2.507 4.567 4.567 0 00.367-1.829c0-.645-.123-1.252-.367-1.82a4.776 4.776 0 00-1.016-1.5A4.578 4.578 0 008.469 2.11a4.567 4.567 0 00-1.828-.367c-.646 0-1.253.123-1.82.367a4.667 4.667 0 00-1.5 1.008c-.433.432-.772.932-1.016 1.5a4.633 4.633 0 00-.36 1.82z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Search Bing Code's Jotion..."
                        className="font-size-inherit block w-full min-w-0 resize-none truncate border-none bg-none p-0 leading-[inherit] outline-none"
                      />
                      <div className="pointer-events-none absolute top-0 w-full overflow-hidden text-ellipsis whitespace-pre text-[rgba(55,53,47,0.65)]"></div>
                    </div>
                    <div className="ml-1">
                      <button
                        type="button"
                        tabIndex={0}
                        className="ml-[5px] flex h-fit w-fit shrink-0 cursor-pointer select-none items-center justify-center rounded p-1 transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                      >
                        <svg
                          role="graphics-symbol"
                          viewBox="0 0 16 16"
                          className="block h-[17px] w-[17px] shrink-0 cursor-pointer fill-[rgb(172,171,169)]"
                        >
                          <path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.667 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM4.41797 6.75879H11.5889C11.9307 6.75879 12.1699 6.54688 12.1699 6.22559C12.1699 5.9043 11.9307 5.68555 11.5889 5.68555H4.41797C4.07617 5.68555 3.84375 5.9043 3.84375 6.22559C3.84375 6.54688 4.07617 6.75879 4.41797 6.75879ZM5.36816 9.02148H10.6455C10.9805 9.02148 11.2197 8.80273 11.2197 8.48145C11.2197 8.16016 10.9805 7.94141 10.6455 7.94141H5.36816C5.02637 7.94141 4.78711 8.16016 4.78711 8.48145C4.78711 8.80273 5.02637 9.02148 5.36816 9.02148ZM6.35254 11.2773H9.6543C9.99609 11.2773 10.2354 11.0654 10.2354 10.7441C10.2354 10.4229 9.99609 10.2041 9.6543 10.2041H6.35254C6.01074 10.2041 5.77148 10.4229 5.77148 10.7441C5.77148 11.0654 6.01074 11.2773 6.35254 11.2773Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="relative grow-0 overflow-hidden">
                    <div className="z-[1] mb-0 mr-0 flex items-center overflow-x-auto overflow-y-hidden px-3 py-2.5">
                      <div className="flex items-center">
                        <div className="mr-1.5 inline-flex rounded-[14px]">
                          <button
                            type="button"
                            tabIndex={0}
                            className="curpo inline-flex h-6 select-none items-center justify-center whitespace-nowrap rounded-[32px] border border-[rgba(55,53,47,0.16)] px-2 py-0 text-sm leading-6 text-[rgba(55,53,47,0.65)] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                          >
                            <svg
                              role="graphics-symbol"
                              viewBox="0 0 16 16"
                              className="mr-1.5 block h-full w-4 shrink-0 fill-current"
                            >
                              <path d="M4.11 2.385a.61.61 0 01.48-.211c.191 0 .353.07.486.21L8.03 5.409a.66.66 0 01.2.475c0 .191-.061.347-.182.469a.627.627 0 01-.463.181.59.59 0 01-.451-.187L5.926 5.098l-.72-.844.04 1.219v7.242a.624.624 0 01-.187.469.624.624 0 01-.47.187.636.636 0 01-.468-.187.635.635 0 01-.182-.47V5.474l.041-1.22-.726.845-1.201 1.248a.61.61 0 01-.457.187.627.627 0 01-.463-.181.634.634 0 01-.182-.47.66.66 0 01.2-.474l2.958-3.023zm7.786 10.781a.636.636 0 01-.486.205.665.665 0 01-.486-.205l-2.947-3.035a.64.64 0 01-.206-.475c0-.191.061-.345.182-.463a.634.634 0 01.469-.181c.18 0 .33.06.451.181l1.201 1.248.727.85-.041-1.219V2.824c0-.187.06-.342.181-.463a.636.636 0 01.47-.187.627.627 0 01.65.65v7.248l-.041 1.219.726-.85 1.207-1.248a.6.6 0 01.451-.181c.188 0 .342.06.463.181a.615.615 0 01.182.463.648.648 0 01-.2.475l-2.953 3.035z"></path>
                            </svg>
                            Sort
                            <svg
                              role="graphics-symbol"
                              viewBox="0 0 30 30"
                              className="ml-1 mt-px block h-full w-2.5 shrink-0 fill-[rgba(55,53,47,0.35)]"
                            >
                              <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon>
                            </svg>
                          </button>
                        </div>
                        <div className="h-4 w-px rounded-[1px] bg-[rgba(227,226,224,0.5)]"></div>
                      </div>
                      <div className="my-0 ml-1.5 mr-0 flex shrink-0">
                        <div className="flex cursor-grab flex-row">
                          <div className="flex">
                            <div className="mr-1.5 inline-flex rounded-[14px]">
                              <button
                                type="button"
                                tabIndex={0}
                                className="inline-flex h-6 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[32px] border border-[rgba(55,53,47,0.16)] px-2 py-0 text-sm leading-6 text-[rgba(55,53,47,0.65)] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                              >
                                <svg
                                  role="graphics-symbol"
                                  viewBox="0 0 14 10"
                                  className="mr-1.5 block h-4 w-4 shrink-0 fill-current"
                                >
                                  <path d="M10.674 9.45c.293 0 .576-.052.85-.153.273-.098.515-.238.726-.422.215-.184.383-.4.504-.65h.03v.662a.569.569 0 00.163.416c.11.101.25.152.422.152a.579.579 0 00.428-.164c.11-.105.164-.256.164-.451V4.973c0-.43-.104-.805-.31-1.125-.208-.32-.5-.569-.88-.744-.378-.18-.828-.27-1.347-.27-.594 0-1.114.115-1.559.346-.445.226-.75.533-.914.92-.031.07-.056.14-.076.21a.684.684 0 00-.03.194c0 .148.05.27.147.363.102.09.23.135.387.135a.61.61 0 00.287-.064.555.555 0 00.217-.2c.172-.32.377-.554.615-.703.238-.148.533-.223.885-.223.426 0 .76.112 1.002.334.242.223.363.528.363.915v.486l-1.828.1c-.77.042-1.361.23-1.775.562-.41.328-.616.773-.616 1.336 0 .379.09.71.27.996.183.285.435.508.756.668.324.16.697.24 1.119.24zm.328-.938c-.367 0-.666-.092-.897-.276a.906.906 0 01-.345-.738.86.86 0 01.34-.709c.23-.184.558-.29.984-.322l1.664-.106v.598c0 .293-.078.557-.234.791a1.69 1.69 0 01-.627.557c-.266.136-.56.205-.885.205zM.689 9.414c.2 0 .354-.045.463-.135.114-.086.202-.234.264-.445l.65-1.816h3.346l.65 1.816c.063.21.149.36.258.445.114.09.268.135.463.135.207 0 .371-.057.492-.17a.593.593 0 00.188-.463c0-.129-.027-.27-.082-.422L4.79 1.357c-.09-.246-.22-.43-.393-.55C4.23.686 4.012.625 3.742.625c-.508 0-.847.244-1.02.732L.116 8.39a1.3 1.3 0 00-.076.404c0 .195.057.348.17.457.117.11.277.164.48.164zm1.717-3.486L3.73 2.119h.03l1.324 3.809H2.406z"></path>
                                </svg>
                                <span>
                                  <div className="max-w-[220px] truncate">
                                    Title only
                                  </div>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex cursor-grab flex-row">
                          <div className="flex">
                            <div className="flex">
                              <div className="mr-1.5 inline-flex rounded-[14px] opacity-100">
                                <button
                                  type="button"
                                  tabIndex={0}
                                  className="inline-flex h-6 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[32px] border border-[rgba(55,53,47,0.16)] px-2 py-0 text-sm leading-6 text-[rgba(55,53,47,0.65)] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                >
                                  <svg
                                    role="graphics-symbol"
                                    viewBox="0 0 16 16"
                                    className="mr-0.5 block h-4 w-4 shrink-0 fill-current"
                                  >
                                    <path d="M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"></path>
                                  </svg>
                                  <span>
                                    <div className="max-w-[220px] truncate">
                                      Created by
                                    </div>
                                  </span>
                                  <svg
                                    role="graphics-symbol"
                                    viewBox="0 0 30 30"
                                    className="ml-1 mt-px block h-full w-2.5 shrink-0 fill-[rgba(55,53,47,0.35)]"
                                  >
                                    <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex cursor-grab flex-row"></div>
                        <div className="flex cursor-grab flex-row">
                          <div className="flex">
                            <div className="flex">
                              <div className="mr-1.5 inline-flex rounded-[14px] opacity-100">
                                <button
                                  type="button"
                                  tabIndex={0}
                                  className="inline-flex h-6 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[32px] border border-[rgba(55,53,47,0.16)] px-2 py-0 text-sm leading-6 text-[rgba(55,53,47,0.65)] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                                >
                                  <svg
                                    role="graphics-symbol"
                                    viewBox="0 0 12 14"
                                    className="mr-1.5 block h-4 w-4 shrink-0 fill-current"
                                  >
                                    <path d="M2.877 13.365h6.24c.63 0 1.104-.164 1.424-.492.32-.324.48-.8.48-1.43V6.13c0-.274-.015-.504-.046-.691a1.531 1.531 0 00-.182-.522 2.185 2.185 0 00-.387-.498l-3.07-3.123a2.11 2.11 0 00-.48-.38 1.528 1.528 0 00-.51-.183A3.464 3.464 0 005.7.68H2.877c-.629 0-1.104.164-1.424.492-.32.324-.48.8-.48 1.43v8.841c0 .633.16 1.112.48 1.436.32.324.795.486 1.424.486zm.094-1.154c-.282 0-.492-.072-.633-.217-.14-.144-.211-.351-.211-.621V2.678c0-.27.07-.479.21-.627.142-.149.354-.223.64-.223h2.496V5.04c0 .418.101.73.304.938.207.207.52.31.938.31h3.158v5.086c0 .27-.07.477-.21.621-.142.145-.354.217-.64.217H2.971zm3.855-6.938c-.12 0-.209-.027-.263-.082-.051-.054-.077-.142-.077-.263V1.986l3.229 3.287H6.826z"></path>
                                  </svg>
                                  <span>
                                    <div className="max-w-[220px] truncate">
                                      In
                                    </div>
                                  </span>
                                  <svg
                                    role="graphics-symbol"
                                    viewBox="0 0 30 30"
                                    className="ml-1 mt-px block h-full w-2.5 shrink-0 fill-[rgba(55,53,47,0.35)]"
                                  >
                                    <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex cursor-grab flex-row">
                          <div className="flex">
                            <div className="mr-1.5 inline-flex rounded-[14px] opacity-100">
                              <button
                                type="button"
                                tabIndex={0}
                                className="inline-flex h-6 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[32px] border border-[rgba(55,53,47,0.16)] px-2 py-0 text-sm leading-6 text-[rgba(55,53,47,0.65)] transition-colors duration-[20ms] hover:bg-[rgba(55,53,47,0.08)]"
                              >
                                <svg
                                  role="graphics-symbol"
                                  viewBox="0 0 16 16"
                                  className="mr-1.5 block h-4 w-4 shrink-0 fill-current"
                                >
                                  <path d="M3.24902 14.7764H12.6621C14.1455 14.7764 14.918 14.0107 14.918 12.5479V4.22852C14.918 2.76562 14.1455 2 12.6621 2H3.24902C1.77246 2 1 2.75879 1 4.22852V12.5479C1 14.0107 1.77246 14.7764 3.24902 14.7764ZM3.24219 13.416C2.6748 13.416 2.36035 13.1221 2.36035 12.5205V6.23145C2.36035 5.62988 2.6748 5.33594 3.24219 5.33594H12.6689C13.2363 5.33594 13.5508 5.62988 13.5508 6.23145V12.5205C13.5508 13.1221 13.2363 13.416 12.6689 13.416H3.24219ZM6.63965 7.69434H7.04297C7.28906 7.69434 7.37109 7.61914 7.37109 7.37988V6.97656C7.37109 6.73047 7.28906 6.65527 7.04297 6.65527H6.63965C6.39355 6.65527 6.31152 6.73047 6.31152 6.97656V7.37988C6.31152 7.61914 6.39355 7.69434 6.63965 7.69434ZM8.875 7.69434H9.27832C9.51758 7.69434 9.59961 7.61914 9.59961 7.37988V6.97656C9.59961 6.73047 9.51758 6.65527 9.27832 6.65527H8.875C8.62891 6.65527 8.54688 6.73047 8.54688 6.97656V7.37988C8.54688 7.61914 8.62891 7.69434 8.875 7.69434ZM11.1035 7.69434H11.5068C11.7529 7.69434 11.835 7.61914 11.835 7.37988V6.97656C11.835 6.73047 11.7529 6.65527 11.5068 6.65527H11.1035C10.8643 6.65527 10.7822 6.73047 10.7822 6.97656V7.37988C10.7822 7.61914 10.8643 7.69434 11.1035 7.69434ZM4.41113 9.89551H4.80762C5.05371 9.89551 5.13574 9.82031 5.13574 9.57422V9.1709C5.13574 8.93164 5.05371 8.85645 4.80762 8.85645H4.41113C4.16504 8.85645 4.08301 8.93164 4.08301 9.1709V9.57422C4.08301 9.82031 4.16504 9.89551 4.41113 9.89551ZM6.63965 9.89551H7.04297C7.28906 9.89551 7.37109 9.82031 7.37109 9.57422V9.1709C7.37109 8.93164 7.28906 8.85645 7.04297 8.85645H6.63965C6.39355 8.85645 6.31152 8.93164 6.31152 9.1709V9.57422C6.31152 9.82031 6.39355 9.89551 6.63965 9.89551ZM8.875 9.89551H9.27832C9.51758 9.89551 9.59961 9.82031 9.59961 9.57422V9.1709C9.59961 8.93164 9.51758 8.85645 9.27832 8.85645H8.875C8.62891 8.85645 8.54688 8.93164 8.54688 9.1709V9.57422C8.54688 9.82031 8.62891 9.89551 8.875 9.89551ZM11.1035 9.89551H11.5068C11.7529 9.89551 11.835 9.82031 11.835 9.57422V9.1709C11.835 8.93164 11.7529 8.85645 11.5068 8.85645H11.1035C10.8643 8.85645 10.7822 8.93164 10.7822 9.1709V9.57422C10.7822 9.82031 10.8643 9.89551 11.1035 9.89551ZM4.41113 12.0898H4.80762C5.05371 12.0898 5.13574 12.0146 5.13574 11.7754V11.3721C5.13574 11.126 5.05371 11.0508 4.80762 11.0508H4.41113C4.16504 11.0508 4.08301 11.126 4.08301 11.3721V11.7754C4.08301 12.0146 4.16504 12.0898 4.41113 12.0898ZM6.63965 12.0898H7.04297C7.28906 12.0898 7.37109 12.0146 7.37109 11.7754V11.3721C7.37109 11.126 7.28906 11.0508 7.04297 11.0508H6.63965C6.39355 11.0508 6.31152 11.126 6.31152 11.3721V11.7754C6.31152 12.0146 6.39355 12.0898 6.63965 12.0898ZM8.875 12.0898H9.27832C9.51758 12.0898 9.59961 12.0146 9.59961 11.7754V11.3721C9.59961 11.126 9.51758 11.0508 9.27832 11.0508H8.875C8.62891 11.0508 8.54688 11.126 8.54688 11.3721V11.7754C8.54688 12.0146 8.62891 12.0898 8.875 12.0898Z"></path>
                                </svg>
                                <span>
                                  <div className="max-w-[220px] truncate">
                                    Date
                                  </div>
                                </span>
                                <svg
                                  role="graphics-symbol"
                                  viewBox="0 0 30 30"
                                  className="ml-1 mt-px block h-full w-2.5 shrink-0 fill-[rgba(55,53,47,0.35)]"
                                >
                                  <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex cursor-grab flex-row"></div>
                        <div className="flex cursor-grab flex-row"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full w-full overflow-y-auto overflow-x-hidden pt-2">
                  <div tabIndex={0}>
                    <div className="mb-[18px]">
                      <div className="mb-2 mt-1.5 flex select-none fill-[rgba(55,53,47,0.45)] px-3.5 text-xs font-medium leading-[120%] text-[rgba(55,53,47,0.65)]">
                        <div className="self-center truncate">Today</div>
                        <div className="ml-auto">
                          <Image
                            src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            alt="Loading..."
                            width={150}
                            height={150}
                            className="pointer-events-none block h-[1em] w-[1em] origin-[center_center] animate-rotate opacity-50"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        tabIndex={-1}
                        className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded pl-0.5 hover:bg-[rgba(227,226,224,0.5)]"
                      >
                        <div className="flex min-h-9 w-full select-none items-center py-2 text-sm leading-[120%]">
                          <div className="ml-2.5 mr-1 mt-px flex items-center justify-center self-center">
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
                          <div className="ml-1 mr-1.5 inline-flex w-full min-w-0 flex-auto items-center">
                            <div className="max-w-full shrink-0 truncate">
                              <div className="flex justify-between font-medium leading-5">
                                <div className="flex">
                                  <div className="truncate font-medium leading-5">
                                    Getting Started
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-px inline-flex truncate text-xs text-[rgb(145,145,142)]">
                              <span className="invisible mx-[0.5em] mt-0 truncate text-xs text-[rgb(199,198,196)]">
                                -
                              </span>
                              <div></div>
                            </div>
                            <div className="mt-1 break-words text-xs text-[rgba(55,53,47,0.65)]"></div>
                          </div>
                          <div className="ml-auto mr-3 mt-[3px] min-w-0 flex-[0_0_auto] self-start text-xs font-normal text-[rgb(172,171,169)]">
                            <div className="flex">
                              <svg
                                role="graphics-symbol"
                                viewBox="0 0 16 16"
                                className="block h-3 w-3 shrink-0 fill-[rgb(145,145,142)] opacity-100"
                              >
                                <path d="M5.38965 14.1667C5.81812 14.1667 6.10156 13.8767 6.10156 13.468C6.10156 13.2571 6.01587 13.0989 5.89062 12.967L4.18994 11.3125L3.02979 10.3369L4.55908 10.4028H12.7922C14.4402 10.4028 15.1389 9.65796 15.1389 8.04297V4.13403C15.1389 2.48608 14.4402 1.78735 12.7922 1.78735H9.13379C8.70532 1.78735 8.4021 2.11035 8.4021 2.50586C8.4021 2.90137 8.69873 3.22437 9.13379 3.22437H12.7593C13.4316 3.22437 13.7151 3.50781 13.7151 4.17358V7.99683C13.7151 8.67578 13.425 8.95923 12.7593 8.95923H4.55908L3.02979 9.03174L4.18994 8.04956L5.89062 6.39502C6.01587 6.26978 6.10156 6.11157 6.10156 5.89404C6.10156 5.48535 5.81812 5.19531 5.38965 5.19531C5.21167 5.19531 5.01392 5.27441 4.8689 5.41943L1.08521 9.1438C0.933594 9.28882 0.854492 9.48657 0.854492 9.68433C0.854492 9.87549 0.933594 10.0732 1.08521 10.2183L4.8689 13.9492C5.01392 14.0876 5.21167 14.1667 5.38965 14.1667Z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="mb-[18px]">
                      <div className="mb-2 mt-1.5 flex select-none fill-[rgba(55,53,47,0.45)] px-3.5 text-xs font-medium leading-[120%] text-[rgba(55,53,47,0.65)]">
                        <div className="self-center truncate">Past week</div>
                        <div className="ml-auto">
                          <Image
                            src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            alt="Loading..."
                            width={150}
                            height={150}
                            className="pointer-events-none block h-[1em] w-[1em] origin-[center_center] animate-rotate opacity-50"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        tabIndex={-1}
                        className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded pl-0.5 hover:bg-[rgba(227,226,224,0.5)]"
                      >
                        <div className="flex min-h-9 w-full select-none items-center py-2 text-sm leading-[120%]">
                          <div className="ml-2.5 mr-1 mt-px flex items-center justify-center self-center">
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
                          <div className="ml-1 mr-1.5 inline-flex w-full min-w-0 flex-auto items-center">
                            <div className="max-w-full shrink-0 truncate">
                              <div className="flex justify-between font-medium leading-5">
                                <div className="flex">
                                  <div className="truncate font-medium leading-5">
                                    Personal Home
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-px inline-flex truncate text-xs text-[rgb(120,119,116)]">
                              <span className="invisible mx-[0.5em] mt-0 truncate text-xs text-[rgb(199,198,196)]">
                                -
                              </span>
                              <div></div>
                            </div>
                            <div className="mt-1 break-words text-xs text-[rgba(55,53,47,0.65)]"></div>
                          </div>
                          <div className="ml-auto mr-3 mt-[3px] min-w-0 flex-[0_0_auto] self-start text-xs font-normal text-[rgb(172,171,169)]">
                            <div className="flex">1d ago</div>
                          </div>
                        </div>
                      </button>
                      <button
                        type="button"
                        tabIndex={-1}
                        className="mx-1 w-[calc(100%-8px)] cursor-pointer select-none rounded pl-0.5 hover:bg-[rgba(227,226,224,0.5)]"
                      >
                        <div className="flex min-h-9 w-full select-none items-center py-2 text-sm leading-[120%]">
                          <div className="ml-2.5 mr-1 mt-px flex items-center justify-center self-center">
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
                          <div className="ml-1 mr-1.5 inline-flex w-full min-w-0 flex-auto items-center">
                            <div className="max-w-full shrink-0 truncate">
                              <div className="flex justify-between font-medium leading-5">
                                <div className="flex">
                                  <div className="truncate font-medium leading-5">
                                    Quick Note
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-px inline-flex truncate text-xs text-[rgb(120,119,116)]">
                              <span className="invisible mx-[0.5em] mt-0 truncate text-xs text-[rgb(199,198,196)]">
                                -
                              </span>
                              <div></div>
                            </div>
                            <div className="mt-1 break-words text-xs text-[rgba(55,53,47,0.65)]"></div>
                          </div>
                          <div className="ml-auto mr-3 mt-[3px] min-w-0 flex-[0_0_auto] self-start text-xs font-normal text-[rgb(172,171,169)]">
                            <div className="flex">1d ago</div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div></div>
                </div>
                <footer className="shrink-0">
                  <div className="mt-px flex flex-row items-center justify-between text-sm shadow-footer-divider">
                    <div className="flex min-h-7 w-full select-none items-center truncate text-xs leading-[120%] text-[rgba(55,53,47,0.5)]">
                      <div className="mx-3 min-w-0 flex-auto">
                        <div className="truncate">
                          <ul className="m-0 inline-flex list-none items-center gap-5 truncate p-0 text-xs text-[rgba(55,53,47,0.5)]">
                            <li className="flex h-max items-center gap-1.5">
                              <svg
                                role="graphics-symbol"
                                viewBox="0 0 16 16"
                                className="inline h-[12.5px] w-[12.5px] shrink-0 fill-[rgba(55,53,47,0.45)]"
                              >
                                <path d="M4.11 2.385a.61.61 0 01.48-.211c.191 0 .353.07.486.21L8.03 5.409a.66.66 0 01.2.475c0 .191-.061.347-.182.469a.627.627 0 01-.463.181.59.59 0 01-.451-.187L5.926 5.098l-.72-.844.04 1.219v7.242a.624.624 0 01-.187.469.624.624 0 01-.47.187.636.636 0 01-.468-.187.635.635 0 01-.182-.47V5.474l.041-1.22-.726.845-1.201 1.248a.61.61 0 01-.457.187.627.627 0 01-.463-.181.634.634 0 01-.182-.47.66.66 0 01.2-.474l2.958-3.023zm7.786 10.781a.636.636 0 01-.486.205.665.665 0 01-.486-.205l-2.947-3.035a.64.64 0 01-.206-.475c0-.191.061-.345.182-.463a.634.634 0 01.469-.181c.18 0 .33.06.451.181l1.201 1.248.727.85-.041-1.219V2.824c0-.187.06-.342.181-.463a.636.636 0 01.47-.187.627.627 0 01.65.65v7.248l-.041 1.219.726-.85 1.207-1.248a.6.6 0 01.451-.181c.188 0 .342.06.463.181a.615.615 0 01.182.463.648.648 0 01-.2.475l-2.953 3.035z"></path>
                              </svg>
                              Select
                            </li>
                            <li className="flex h-max items-center gap-1.5">
                              <svg
                                role="graphics-symbol"
                                viewBox="0 0 16 16"
                                className="inline h-[11.5px] w-[11.5px] shrink-0 fill-[rgba(55,53,47,0.45)]"
                              >
                                <path d="M5.38965 14.1667C5.81812 14.1667 6.10156 13.8767 6.10156 13.468C6.10156 13.2571 6.01587 13.0989 5.89062 12.967L4.18994 11.3125L3.02979 10.3369L4.55908 10.4028H12.7922C14.4402 10.4028 15.1389 9.65796 15.1389 8.04297V4.13403C15.1389 2.48608 14.4402 1.78735 12.7922 1.78735H9.13379C8.70532 1.78735 8.4021 2.11035 8.4021 2.50586C8.4021 2.90137 8.69873 3.22437 9.13379 3.22437H12.7593C13.4316 3.22437 13.7151 3.50781 13.7151 4.17358V7.99683C13.7151 8.67578 13.425 8.95923 12.7593 8.95923H4.55908L3.02979 9.03174L4.18994 8.04956L5.89062 6.39502C6.01587 6.26978 6.10156 6.11157 6.10156 5.89404C6.10156 5.48535 5.81812 5.19531 5.38965 5.19531C5.21167 5.19531 5.01392 5.27441 4.8689 5.41943L1.08521 9.1438C0.933594 9.28882 0.854492 9.48657 0.854492 9.68433C0.854492 9.87549 0.933594 10.0732 1.08521 10.2183L4.8689 13.9492C5.01392 14.0876 5.21167 14.1667 5.38965 14.1667Z"></path>
                              </svg>
                              Open
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
            <footer className="shrink-0"></footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
