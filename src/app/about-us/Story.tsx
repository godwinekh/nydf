"use client";
import { useState } from "react";

export default function Story() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleToggleTab = (index: number) => {
    setActiveTab((prev) => (prev === index ? null : index));
  };

  return (
    <div className="pt-12 w-full layout">
      <h2>Our History</h2>
      <p>
        The birth and evolution of the organization from the humble days of
        Nixerlex Foundation to Nixerlex Youth Development Foundation has been
        filled with rigorous work, dedication and determination pursued by a
        band of youth with pure hearts full of charity. Here is a highlight of our events year by year.
      </p>

      <div className="flex flex-col space-y-2 py-8">
        {[2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022].map((year, index) => (
          <div key={year} className="rounded">
            <div
              className="flex items-center justify-between cursor-pointer px-5 bg-gray-50"
              onClick={() => handleToggleTab(index)}
            >
              <h5>{year}</h5>
              <span
                className={`transform ${
                  activeTab === index ? "rotate-0" : "rotate-180"
                } transition-transform`}
              >
                &#9660;
              </span>
            </div>
            {activeTab === index && (
              <p className="px-5 mt-2 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                explicabo sapiente fuga! Asperiores officiis suscipit explicabo
                beatae voluptas fugiat provident repellat dolor animi cumque
                nostrum cum rerum, quas soluta labore.
              </p>
            )}
          </div>
        ))}
      </div>

      {/* <div className="">
        <div id="2014" className="years">
          <h5>2014</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo sapiente fuga! Asperiores officiis suscipit explicabo beatae voluptas fugiat provident repellat dolor animi cumque nostrum cum rerum, quas soluta labore.</p>
        </div>

        <div id="2015" className="years">
          <h5>2015</h5>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo sapiente fuga! Asperiores officiis suscipit explicabo beatae voluptas fugiat provident repellat dolor animi cumque nostrum cum rerum, quas soluta labore.</p>
        </div>

        <div id="2016" className="years">
          <h5>2016</h5>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo sapiente fuga! Asperiores officiis suscipit explicabo beatae voluptas fugiat provident repellat dolor animi cumque nostrum cum rerum, quas soluta labore.</p>
        </div>

        <div id="2017" className="years">
          <h5>2017</h5>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo sapiente fuga! Asperiores officiis suscipit explicabo beatae voluptas fugiat provident repellat dolor animi cumque nostrum cum rerum, quas soluta labore.</p>
        </div>

        <div id="2018" className="years">
          <h5>2018</h5>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo sapiente fuga! Asperiores officiis suscipit explicabo beatae voluptas fugiat provident repellat dolor animi cumque nostrum cum rerum, quas soluta labore.</p>
        </div>

        <div id="2019" className="years">
          <h5>2019</h5>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo sapiente fuga! Asperiores officiis suscipit explicabo beatae voluptas fugiat provident repellat dolor animi cumque nostrum cum rerum, quas soluta labore.</p>
        </div>
      </div> */}
    </div>
  );
}
