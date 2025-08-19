import { LoginForm } from "@/components/login-form";
import LandingNavBar from "@/components/landing-components/LandingNavBar.jsx";
import LandingFooter from "@/components/landing-components/LandingFooter.jsx";

export default function Login() {
  return (
    <>
      <LandingNavBar />
      <LoginForm />
      <LandingFooter />
    </>
  );
}
