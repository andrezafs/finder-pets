import { Information } from "../Information";

interface InitialBackgroundTextProps {
  description: string;
}

export function InitialBackgroundText({
  description,
}: InitialBackgroundTextProps) {
  return (
    <main className="flex flex-col items-center max-w-[500px]">
      <div className="gap-4 flex flex-col">
        <Information />
        <h4 className="font-inter font-normal text-xl text-white-200">
          {description}
        </h4>
      </div>
    </main>
  );
}
