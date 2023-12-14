import Image from "next/image";
import groupStudy from "@/images/collaboration.jpg";
import handyWoman from "@/images/hardworking-youth.jpg";
import girlsPlayingBasketBall from "@/images/leisure.jpg";
import VolleyBall from "@/images/icons/volleyBall";
import Academic from "@/images/icons/academic";
import Tools from "@/images/icons/tools";
import Ellipsis from "./Ellipsis";

export function Mandate() {
  return (
    <div id="what-we-do" className="py-24 w-full bg-pink-50 layout relative">
      <h2 className="flex gap-3 items-center">
        <span>What we do</span>
        <Ellipsis />
      </h2>

      <div className="flex md:gap-5 lg:gap-8">
        <div className="img-group">
          <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-8 bg-navy">
            <p className="text-white">
              <q>
                Success is no accident. It is hard work, perseverance, learning,
                studying, sacrifice, and most of all, love of what you are doing
                or learning to do.
              </q>
            </p>
            <p>- Pel&eacute;</p>
          </div>
          <Image
            alt="A girl making a furniture"
            src={handyWoman}
            quality={100}
            placeholder="blur"
            sizes="100vw"
            fill
            className="hover:cursor-pointer hover:opacity-0"
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
            <p>- Malcolm X</p>
          </div>

          <Image
            alt="A boy and a girl in the library"
            src={groupStudy}
            quality={100}
            placeholder="blur"
            sizes="100vw"
            fill
            className="hover:cursor-pointer hover:opacity-0"
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
            <p>- Robert Baden-Powell</p>
          </div>

          <Image
            alt="Two girls playing basketball"
            src={girlsPlayingBasketBall}
            quality={100}
            placeholder="blur"
            sizes="100vw"
            fill
            className="hover:cursor-pointer hover:opacity-0"
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
      <div className="flex flex-col md:flex-row md:flex-nowrap gap-8 justify-center">
        <div className="prog-card">
          <div className="prog-icon">
            <Academic className="w-14 h-14 text-gray-900" />
          </div>
          <h5 className="text-white">Education</h5>
          <p>We offer support to bright minds on a case by case basis.</p>
        </div>
        <div className="prog-card">
          <div className="prog-icon">
            <Tools className="w-14 h-14 text-gray-900" />
          </div>
          <h5 className="text-white">Skill Development</h5>
          <p>
            The STED program offers young people the opportunity to learn and
            earn as they master a skill.
          </p>
        </div>
        <div className="prog-card">
          <div className="prog-icon">
            <VolleyBall className="w-14 h-14" />
          </div>
          <h5 className="text-white">Sport Initiatives</h5>
          <p>
            Social development is as important, that is why we organize
            activities solely for the purpose of fun.
          </p>
        </div>
      </div>
    </div>
  );
}
