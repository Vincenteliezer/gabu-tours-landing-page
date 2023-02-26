import React from "react";

export default function Modal() {
  return (
    <div>
      <button
        type="button"
        class=" bg-[#e49a4b] px-6 py-2 text-base font-bold uppercase  text-white hover:bg-[#b67632] hover:shadow-md"
        data-te-toggle="modal"
        data-te-target="#exampleModalCenter"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        Book
      </button>

      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalCenter"
        tabindex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none mx-3 relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5
                class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalScrollableLabel"
              >
                Enter Details
              </h5>
              <button
                type="button"
                class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="relative p-4">
              <form
                action="https://formsubmit.co/e75e79ccdf55b21c5d511509e1584ce4"
                method="POST"
                className="flex flex-col"
              >
                <input type="hidden" name="_template" value="box"></input>
                <input type="text" name="_honey" className="hidden"></input>
                {/* <input type="hidden" name="_next" value="/thanks.js" /> */}
                <label className="text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  className="border border-gray-500 px-2 py-1 placeholder:text-sm rounded-none focus:outline-none"
                  type="email"
                  placeholder="Enter email"
                  name="Email"
                  required
                />
                <label className="mt-4 text-sm" htmlFor="number">
                  Phone Number
                </label>
                <input
                  className="border border-gray-500 px-2 py-1 rounded-none placeholder:text-sm focus:outline-none"
                  type="number"
                  placeholder="Enter phone"
                  name="Phone Number"
                  required
                />
                <label className="mt-4 text-sm" htmlFor="select">
                  Select service
                </label>
                <select
                  className="border border-gray-500 px-2 py-1 rounded-none placeholder:text-sm focus:outline-none"
                  name="Service"
                  type="select"
                  id="services"
                >
                  <option value="Airport Transfers">Airport Transfers</option>
                  <option value="Hotel Transfers">Hotel Transfers</option>
                  <option value="Cab Services">Cab Services</option>
                  <option value="Corporate Tours">Corporate Tours</option>
                  <option value="Car Hire">Car Hire</option>
                  <option value="Delivery Services">Delivery Services</option>
                </select>
                <div className="w-full flex justify-end items-end">
                  <button
                    className="bg-[#e49a4b] justify-end px-4 py-2 mt-4 w-fit text-white "
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
