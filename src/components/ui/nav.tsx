import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";

import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: IconType;
    variant: "default" | "ghost";
    toggle: () => void;
    isActive: boolean;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  useEffect(() => {
    if (!isCollapsed) {
      setTimeout(() => {
        setShowLinks(true);
      }, 700);
    } else {
      setShowLinks(false);
    }
  }, [isCollapsed]);

  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2 cursor-pointer"
      >
        <nav className="grid gap-1 px-2  group-[[data-collapsed=true]]:px-2 ">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <div
                    onClick={link.toggle}
                    className="flex justify-start items-center h-9 rounded-md px-3 transition-all duration-300 opacity-50 hover:opacity-100"
                  >
                    <link.icon className="h-6 w-6 " color="" />
                    <span className="sr-only">{link.title}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className=" bg-[#71c4ef] text-white rounded-full "
                >
                  {link.title}
                </TooltipContent>
              </Tooltip>
            ) : (
              <div
                key={index}
                onClick={link.toggle}
                className={`flex justify-start items-center h-9 rounded-md px-3 transition-all duration-300  hover:opacity-75 ${
                  link.isActive ? "opacity-100" : "opacity-50"
                }`}
              >
                <link.icon className="mr-4 h-6 w-6" />
                <span
                  className={cn(
                    { hidden: !showLinks },
                    "text-base font-medium"
                  )}
                >
                  {link.title}
                </span>
              </div>
              // </Link>
            )
          )}
        </nav>
      </div>
    </TooltipProvider>
  );
}
