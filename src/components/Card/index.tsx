import { type HtmlHTMLAttributes } from "react";
import { Button } from "../Button";
import { tv } from "tailwind-variants";

export const card = tv({
  slots: {
    base: "max-w-2xl relative",
    dog: "w-full h-full rounded-lg ",
    title: "font-inter font-semibold text-start text-2xl text-brown",
    description: "font-inter font-medium text-start text-xl text-gray-100",
  },
});

const { dog, title, description } = card();

interface IconProps extends HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

interface CardProps {
  icon?: IconProps;
  name: string;
  information: string;
}
export function Card({ name, information, ...props }: CardProps) {
  return (
    <figure className="grid grid-rows-1 h-full w-full  relative m-0 mb-8 break-inside-avoid ">
      <img {...props.icon} className={dog()} />

      <div className="h-full w-full flex flex-col justify-between absolute bottom-0 p-8">
        <Button
          color="like"
          size="sm"
          icon={{ src: "icons/heart.svg" }}
        ></Button>
        <div className=" py-6 px-8 max-w-[512px] flex flex-col gap-x-10 rounded-lg bg-white-100 ">
          <h1 className={title()}>{name}</h1>
          <p className={description()}>{information}</p>
        </div>
      </div>
    </figure>
  );
}
