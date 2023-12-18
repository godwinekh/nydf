"use client";
import FacebookIcon from "@/images/icons/facebook";
import LinkedInIcon from "@/images/icons/linkedIn";
import YoutubeIcon from "@/images/icons/youtube";
import Ellipsis from "./Ellipsis";
import Link from "next/link";
import { FormEvent, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Connect() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const pathname = usePathname();

  const handleCommentForm = (e: FormEvent) => {
    e.preventDefault();

    console.log("This fu");
  };

  return (
    <div id="contact-us" className="py-24 w-full layout relative bg-pink-50">
      <h2 className="flex items-center gap-3">
        <span>Connect with us</span>
        <Ellipsis />
      </h2>
      {/* Text for /home */}
      {pathname === "/" && (
        <p>
          Stay connected with us on social media to receive updates, stories,
          and news about our ongoing projects
        </p>
      )}
      {/* Text for /shop */}
      {pathname === "/shop" && (
        <>
          <p>
            Have questions about our merchandize or want to know more about our
            programs? Contact us, and we will be happy to assist you
          </p>
          <p> Thank you for being part of positive change through the Nixerlex Youth Development Foundation!</p>
        </>
      )}

      <div id="socials" className="flex justify-start items-center gap-5 py-8">
        <Link
          href="https://www.facebook.com/nixerlexfoundation"
          target="_blank"
          className="w-16 h-16 text-blue-700"
        >
          <FacebookIcon />
        </Link>

        <Link
          href="https://www.linkedin.com/nixerlexfoundation"
          target="_bla"
          className="w-16 h-16 text-blue-800"
        >
          <LinkedInIcon />
        </Link>

        <Link
          href="https://www.youtube.com/nixerlexfoundation"
          target="_bla"
          className="w-16 h-16 text-red-600"
        >
          <YoutubeIcon />
        </Link>
      </div>

      <div id="feedback">
        <h5 className="sm:max-md:mb-8 my-5">We would like to hear from you</h5>
        <form
          onSubmit={handleCommentForm}
          className="flex flex-col gap-5 w-10/12 md:w-1/2"
        >
          <input
            type="name"
            id="nameInput"
            placeholder="Name"
            className="input-box"
            ref={nameRef}
          />
          <input
            type="email"
            id="emailInput"
            placeholder="Email"
            className="input-box"
            ref={emailRef}
          />
          <textarea
            id="textInput"
            placeholder="Comments/Suggestions/Complaints"
            className="input-box"
            ref={messageRef}
          />
          <button
            type="submit"
            className="bg-blue-600 w-2/5 py-3 mt-3 text-white rounded-xl text-xl"
          >
            Send
          </button>
        </form>

        <div className="mt-16">
          <h6 className="font-bold">HQ Contact Address</h6>
          <p>Ladipo Moses Street, Victory Estate, Ajah</p>
          <p>Lagos, Nigeria.</p>
        </div>
      </div>
    </div>
  );
}