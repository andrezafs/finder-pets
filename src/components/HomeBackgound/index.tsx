import { FooterHome } from "../FooterHome";
import { InitialBackgroundText } from "../InitialBackgroundText";
import { Logo } from "../Logo";

export function HomeBackground() {
  return (
    <div className="bg-initial bg-cover bg-no-repeat items-center h-full  ">
      <div className=" flex flex-col h-full justify-between px-20 pt-24 pb-10">
        <div className="flex gap-10 flex-col">
          <Logo href="#" src="../icons/logo.svg" text="Finder Pets" />
          <InitialBackgroundText description="A variety of images of pets from around the world for you to find and love." />
        </div>
        <FooterHome
          src="../icons/loading.svg"
          title="Photography by John Wick"
        />
      </div>
    </div>
  );
}
