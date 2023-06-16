import { type HtmlHTMLAttributes } from "react";

interface AnchorProps extends HtmlHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
export function Anchor(props: AnchorProps) {
  return (
    <a
      {...props}
      className="font-inter font-medium text-xl text-brown hover:text-pink transition-all duration-200 ease-in-out "
    >
      {props.children}
    </a>
  );
}
