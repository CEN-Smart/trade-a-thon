import { cn } from "@/lib/utils";

type HeadingProps = {
  heading: string;
  title: string;
  textColor?: string;
  className?: string;
};
const Heading = ({ heading, title, textColor, className }: HeadingProps) => {
  return (
    <aside className="flex flex-col gap-4">
      <h1 className={cn(` font-bold ${className}`)}>{heading}</h1>
      <p className={` ${textColor} text-sm`}>{title}</p>
    </aside>
  );
};

export default Heading;
