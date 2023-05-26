interface LogoProps {
  href: string;
  src: string;
  text: string;
}

export function Logo({ href, src, text }: LogoProps) {
  return (
    <a href={href} className="gap-3 flex items-center">
      <img src={src} alt="" />
      <span className="font-inter font-bold text-xl text-white-100">
        {text}
      </span>
    </a>
  );
}
