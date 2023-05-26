interface FooterHomeProps {
  src: string;
  title: string;
}

export function FooterHome({ src, title }: FooterHomeProps) {
  return (
    <div className="flex gap-2">
      <img src={src} alt="" />
      <span className="font-inter font-normal text-base text-white-200">
        {title}
      </span>
    </div>
  );
}
