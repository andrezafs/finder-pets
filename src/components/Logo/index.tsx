import { type VariantProps, tv } from "tailwind-variants";

export const text = tv({
  base: "font-inter text-xl font-bold",
  variants: {
    color: {
      light: "text-white",
      dark: "text-brown",
    },
  },
});

type TextVariants = VariantProps<typeof text>;

interface LogoProps extends TextVariants {
  href: string;
  src: string;
  name: string;
}

export function Logo({ href, src, name, color }: LogoProps) {
  return (
    <a href={href} className="gap-3 flex items-center">
      <img src={src} alt="" />
      <span className={text({ color })}>{name}</span>
    </a>
  );
}
