import { StaticImageData } from "next/image";
import Volunteer from "@@/assets/images/volunteer.jpg";
import Members from "@@/assets/images/members.jpg";
import Donate from "@@/assets/images/donate.jpg";
import Role from "./Role";
import { Url } from "next/dist/shared/lib/router/router";

export interface Role {
  category: string;
  text: string;
  action: string;
  image: StaticImageData;
  color: "navy" | "azure" | "orange-yellow";
  link: Url;
};

const items: Role[] = [
  {
    category: "Volunteer",
    text: "As a volunteer, you are important to us. We cannot do everything on our own. We need people of like minds who support our mission and who we can count on to help us make our vision a reality in the lives of young individuals.",
    action: "Join as a volunteer",
    color: "orange-yellow",
    image: Volunteer,
    link: "https://forms.gle/DZ2VG28ucpy9PZjUA",
  },
  {
    category: "Member",
    text: "Become a formal member of the foundation and be part of our community. Members receive exclusive updates, invitations to events, and opportunities to engage more deeply with our mission.",
    action: "Become a member",
    color: "azure",
    image: Members,
    link: "https://forms.gle/j2ugBHc7N2m3ptBw5",
  },
  {
    category: "Donor",
    text: "Your financial support directly impacts the success of our programs and initiatives. Be a donor and help us provide education, skill development, and opportunities for young individuals.",
    action: "Join as a donor",
    color: "navy",
    image: Donate,
    link: "https://forms.gle/SxPbGeMjxWRf25qQA",
  },
];

export default function Roles() {
  return (
    <div className="layout w-full pb-24 relative">
      {items.map((item, index) => (
        <Role
          key={index}
          category={item.category}
          text={item.text}
          color={item.color}
          image={item.image}
          action={item.action}
          link={item.link}
        />
      ))}

      <div className="mt-10">
        <h4 className="mb-2 capitalize font-bold text-2xl text-azure">Why Join?</h4>
        <ul className="list-disc px-10 space-y-5">
          <li>
            <b>Make a Difference:</b> Your involvement directly contributes to
            empowering young individuals for success.
          </li>
          <li>
            <b>Be Part of a Community:</b> Join a community of like-minded individuals
            working towards a common goal
          </li>
          <li>
            <b>Exclusive Benefits:</b> Members and donors receive exclusive updates,
            event invitationsm and more.
          </li>
        </ul>
      </div>
    </div>
  );
}
