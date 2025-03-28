import Image from "next/image";
import { unstable_ViewTransition as ViewTransition } from "react";
export default function BookCover({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  return (
    <ViewTransition name={`cover-${url}`}>
    <div className="mr-4 h-80 w-60 relative">
      <Image
        src={`${url}320w`}
        fill
        alt={title}
        className="object-cover transition-transform filter hover:scale-105 overflow-hidden rounded-r-lg flex-1"
        />
    </div>
    </ViewTransition>
  );
}
