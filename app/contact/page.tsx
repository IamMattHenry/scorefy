import LandingNavBar from "@/components/landing-components/LandingNavBar.jsx";
import LandingFooter from "@/components/landing-components/LandingFooter.jsx";

export default function Contact() {
  return (
    <>
      <LandingNavBar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold font-anton">Contact</h1>
        <p className="text-xl font-blinker text-white/90">
          If you have any questions or concerns, please contact us at
          contact@scorefy.com
        </p>
      </div>
      <LandingFooter />
    </>
  );
}
