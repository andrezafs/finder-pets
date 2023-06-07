import { type VariantProps, tv } from "tailwind-variants";

export const text = tv({
  base: "font-inter text-6xl font-semibold text-white-200",
  variants: {
    color: {
      pink: "text-pink",
      footer: "text-brown",
    },
  },
});

type TextVariants = VariantProps<typeof text>;

export function Information(props: TextVariants) {
  return (
    <p className={text(props)}>
      18,313,224 <span className="text-pink">pets</span> for you
    </p>
  );
}
