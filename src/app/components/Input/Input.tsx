import { Input } from "@/components/ui/input";

interface InputDemoProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
}

export function InputDemo({ className, placeholder }: InputDemoProps) {
  return (
    <Input
      type="text"
      className={`border border-black rounded-lg placeholder:text-slate-950 ${className}`}
      placeholder={placeholder}
    />
  );
}
