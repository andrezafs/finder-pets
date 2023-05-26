interface InitialBackgroundTextProps {
  description: string;
}

export function InitialBackgroundText({
  description,
}: InitialBackgroundTextProps) {
  return (
    <main className="flex flex-col items-center max-w-[500px]">
      <div className="gap-4 flex flex-col">
        <p className="font-inter text-6xl font-semibold text-white-200">
          18,313,224 <span className="text-pink">pets</span> <br /> for you
        </p>

        <h4 className="font-inter font-normal text-xl text-white-200">
          {description}
        </h4>
      </div>
    </main>
  );
}
