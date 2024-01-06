"use client";
import Ellipsis from "./Ellipsis";
import Link from "next/link";
import { FormEvent, useRef } from "react";
import { usePathname } from "next/navigation";
import FacebookSvg from "@/images/facebook.svg";
import InstagramSvg from "@/images/instagram.svg";
import LinkedinSvg from "@/images/linkedin.svg";
import YoutubeSvg from "@/images/youtube.svg";
import Image from "next/image";

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
    <div id="contact" className="py-24 w-full layout relative bg-pink-50">
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

      {/* Text for /what-we-do */}
      {pathname === "/mandate" && (
        <p>
          Stay connected with us on social media to get more information on
          all our programs and their various pilot dates, application deadlines and requirements. You can also use the form below to request for specific information.
        </p>
      )}

      {/* Text for /community */}
      {pathname === "/community" || pathname === "/about" && (
        <div>
          <p className="mb-5 leading-7">
            Have questions about getting involved? Feel free to contact us, and
            we will be happy to provide more information.
          </p>
          <p className="mb-5 leading-7">
            {" "}
            Thank you for considering joining in creating positive change
            through the Nixerlex Youth Development Foundation!
          </p>
        </div>
      )}

      {/* Text for /shop */}
      {pathname === "/shop" && (
        <div>
          <p className="mb-5 leading-7">
            Have questions about our merchandize or want to know more about our
            programs? Contact us, and we will be happy to assist you
          </p>
          <p className="mb-5 leading-7">
            {" "}
            Thank you for being part of positive change through the Nixerlex
            Youth Development Foundation!
          </p>
        </div>
      )}

      <div id="socials" className="flex justify-start items-center gap-5 py-8">
        <Link
          href="https://www.facebook.com/nixerlexfoundation"
          target="_blank"
          className="w-16 h-16 text-blue-700"
        >
          <Image
            alt="facebook icon"
            src={FacebookSvg}
            quality={100}
            width={64}
            height={64}
            style={{
              objectFit: "contain",
            }}
          />
        </Link>

        <Link
          href="https://www.instagram.com/nixerlexfoundation"
          target="_bla"
          className="w-16 h-16 text-blue-800"
        >
          <Image
            alt="instagram icon"
            src={InstagramSvg}
            quality={100}
            width={64}
            height={64}
            style={{
              objectFit: "contain",
            }}
          />
        </Link>

        <Link
          href="https://www.linkedin.com/nixerlexfoundation"
          target="_bla"
          className="w-16 h-16 text-blue-800"
        >
          <Image
            alt="linkedin icon"
            src={LinkedinSvg}
            quality={100}
            width={64}
            height={64}
            style={{
              objectFit: "contain",
            }}
          />
        </Link>

        <Link
          href="https://www.youtube.com/nixerlexfoundation"
          target="_bla"
          className="w-16 h-16 text-red-600"
        >
          <Image
            alt="youtube icon"
            src={YoutubeSvg}
            quality={100}
            width={64}
            height={64}
            style={{
              objectFit: "contain",
            }}
          />
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
