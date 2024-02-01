import Image from "next/image";
import groupStudy from "@/images/study-group-african.jpg";
import skilledYouth from "@/images/handyman-working.jpg";
import femaleBallers from "@/images/female-basketball-players.jpg";
import youngWomen from "@/images/young-women.jpg";

export default function Programs() {
  return (
    <div className="layout relative pb-24 pt-12">
      <h1 className="text-orange-yellow">Programs</h1>
      {/* BRITE Futures Program */}
      <div className="py-16">
        <div
          className="relative w-full h-96 -z-10 overflow-hidden mb-5 lg:rounded-3xl"
          style={{ height: "450px" }}
        >
          <Image
            alt="A Group of African Youths"
            src={groupStudy}
            quality={100}
            placeholder="blur"
            sizes="100vw"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="lg:px-10">
          <h3 className="text-4xl font-extrabold text-azure">BRITE Futures</h3>
          <h4 className="capitalize font-bold text-3xl text-gray-900 my-3">
            Building resilient &amp; inspired teens through education for a
            better future
          </h4>

          <p className="mt-8">
            To prepare underserved teenagers with the knowledge, soft skills,
            mindset and character needed to scale the first decade of adulthood
            and onward, and follow-through on their dreams. We achieve the above
            goal under the BRITE Futures program in two major ways:
          </p>
          <ul className="list-decimal pl-14 space-y-7 mt-4 mb-10">
            <li>
              <p>BRITE Star</p>
              <p>
                It involves selecting a child with great potential but with
                little or no support to go through school (primary and secondary
                education only). It is good to note that recipients of this
                program do not owe NYDF any mandatory obligations or future
                financial returns.
              </p>
            </li>

            <li>
              <p>BRITE Leadership Curriculum</p>
              <p>
                The Leadership Curriculum is a well patterned outline of
                learning and practical workshops that help secondary students to
                develop leadership and other soft skills that would be
                beneficial to them as they prepare to tackle the world.
              </p>
            </li>
          </ul>
          <p className="text-sm lg:text-lg">
            To get more information on the BRITE Futures education program,
            recommend a student or apply as a school, please use the contact
            form below, email support or call our lines.
          </p>
        </div>
      </div>

      {/* Project STED */}
      <div className="py-16">
        <div
          className="relative w-full h-96 -z-10 overflow-hidden mb-5 lg:rounded-3xl"
          style={{ height: "450px" }}
        >
          <Image
            alt="A tailor sewing"
            src={skilledYouth}
            quality={100}
            placeholder="blur"
            sizes="100vw"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="lg:px-10">
          <h3 className="text-4xl font-extrabold text-azure">Project STED</h3>
          <h4 className="capitalize font-bold text-3xl text-gray-900 my-3">
            sponsoring technical education
          </h4>

          <p className="my-8">
            To assist teenagers and young adults from ages 16 - 23 years old to
            acquire skills from our partner vendors, to allow them become
            self-reliant and also have the means to help the poor and needy.
            It&apos;s time to invest in the future.
          </p>
          <p>
            The following constitutes the approved skills in the training
            program:
          </p>
          <ul className="list-decimal list-outside pl-6 mb-10 capitalize">
            <li>Tailoring</li>
            <li>Catering &amp; decoration</li>
            <li>Photography &amp; videography</li>
            <li>Furniture making</li>
            <li>Aluminium works</li>
            <li>Electrical engineering</li>
            <li>Graphic design</li>
            <li>UI/UX</li>
            <li>Frontend developer</li>
            <li>Backend developer</li>
          </ul>
          <p className="text-sm lg:text-lg">
            To get more information on Project STED, application dates and
            requirements, use the contact form at the bottom of this page.
          </p>
        </div>
      </div>

      {/* NYDF Open COURT */}
      <div className="py-16">
        <div
          className="relative w-full h-96 -z-10 overflow-hidden mb-5 lg:rounded-3xl"
          style={{ height: "450px" }}
        >
          <Image
            alt="Women playing basketball"
            src={femaleBallers}
            quality={100}
            placeholder="blur"
            sizes="100vw"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="lg:px-10">
          <h3 className="text-4xl font-extrabold text-azure">
            NYDF Open COURT
          </h3>
          <h4 className="capitalize font-bold text-3xl text-gray-900 my-3">
            3 day training camp
          </h4>

          <p className="my-8">
            Open Court is a dynamic 3-day basketball boot camp tailored
            specifically for young people. The program aims to ignite a passion
            for sports, instill healthy habits, and champion mental well-being.
            This initiative aligns with the United Nations Sustainable
            Development Goal 3 (SDG 3), focusing on promoting well-being and
            healthy lives for the youth.
          </p>
          <p>Objectives:</p>
          <ul className="list-disc list-outside pl-6 mb-10">
            <li>Foster a love for sports and physical activity.</li>
            <li>Promote teamwork, discipline and leadership skills.</li>
            <li>Champion mental well-being through sports and recreation.</li>
          </ul>
          <p className="text-sm lg:text-lg">
            Stay updated on all our social media platforms to get updates obout
            the program schedules and information.
          </p>
        </div>
      </div>

      {/* Change Drive */}
      <div className="py-16">
        <div
          className="relative w-full h-96 -z-10 overflow-hidden mb-5 lg:rounded-3xl"
          style={{ height: "450px" }}
        >
          <Image
            alt="young women experiencing change"
            src={youngWomen}
            quality={100}
            placeholder="blur"
            sizes="100vw"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="lg:px-10">
          <h3 className="text-4xl font-extrabold text-azure">Change Drive</h3>
          <h4 className="capitalize font-bold text-3xl text-gray-900 my-3">
            Harnessing the power of community service
          </h4>

          <p className="my-8">
            Change Drive is an NYDF youth development program dedicated to
            harnessing the power of community service to cultivate strong
            character and leadership skills in young people while promoting
            awareness for the United Nations Sustainable Development Goals
            (SDGs).
          </p>
          <p>
            Through hands-on service projects aligned with the SDGs and
            meaningful engagement with their communities, participants not only
            make a tangible difference in the lives of others but also develop
            essential qualities such as empathy, responsibility, and resilience.
            ChangeDrive empowers youth to become proactive agents of change,
            instilling in them a sense of purpose and a commitment to making the
            world a better place. Join us as we drive towards a brighter future,
            one act of service at a time, all while contributing to the global
            effort towards achieving the SDGs.
          </p>
        </div>
      </div>
    </div>
  );
}
