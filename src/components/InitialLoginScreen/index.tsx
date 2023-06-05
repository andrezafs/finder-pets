import { Button } from "../Button";
import { ContainerScreen } from "../ContainerScreen";
import { FormLogin } from "../FormLogin";
import { HomeBackground } from "../HomeBackgound";
import { Link } from "../Link";
import { Separator } from "../Separator";

// interface InitialLoginScreenProps {}

export function InitialLoginScreen() {
  return (
    <ContainerScreen>
      <HomeBackground />
      <div className=" overflow-x-hidden py-8 h-screen">
        <img src="icons/arrow-left.svg" alt="" className="px-7" />
        <div className="flex flex-col items-center gap-4 ">
          <FormLogin title="Sign In" />
          <Button size="lg" color="login">
            Sign up
          </Button>
          <Link text="" href="#" link="Forgot your password?"></Link>
          <Separator></Separator>
          <div className="flex flex-col gap-4 py-6">
            <Button
              size="lg"
              color="social"
              icon={{ src: "icons/google.svg", alt: "Imagem do Google" }}
            >
              Login with Google
            </Button>
            <Button
              size="lg"
              color="social"
              icon={{ src: "icons/facebook.svg", alt: "Imagem do Facebook" }}
            >
              Login with Facebook
            </Button>
            <Button
              size="lg"
              color="social"
              icon={{ src: "icons/twitter.svg", alt: "Imagem do Twitter" }}
            >
              Login with Twitter
            </Button>
          </div>
          <Link text="Not a member?" href="#" link="Sign Up Now"></Link>
        </div>
      </div>
    </ContainerScreen>
  );
}
