import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconType } from "react-icons/lib";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: IconType;
    variant: "default" | "ghost";
    href: string;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const pathName = "usePathname()";
  // const pathName = usePathname();

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
        className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-1 px-2  group-[[data-collapsed=true]]:px-2 ">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    to={link.href}
                    className={cn(
                      buttonVariants({
                        variant: link.href === pathName ? "default" : "nav",
                        size: "sm",
                      }),
                      "justify-start"
                    )}
                  >
                    <link.icon className="h-4 w-4 " color="" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className=" bg-blue-500 text-white rounded-full "
                >
                  {link.title}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={index}
                to={link.href}
                className={cn(
                  buttonVariants({
                    variant: link.href === pathName ? "default" : "nav",
                    size: "sm",
                  }),
                  "justify-start"
                )}
              >
                <link.icon className="mr-2 h-4 w-4" />
                <span
                  className={cn(
                    { hidden: !showLinks },
                    "text-base font-medium"
                  )}
                >
                  {link.title}
                </span>
              </Link>
            )
          )}
        </nav>
      </div>
    </TooltipProvider>
  );
}
