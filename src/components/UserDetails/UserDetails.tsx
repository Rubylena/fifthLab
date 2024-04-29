import { Fragment, useContext, useEffect, useRef } from "react";
import { UsersContext } from "../../context/UsersContext";
import { UsersContextType } from "../../utils/types/types";
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import { IUsers } from "../../utils/interface/interface";
import { Transition } from "@headlessui/react";

const UserDetails = ({
  uuid,
  open,
  setOpen,
}: {
  uuid: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { results } = useContext(UsersContext) as UsersContextType;
  const details: IUsers[] | undefined = results?.filter(
    (user) => user.login.uuid === uuid
  );

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click occurred outside of the modal
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false); // Close the modal
      }
    };

    // Attach the event listener when the modal is open
    if (open) {
      window.addEventListener("click", handleOutsideClick);
    }

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [open, setOpen]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <div className="absolute top-0 inset-0 overflow-hidden -m-4 sm:-m-8">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex items-center justify-center pt-4 px-4 pb-20">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute inset-0 top-0 bg-gray-300 opacity-75 transition-opacity rounded-lg"></div>
            </Transition.Child>

            {/* This div represents your modal content */}
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div
                ref={modalRef}
                className="z-20 p-5 max-w-xs sm:max-w-none bg-white rounded-lg shadow-xl transform transition-all "
              >
                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="inline-flex gap-2 font-medium text-cyan-500 focus:outline-none sm:ml-3 text-sm"
                >
                  <ArrowLeftIcon className="h-5 w-5 text-cyan-500" />
                  RESULTS
                </button>

                <div className="flex flex-col xl:flex-row items-center gap-5 xl:gap-20 bg-white p-2 sm:p-6">
                  <img
                    className="rounded-full border-4 border-cyan-400"
                    src={details?.[0]?.picture?.large}
                    alt=""
                  />

                  <div className="flex flex-col gap-3 ">
                    <div className="text-center xl:text-left">
                      <p className="text-2xl font-bold">
                        {details?.[0]?.name?.title} {details?.[0]?.name?.first}{" "}
                        {details?.[0]?.name?.last}
                        <span className="font-light">{`, ${details?.[0]?.dob?.age}`}</span>
                      </p>
                      <p className="text-[15px]">
                        {details?.[0]?.location?.postcode}{" "}
                        {details?.[0]?.location?.city}{" "}
                        {details?.[0]?.location?.state}
                        <span>{details?.[0]?.location?.country}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-300 rounded-lg py-1 px-3">
                      <EnvelopeIcon className="h-5 w-5 hidden sm:block" />
                      <p className="break-all">{details?.[0]?.email}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 bg-pink-300 rounded-lg py-1 px-3">
                      <p>JOINED:</p>
                      <p className="text-center sm:text-left">
                        {details?.[0]?.registered?.date &&
                          new Date(
                            details?.[0]?.registered?.date
                          )?.toLocaleString("en-CA")}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 py-1 px-3">
                      <PhoneArrowDownLeftIcon className="h-5 w-5" />
                      <p>
                        {details?.[0]?.cell} {details?.[0]?.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
};

export default UserDetails;
