"use client";
import Image from "next/image";
import groupStudy from "@@/assets/images/collaboration.jpg";
import handyWoman from "@@/assets/images/hardworking-youth.jpg";
import girlsPlayingBasketBall from "@@/assets/images/leisure.jpg";
import VolleyBall from "@/app/components/icons/volleyBall";
import Academic from "@/app/components/icons/academic";
import Tools from "@/app/components/icons/tools";
import Ellipsis from "../components/global/Ellipsis";
import LearnMore from "../components/global/LearnMore";
import { m as motion } from "framer-motion";
import LightBulb from "@/app/components/icons/lightbulb";

export function Mandate() {
  const animations = {
    offscreen: {
      opacity: 0,
      transform: "translateY(6rem)",
    },
    onscreen: {
      opacity: 1,
      transform: "translateY(0)",
      ease: "anticipate",
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div id="what-we-do" className="py-24 w-full bg-pink-50 layout relative">
      <h2 className="flex gap-3 items-center">
        <span>What we do</span>
        <Ellipsis />
      </h2>

      <div className="flex md:gap-5 lg:gap-8">
        <div className="img-group">
          <div className="quote flex flex-col gap-4 justify-center items-center w-full h-full px-8 bg-navy">
            <p className="text-white">
              <q>
                Success is no accident. It is hard work, perseverance, learning,
                studying, sacrifice, and most of all, love of what you are doing
                or learning to do.
              </q>
            </p>
            <p className="text-gray-500">- Pel&eacute;</p>
          </div>
          <Image
            alt="A girl making a furniture"
            src={handyWoman}
            quality={100}
            placeholder="blur"
            sizes="100vw"
            fill
            className="fade-img"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="hidden md:block order-first img-group">
          <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-8 bg-navy">
            <p className="text-white">
              <q>
                Education is the passport to the future, for tomorrow belongs to
                those who prepare for it today.
              </q>
            </p>
            <p className="text-gray-500">- Malcolm X</p>
          </div>

          <Image
            alt="A boy and a girl in the library"
            src={groupStudy}
            quality={100}
            placeholder="blur"
            sizes="100vw"
            fill
            className="fade-img"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="hidden lg:block img-group">
          <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-8 bg-navy">
            <p className="text-white">
              <q>
                Sports and games are the very things to organize boys and girls,
                to teach them fair play and citizenship, and to develop healthy
                bodies and alert minds.
              </q>
            </p>
            <p className="text-gray-500">- Robert Baden-Powell</p>
          </div>

          <Image
            alt="Two girls playing basketball"
            src={girlsPlayingBasketBall}
            quality={100}
            placeholder="blur"
            sizes="100vw"
            fill
            className="fade-img"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className="my-10 md:my-20 text-center md:text-2xl px-5">
        <p>
          &quot;Our aim is to foster positive and lasting change in the lives of
          young individuals, empowering them to become agents of progress and
          transformation within their communities and contributing to a
          prosperous global society.&quot;
        </p>
        <p className="mt-5">We achieve all these through:</p>
      </div>

      {/* contents */}
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-8 justify-center">
        <motion.div
          className="prog-card"
          initial={animations.offscreen}
          whileInView={animations.onscreen}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="prog-icon">
            <Academic className="w-14 h-14 text-gray-900" />
          </div>
          <h5 className="text-white">Education</h5>
          <p>We offer support to bright minds on a case by case basis.</p>
        </motion.div>

        <motion.div
          className="prog-card"
          initial={animations.offscreen}
          whileInView={{
            ...animations.onscreen,
            transition: { ...animations.onscreen.transition, delay: 0.3 },
          }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="prog-icon">
            <Tools className="w-14 h-14 text-gray-900" />
          </div>
          <h5 className="text-white">Skill Development</h5>
          <p>
            The STED program offers young people the opportunity to learn and
            earn as they master a skill.
          </p>
        </motion.div>

        <motion.div
          className="prog-card"
          initial={animations.offscreen}
          whileInView={{
            ...animations.onscreen,
            transition: { ...animations.onscreen.transition, delay: 0.8 },
          }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="prog-icon">
            <VolleyBall className="w-14 h-14" />
          </div>
          <h5 className="text-white">Sport Initiatives</h5>
          <p>
            Social development is as important, that is why we organize
            activities solely for the purpose of fun.
          </p>
        </motion.div>

        <motion.div
          className="prog-card"
          initial={animations.offscreen}
          whileInView={{
            ...animations.onscreen,
            transition: { ...animations.onscreen.transition, delay: 0.8 },
          }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="prog-icon">
            <LightBulb className="w-14 h-14 text-gray-900" />
          </div>
          <h5 className="text-white">Community Building</h5>
          <p>
            Harnessing the power of community service to cultivate strong
            character and leadership skills.
          </p>
        </motion.div>
      </div>

      <LearnMore href="/what-we-do" />
    </div>
  );
}
