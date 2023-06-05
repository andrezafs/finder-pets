import { Button } from "../Button";
import { ContainerScreen } from "../ContainerScreen";
import { FormCreateAccount } from "../FormCreateAccount";
import { HomeBackground } from "../HomeBackgound";
import { Link } from "../Link";
import { Separator } from "../Separator";
import { Terms } from "../Terms";

export function InitialSignUpScreen() {
  return (
    <ContainerScreen>
      <HomeBackground></HomeBackground>
      <div className="overflow-x-hidden py-8 h-screen">
        <img src="icons/arrow-left.svg" alt="" className="px-7" />
        <div className="flex flex-col items-center gap-4">
          <FormCreateAccount title="Create Account" />
          <Terms></Terms>
          <Button size="lg" color="login">
            Sign In
          </Button>
          <Separator></Separator>
          <div className="flex flex-col gap-4 py-6">
            <Button
              size="lg"
              color="social"
              icon={{ src: "icons/google.svg", alt: "Imagem do Google" }}
            >
              Continue With Google
            </Button>

            <Button
              size="lg"
              color="social"
              icon={{ src: "icons/facebook.svg", alt: "Imagem do Facebook" }}
            >
              Continue With Facebook
            </Button>

            <Button
              size="lg"
              color="social"
              icon={{ src: "icons/twitter.svg", alt: "Imagem do Twitter" }}
            >
              Continue With Twitter
            </Button>
          </div>
          <Link text="Already a member? Sign In" href="#" link="Sign In"></Link>
        </div>
      </div>
    </ContainerScreen>
  );
}
