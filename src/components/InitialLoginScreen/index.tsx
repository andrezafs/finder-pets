import { ButtonLogin } from "../ButtonLogin";
import { ButtonSocialMedia } from "../ButtonSocialMedia";
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
        <div className="flex flex-col items-center gap-4">
          <FormLogin title="Sign In" />
          <ButtonLogin>Sign up</ButtonLogin>
          <Link text="" href="#" link="Forgot your password?"></Link>
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
          <Link text="Not a member?" href="#" link="Sign Up Now"></Link>
        </div>
      </div>
    </ContainerScreen>
  );
}
