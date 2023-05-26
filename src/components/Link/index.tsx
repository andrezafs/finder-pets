interface LinkProps {
  text: string;
  href: string;
  link: string;
}

export function Link({ text, href, link }: LinkProps) {
  return (
    <p className="font-inter font-semibold text-xs text-brown text-center ">
      {text}{" "}
      <a href={href} className="text-pink ">
        {link}
      </a>
    </p>
  );
}
