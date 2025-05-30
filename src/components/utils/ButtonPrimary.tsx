type Props = {
  label: string;
};

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function ButtonPrimary({ label, className = "" }: ButtonProps) {
  return (
    <button
      className={`min-w-[120px] bg-slate-800 text-slate-200 font-semibold py-4 px-6 rounded-full transition ${className}`}
    >
      {label}
    </button>
  );
}
