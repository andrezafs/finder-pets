interface ButtonSocialMideaProps {
  children: string;
  image: string;
}

export function ButtonSocialMidea({ children, image }: ButtonSocialMideaProps) {
  return (
    <button className="flex items-center gap-9 px-4 h-10 w-80 rounded-lg border border-solid border-gray-300 text-gray-500 text-sm font-semibold ">
      <img src={image} alt="Imagem do Google" />
      {children}
    </button>
  );
}
