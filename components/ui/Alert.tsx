import { Blog } from "@/data/blogs";
import { CircleAlert } from "lucide-react";
import React from "react";

type Props = {
  blog: Blog;
};

const Alert = ({ blog }: Props) => {
  return (
    <div
      className={`px-4 py-1 bg-white/40 rounded-md flex gap-2 items-center ${blog.textColor}`}
    >
      <CircleAlert className="size-10" />
      <p className="line-clamp-1">{blog.alert}</p>
    </div>
  );
};

export default Alert;
