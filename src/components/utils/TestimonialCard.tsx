type TestimonialCardProps = {
  text: string;
  author: string;
};

export default function TestimonialCard({
  text,
  author,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm p-6 max-w-sm">
      <p className="text-gray-700 text-lg mb-4 italic">“{text}”</p>
      <p className="text-sm text-gray-500 text-right">— {author}</p>
    </div>
  );
}
