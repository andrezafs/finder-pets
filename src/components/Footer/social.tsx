import { type HtmlHTMLAttributes } from "react";

interface SocialProps extends HtmlHTMLAttributes<HTMLAnchorElement> {
  social: string;
}
export function Social({ social, ...props }: SocialProps) {
  return (
    <div className=" font-inter font-normal text-xl text-gray-500 border-l border-solid border-gray-300 h-20 items-center justify-center flex px-28">
      <a href="">{social}</a>
    </div>
  );
}
