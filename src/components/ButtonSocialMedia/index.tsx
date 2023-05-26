interface ButtonSocialMediaProps {
  image: string;
  social: string;
}

export function ButtonSocialMedia({ image, social }: ButtonSocialMediaProps) {
  return (
    <button className="flex flex-shrink-0 items-center text-center px-4 h-10 w-80 rounded-lg border border-solid border-gray-300  ">
      <img src={image} alt="Imagem do Google" />
      <span className="flex-1 text-gray-500 text-sm font-semibold">
        {social}
      </span>
    </button>
  );
}
