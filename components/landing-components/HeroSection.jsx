import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-2 w-full h-full">
      {/* First Column */}
      <div className="flex flex-col items-start justify-center pl-20">
        <h1 className="text-7xl font-bold font-bebas text-white tracking-wider">
          <span>Listen to Music.</span>
          <br></br>
          <span className="text-[#00ff25]">Earn Points.</span>
          <br></br>
          <span>Flex your Score.</span>
        </h1>
        <p className="text-xl font-blinker text-white/90">
          Gamify your music experience with Scorefy <br/>- where listening pays off.
          🎧✨
        </p>
        <div className="mt-10 flex space-x-8">
          <Button
            variant={"scorefyPrimary"}
            className="text-lg font-semibold px-8 py-6"
          >
            <Link href="/login" passHref>
              Get Started
            </Link>
          </Button>
          <Button
            variant={"scorefySecondary"}
            className="text-lg font-semibold px-8 py-6"
          >
            <Link href="/about" passHref>
              Learn More
            </Link>
          </Button>
        </div>
      </div>
      {/* Second Column [Album Cards Stacked] */}
      <div className="flex flex-col items-end justify-center pr-20">
        <Image
          src="/landing/hero-pic.png"
          alt="Hero Image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
