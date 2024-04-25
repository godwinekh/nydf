import Link from "next/link";
import { AnimatePresence, m as motion } from "framer-motion";

import { useAppDispatch } from "@/lib/hooks";
import { toggleMoreInfoModal } from "@/lib/features/modals/modals";
import Close from "@/app/components/icons/close";
import HeartBroken from "@/app/components/icons/heartbroken";
import Info from "../icons/info";

export default function MoreInfoModal() {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(toggleMoreInfoModal());
  };

  return (
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center px-2 py-10 w-full h-full bg-black bg-opacity-50 z-[60]">
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.5, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full md:w-3/5 xl:w-2/5 rounded-md overflow-hidden bg-white shadow-2xl"
        >
          <div className="px-10 py-6 my-0 flex items-center w-full text-center">
            <div className="grow flex gap-3 items-center">
              <Info className="w-8 h-8 md:w-12 md:h-12 text-navy" />
              <p className="my-0 mb-1 text-xl md:text-3xl font-bold capitalize">
                Tree Planting 2024
              </p>
            </div>
            <button onClick={closeModal}>
              <Close className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          <div className="px-10 pt-4 pb-8 space-y-2">
            <p>
              <span className="font-bold">Interview with Dr Surulola: </span>
              April 29th, 2024 (Check NYDF Instagram page for more info)
            </p>
            <p>
              <span className="font-bold">Onboarding of volunteers:</span> May
              1st, 2024
            </p>{" "}
            <p>
              <span className="font-bold">Event Date:</span> May 4th, 2024
            </p>
            <p>
              <span className="font-bold">Location: </span>
              Selected areas in Lagos State, Nigeria
            </p>
            <p className="py-4">
              <span className="font-bold">Goal: </span>
              To raise awareness about the importance of tree planting for
              environmental sustainability and community well-being.
            </p>

            <div className="flex flex-col items-center justify-center gap-2 pt-4">
              <Link
                href="https://forms.gle/CSCM8ZchpR8UZ7x4A"
                target="_blank"
                className="uppercase px-4 py-2 text-white bg-azure hover:bg-navy hover:shadow-md hover:scale-105 rounded-xl font-bold  md:text-xl"
              >
                Volunteer
              </Link>

              <p className="text-sm text-center">
                More enquiries:{" "}
                <Link
                  href={"mailto:connect@nixerlexfoundation.org"}
                  className="font-bold animate-link"
                >
                  connect@nixerlexfoundation.org
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
