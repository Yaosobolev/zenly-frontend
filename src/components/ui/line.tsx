import { cn } from "@/lib/utils";

type LineProps = {
  className?: string;
};

export const Line: React.FC<LineProps> = ({ className }) => {
  return <div className={cn(`border w-4/5 mx-auto my-2 `, className)}></div>;
};
