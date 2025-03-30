import Image from "next/image";
import { Suspense } from "react";
export default function BookCover({
  url,
  title,
  size = "sm",
}: {
  url: string;
  title: string;
  size?: "sm" | "md";
}) {
  const imgSize = {
    sm: "h-40 w-30",
    md: "h-80 w-60",
  };
  return (
    <div className={`${imgSize[size]} relative`}>
      <Suspense
        fallback={
          <div
            className={`${imgSize[size]} bg-green-400/10 animate-pulse rounded-r-lg`}
          ></div>
        }
      >
        <Image
          src={`${url}50w`}
          fill
          alt={title}
          className="object-cover rounded-r-lg flex-1"
          priority
        />
      </Suspense>
    </div>
  );
}
