import { ButtonLogin } from "../ButtonLogin";
import { ButtonSocialMedia } from "../ButtonSocialMedia";
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
      <div className="overflow-x-hidden py-9 h-screen">
        <img src="icons/arrow-left.svg" alt="" className="px-7" />
        <div className="flex flex-col items-center gap-4">
          <FormCreateAccount title="Create Account" />
          <Terms></Terms>
          <ButtonLogin>Sign up</ButtonLogin>
          <Separator></Separator>
          <div className="flex flex-col gap-4 py-6">
            <ButtonSocialMedia
              image="icons/google.svg"
              social="Continue with Google"
            ></ButtonSocialMedia>
            <ButtonSocialMedia
              image="icons/facebook.svg"
              social="Continue with Facebook"
            ></ButtonSocialMedia>
            <ButtonSocialMedia
              image="icons/twitter.svg"
              social="Continue with Twitter"
            ></ButtonSocialMedia>
          </div>
          <Link text="Already a member? Sign In" href="#" link="Sign In"></Link>
        </div>
      </div>
    </ContainerScreen>
  );
}
