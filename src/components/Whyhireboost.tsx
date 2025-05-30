"use client";

import FeatureCard from "@/components/utils/FeaturesCard";

export default function WhyHireBoost() {
  return (
    <section
      id="whyhireboost"
      className="h-screen flex justify-center items-center"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          🚀 Powered by AI. Designed for Results.
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything you need to create the perfect resume, faster and smarter.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <FeatureCard
            icon="📄"
            title="Smart Resume Builder"
            description="Tailored resumes for every job you apply to."
          />
          <FeatureCard
            icon="🧠"
            title="Real-time Feedback"
            description="Get instant AI suggestions to improve your profile."
          />
          <FeatureCard
            icon="⚡"
            title="Export in 1 Click"
            description="Download in PDF, DOCX, or share a custom URL."
          />
        </div>
      </div>
    </section>
  );
}
