import { Anchor } from "../Anchor";
import { Button } from "../Button";
import { Logo } from "../Logo";

export function Header() {
  return (
    <header className="flex h-32  ">
      <nav className="flex max-w-[1400px] m-auto justify-between w-full">
        <ul className="flex items-center gap-6 ">
          <Logo
            src="icons/logo.svg"
            href="#"
            name="Finder Pets"
            color="dark"
          ></Logo>
          <span className="font-inter font-normal text-xl text-gray-600">
            let&apos;s explore your pet!
          </span>
        </ul>
        <ul className="flex items-center gap-8">
          <li>
            <Anchor href="#">Home</Anchor>
          </li>
          <li>
            <Anchor href="#">About</Anchor>
          </li>
          <li className="ml-40 mr-44">
            <Button color="save" size="md" icon={{ src: "icons/heart.svg" }}>
              Save
            </Button>
          </li>
          <li>
            <Anchor href="#">Login</Anchor>
          </li>
        </ul>
      </nav>
    </header>
  );
}
