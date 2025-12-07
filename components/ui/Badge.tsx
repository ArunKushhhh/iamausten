// components/ui/Badge.tsx
import React from "react";

export type BadgeProps = {
  text: string;
  Icon?: React.ElementType;
  bgColor?: string;
  textColor?: string;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({
  text,
  Icon,
  bgColor = "bg-slate-100",
  textColor = "text-slate-700",
  className = "",
}) => {
  return (
    <div
      role="listitem"
      className={`inline-flex items-center gap-2 px-3 py-2 group-hover:bg-white/20 group-hover:text-white border group-hover:border-white/20 rounded-full whitespace-nowrap duration-300 ${bgColor} ${textColor} ${className}`}
    >
      {Icon ? <Icon className="size-5" aria-hidden /> : null}
      <span className="font-medium leading-none">{text}</span>
    </div>
  );
};

export default Badge;
