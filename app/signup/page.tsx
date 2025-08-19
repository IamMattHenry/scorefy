import { SignupForm } from "@/components/signup-form";
import LandingNavBar from "@/components/landing-components/LandingNavBar.jsx";
import LandingFooter from "@/components/landing-components/LandingFooter.jsx";

export default function Signup() {
  return (
    <>
      <LandingNavBar />
      <SignupForm />
      <LandingFooter />
    </>
  );
}
