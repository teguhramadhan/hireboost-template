"use client";

// Import Components/utils
import ButtonPrimary from "@/components/utils/ButtonPrimary";
import ButtonSecondary from "@/components/utils/ButtonSecondary";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex justify-center items-center bg-gray-500 text-gray-100"
    >
      <div className="flex flex-col justify-center items-center gap-4 mx-12">
        <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-4xl">
          Craft the Perfect Resume in Seconds with AI
        </h1>
        <p className="mt-2 text-center text-sm md:text-lg lg:text-xl">
          Stand out from the crowd. Generate ATS-friendly, job-ready resumes in
          just a few clicks.
        </p>
        <div className="flex justify-center items-center gap-4 mt-6">
          <ButtonPrimary label="Get Started for Free" />
          <ButtonSecondary label="See Sample" />
        </div>
      </div>
    </section>
  );
}
