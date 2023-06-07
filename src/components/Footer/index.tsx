import { Information } from "../Information";
import { Tag } from "./Tag";
import { Social } from "./social";

export function Footer() {
  return (
    <footer className="h-[512px] flex flex-col justify-between w-full ">
      <div className="  ">
        <div className="flex items-center  border-b border-solid border-gray-300 ">
          <div className="flex gap-14 px-6  overflow-hidden scroll-smooth">
            <Tag tag="#ilovemydog" />
            <Tag tag="#puppies" />
            <Tag tag="#catlovers" />
            <Tag tag="#kitten" />
            <Tag tag="#doglovers" />
            <Tag tag="#meow" />
            <Tag tag="#puppylove" />
          </div>
          <div className="flex">
            <Social social="Facebook" />
            <Social social="Instagram" />
            <Social social="Twitter" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-8">
        <Information color="footer" />

        <span className="font-inter font-normal text-xl text-brown ">
          © 2022 All rights reserved.
        </span>
      </div>
    </footer>
  );
}
