import { PetsScreen } from "../../PetsScreen";
import { Footer } from "../Footer";

import { ButtonSearch } from "../ButonSearch";

import { Header } from "../Header";
import { Button } from "../Button";

export function Home() {
  return (
    <div className="">
      <Header />
      <main className="bg-gray-200 relative ">
        <div className="max-w-[1400px] m-auto flex flex-col items-center">
          <div className="h-[576px] w-full py-40">
            <ButtonSearch image="icons/search.svg " />
          </div>
          <PetsScreen />
        </div>
        <div className="flex justify-center items-center absolute bottom-0 h-96 w-full  bg-gradient-to-b from-transparent  to-gray-200 ">
          <Button color="show" size="xxl">
            Show More
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
