import TestimonialCard from "@/components/utils/TestimonialCard";

export default function Testimonial() {
  return (
    <section className="h-screen flex justify-center items-center bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          💬 What Users Are Saying
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
          <TestimonialCard
            text="Got 3 interview calls in a week!"
            author="Sarah A."
          />
          <TestimonialCard
            text="The AI suggestions were scary good!"
            author="Mike T."
          />
          <TestimonialCard
            text="Best resume tool I've ever used."
            author="Nurul W."
          />
        </div>
      </div>
    </section>
  );
}
