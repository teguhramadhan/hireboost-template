import PricingCard from "@/components/utils/PricingCard";

export default function Pricing() {
  return (
    <section className="h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          💰 Simple Pricing for Everyone
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <PricingCard
            icon="✅"
            title="Free"
            price="$0"
            features={["1 resume", "Basic feedback"]}
          />
          <PricingCard
            icon="💼"
            title="Pro"
            price="$9/mo"
            features={[
              "Unlimited resumes",
              "Priority AI suggestions",
              "Custom templates",
            ]}
            highlighted
          />
          <PricingCard
            icon="👥"
            title="Team"
            price="$29/mo"
            features={[
              "For recruiters",
              "Team collaboration",
              "Export/share profiles",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
