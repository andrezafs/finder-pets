interface BoxInformationProps {
  name: string;
  information: string;
}

export function BoxInformation({ name, information }: BoxInformationProps) {
  return (
    <div className=" py-6 px-8 flex flex-col gap-1 rounded-lg bg-white-100 ">
      <h1 className="font-inter font-semibold text-start text-2xl text-brown">
        {name}
      </h1>
      <p className="font-inter font-medium text-start text-xl text-gray-100">
        {information}
      </p>
    </div>
  );
}
