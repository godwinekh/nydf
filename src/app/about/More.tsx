"use client";
import Image from "next/image";
import { useState } from "react";
import OfficeUnity from "@/images/people-office.jpg";

const history = [
  {
    range: "2014 - 2018",
    details: [
      "The Nixerlex Foundation emerged from the passionate vision of its founder, Alexander Eke, whose dedication to social impact became the driving force behind its inception. Inspired by a deep-rooted belief in the power of education and community empowerment, Alexander embarked on this journey to address societal challenges alongside other young people who shared his passion.",
      "In 2014, fueled by a desire to make a lasting difference, he established the Nixerlex Foundation with a focus on providing educational opportunities, fostering community development, and championing causes that resonate with his commitment to positive change.",
      "2015 to 2018 saw the emergence of diverse community based projects and initiatives aimed at empowering young people with the tools, mindset and opportunities for self and community development.",
    ],
  },
  {
    range: "2019 - 2023",
    details: [
      "Between 2019 and 2021, the foundation launched the Young with Vision and Purpose initiative with focus on young adults between the ages of 13 and 20. The initiative was aimed at equipping the target audience with essential life skills from hygiene, career mapping, to education transitions among others. ",
      "The foundation began a revaluation of its goals in early 2022 and thus birthed the change of name from Nixerlex Foundation to Nixerlex Youth Development Foundation in order to accommodate a wider range of development activities. Over the years, the foundation has grown, leaving an indelible mark on various communities through its unwavering dedication to creating a better, more inclusive world.",
    ],
  },
];

export default function More() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleToggleTab = (index: number) => {
    setActiveTab((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full layout pb-16">
      {/* Mission */}
      <div>
        <h2 className="my-2">our mission</h2>
        <div className="px-5">
          <p className="pl-8 pt-6 pb-10 border-l-4 border-azure">
            Our mission is clear: To implement programs that inspire, empower,
            and advocate for the success of young individuals. We believe in
            equipping the youth with the skills, education, mindset and
            opportunities needed to shape a prosperous future for themselves and
            their communities.
          </p>
        </div>
      </div>

      {/* Story */}
      <div>
        <h2 className="my-2">our story</h2>
        <div className="px-5">
          <p className="pl-8 pt-6 pb-10 border-l-4 border-azure">
            Nixerlex Youth Development Foundation has been at the forefront of
            youth empowerment for the past eight years. Our journey began with a
            vision to create a lasting impact on the lives of young individuals,
            fostering personal growth, and driving positive change within
            communities.
          </p>
        </div>
      </div>

      {/* History */}
      <div>
        <h2 className="my-2">History</h2>
        <div className="px-5">
          <div className="pl-8 pt-6 pb-10 border-l-4 border-azure">
            <p>
              The birth and evolution of the organization from Nixerlex
              Foundation to Nixerlex Youth Development Foundation has been
              filled with rigorous work, dedication and determination pursued by
              a band of youth with pure hearts full of charity. Here is a
              highlight of our events year by year.
            </p>

            <div className="flex flex-col space-y-8 py-8">
              {history.map((period, index) => (
                <div key={index} className="rounded bg-orange-yellow-light">
                  <div
                    className="flex items-center justify-between cursor-pointer px-5"
                    onClick={() => handleToggleTab(index)}
                  >
                    <h5 className="text-orange-yellow">{period.range}</h5>
                    <span
                      className={`transform ${
                        activeTab === index ? "rotate-0" : "rotate-180"
                      } transition-transform`}
                    >
                      &#9660;
                    </span>
                  </div>
                  {activeTab === index &&
                    period.details.map((paragraph, idx) => (
                      <p key={idx} className="px-5 mt-2 mb-8">
                        {paragraph}
                      </p>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="pb-24">
        <h2 className="my-2">Our values</h2>
        <div className="flex flex-wrap gap-4 justify-center pl-8 py-10">
          {["Love", "Excellence", "Respect", "Diligence", "Integrity"].map(
            (value, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-orange-yellow text-white text-xl lg:text-2xl"
              >
                {value}
              </div>
            )
          )}
        </div>
      </div>

      <div
        className="relative w-full h-96 -z-10 overflow-hidden  lg:rounded-3xl"
        style={{ height: "450px" }}
      >
        <Image
          alt="Women playing basketball"
          src={OfficeUnity}
          quality={100}
          placeholder="blur"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
