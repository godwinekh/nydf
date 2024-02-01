"use client";
import { useEffect, useState } from "react";


export default function Areas() {
  const initialRotationAngles = [0, 120, 240];
  const [rotationAngles, setRotationAngles] = useState(initialRotationAngles);
  const md =
    typeof window !== "undefined" &&
    window.innerWidth > 768 &&
    window.innerWidth < 1024;
   const lg =
     typeof window !== "undefined" &&
     window.innerWidth > 1024;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotationAngles((prevAngles) => [
        prevAngles[0] + 120, // Rotate item at index 0 by 120 degrees
        prevAngles[1] + 120, // Rotate item at index 1 by 120 degrees
        prevAngles[2] + 120, // Rotate item at index 2 by 120 degrees
      ]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // A large finite length for the progression array
  const finiteLength = 1000000; // Adjust as needed
  const progressionArray = Array.from(
    { length: finiteLength },
    (_, index) => index * 360
  );

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-center gap-10 md:gap-10 lg:gap-0 lg:items-center h-[26rem] md:h-[36rem] lg:h-[40rem] w-9/12 md:w-10/12 lg:w-5/12">
      <div className="lg:m-64">
        {rotationAngles.map((angle, index) => (
          <div
            key={index}
            className={`text-2xl px-8 md:px-0 md:text-4xl lg:text-5xl md:text-center lg:text-right ${
              progressionArray.includes(angle) ? "block" : "hidden"
            }`}
            style={{ transition: "1s ease-in-out" }}
          >
            {index === 0 && (
              <p className="text-navy">
                Sports <br /> Initiative
              </p>
            )}
            {index === 1 && <p className="text-orange-yellow">Education</p>}
            {index === 2 && (
              <p className="text-azure">
                Skill <br /> Development
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="relative flex lg:block justify-end text-white h-1/2">
        {rotationAngles.map((angle, index) => (
          <div
            key={index}
            className={`circle-item ${
              index === 0
                ? "bg-navy"
                : index === 1
                ? "bg-orange-yellow"
                : "bg-azure"
            }`}
            style={{
              transform: `rotate(${angle}deg) translate(-7rem) ${
                md ? "translate(-2.5rem)" : ""
              } ${lg ? "translate(-5.25rem)" : ""}  rotate(${-angle}deg) ${
                progressionArray.includes(angle) ? "scale(1.3)" : ""
              }`,
              transition: "transform 1s ease-in-out",
            }}
          >
            {index === 0 && (
              <p className="uppercase font-bold text-3xl md:text-4xl lg:text-6xl text-center">
                open <br /> court
              </p>
            )}
            {index === 1 && (
              <p className="uppercase text-center text-xl md:text-2xl lg:text-3xl leading-5">
                <span className="text-3xl md:text-4xl lg:text-6xl font-bold">
                  b.r.i.t.e
                </span>
                <br /> futures
              </p>
            )}
            {index === 2 && (
              <p className="capitalize text-center leading-5 text-xl md:text-2xl lg:text-4xl">
                project <br />{" "}
                <span className="uppercase text-4xl md:text-6xl lg:text-7xl font-extrabold">
                  sted
                </span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
