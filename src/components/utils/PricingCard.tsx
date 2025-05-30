type PricingCardProps = {
  icon: string;
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

export default function PricingCard({
  icon,
  title,
  price,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col justify-between bg-white border ${
        highlighted ? "border-blue-500 shadow-lg" : "border-gray-200"
      } rounded-xl p-6 w-full max-w-sm transition hover:shadow-md`}
    >
      <div>
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-3xl font-bold text-blue-600 mb-6">{price}</p>
        <ul className="space-y-2 text-left text-gray-600">
          {features.map((feature, idx) => (
            <li key={idx}>• {feature}</li>
          ))}
        </ul>
      </div>

      <button
        className={`mt-6 px-6 py-3 rounded-lg text-white font-medium ${
          highlighted
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-800 hover:bg-gray-900"
        }`}
      >
        {title === "Free" ? "Get Started" : "Choose Plan"}
      </button>
    </div>
  );
}
