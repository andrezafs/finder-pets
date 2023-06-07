/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type HtmlHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: "flex items-center text-center font-inter font-semibold text-white text-sm rounded-lg active:opacity-80 transition-all duration-200 ease-in-out  ",
  variants: {
    color: {
      save: "bg-gray-100 text-gray-300 uppercase",
      like: "bg-white-100 ml-auto",
      social: "text-gray-500 border border-solid border-gray-500",
      login: "bg-pink text-white-100",
      search: "bg-white-100 text-gray-500",
    },
    size: {
      sm: "w-10 h-10 p-2 ",
      md: " w-24 h-10 p-3",
      lg: "px-4 h-10 w-80 ",
      xl: "h-24 p-9 ",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface IconProps extends HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}
interface ButtonProps extends ButtonVariants {
  children?: React.ReactNode;
  icon?: IconProps;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={button(props)}>
      <img {...props.icon} />
      <div className="w-full ">{props.children}</div>
    </button>
  );
};
