import React from "react";
import LogoIcon from "./logoIcon";

type LogoProps = {
  isCollapsed: boolean;
};

const Logo: React.FC<LogoProps> = ({ isCollapsed }) => {
  return (
    <div className="flex items-center justify-start pb-3">
      <div className="flex flex-row gap-4 items-center px-1 ">
        <LogoIcon color="black" />

        <span
          className={`text-2xl font-bold ${
            isCollapsed
              ? "opacity-0"
              : "opacity-100 transition-opacity delay-700"
          }`}
        >
          Frenly
        </span>
      </div>
    </div>
  );
};

export default Logo;
