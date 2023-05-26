interface ButtonFormProps {
  children: string;
}

export function ButtonLogin({ children }: ButtonFormProps) {
  return (
    <button className="w-80 py-3 px-4 rounded-lg bg-pink text-white-100 font-inter text-sm">
      {children}
    </button>
  );
}
