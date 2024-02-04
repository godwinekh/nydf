import Link from "next/link";
import { AnimatePresence, m as motion } from "framer-motion";

import { useAppDispatch } from "@/redux/hooks";
import { toggleContactFormModal } from "@/redux/features/modals/modals";
import Close from "@/app/components/icons/close";
import HeartBroken from "@/app/components/icons/heartbroken";

export default function ContactFormModal() {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(toggleContactFormModal());
  };

  return (
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center px-2 py-10 w-full h-full bg-black bg-opacity-50 z-[60]">
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.5, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full md:w-2/5 rounded-md overflow-hidden bg-white shadow-2xl"
        >
          <div className="px-10 py-6 my-0 flex items-center w-full text-center">
            <div className="grow flex gap-3 items-center">
              <HeartBroken className="w-12 h-12 text-navy" />
              <p className="my-0 mb-1 text-3xl font-bold capitalize">
                Ooops! We are sorry
              </p>
            </div>
            <button onClick={closeModal}>
              <Close className="w-8 h-8" />
            </button>
          </div>

          <div className="px-10 pt-4 pb-16 space-y-8">
            <p>The contact form is currently not collecting responses.</p>
            <p>
              You can send your comments, complaints, or feedback directly to{" "}
              <Link
                href={"mailto:connect@nixerlexfoundation.org"}
                className="font-bold animate-link"
              >
                connect@nixerlexfoundation.org
              </Link>{" "}
              and our communication representatives would reach out.
            </p>

            <p>Thank you! &#129303;</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
