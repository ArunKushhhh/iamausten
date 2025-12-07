import { CircleAlert } from "lucide-react";
import React from "react";

type Props = {
  text: string;
  textColor: string
};

const Alert = ({ text, textColor = "text-gray-800" }: Props) => {
  return (
    <div className={`px-4 py-1 bg-white/40 rounded-md flex gap-2 items-center ${textColor}`}>
      <CircleAlert className="size-10" />
      <p className="line-clamp-1">{text}</p>
    </div>
  );
};

export default Alert;
