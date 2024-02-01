"use client";
import { usePathname } from "next/navigation";

import Ellipsis from "../global/Ellipsis";
import ContactForm from "./ContactForm";
import Socials from "../global/Socials";


export default function Connect() {
  const pathname = usePathname();

  return (
    <div id="contact" className="py-24 w-full layout relative bg-orange-yellow-light">
      <h2 className="flex items-center gap-3">
        <span>Connect with us</span>
        <Ellipsis />
      </h2>
      {/* Text for /home */}
      {pathname === "/" && (
        <p className="mb-5 leading-8">
          Stay connected with us on social media to receive updates, stories,
          and news about our ongoing projects
        </p>
      )}

      {/* Text for /what-we-do */}
      {pathname === "/what-we-do" && (
        <p className="mb-5 leading-8">
          Stay connected with us on social media to get more information on all
          our programs and their various pilot dates, application deadlines and
          requirements. You can also use the form below to request for specific
          information.
        </p>
      )}

      {/* Text for /community */}
      {pathname === "/get-involved" ||
        (pathname === "/about-us" && (
          <div>
            <p className="mb-5 leading-8">
              Have questions about getting involved? Feel free to contact us,
              and we will be happy to provide more information. Thank you for
              considering joining in creating positive change through the
              Nixerlex Youth Development Foundation!
            </p>
          </div>
        ))}

      {/* Text for /shop */}
      {pathname === "/shop" && (
        <div>
          <p className="mb-5 leading-8">
            Have questions about our merchandize or want to know more about our
            programs? Contact us, and we will be happy to assist you. Thank you
            for being part of positive change through the Nixerlex Youth
            Development Foundation!
          </p>
        </div>
      )}

     <Socials color="yellow" />

      <div id="feedback">
        <h5 className="sm:max-md:mb-8 my-5">We would like to hear from you</h5>

        <ContactForm />

        <div className="mt-16">
          <h6 className="font-bold">HQ Contact Address</h6>
          <p>Ladipo Moses Street, Victory Estate, Ajah</p>
          <p>Lagos, Nigeria.</p>
        </div>
      </div>
    </div>
  );
}
