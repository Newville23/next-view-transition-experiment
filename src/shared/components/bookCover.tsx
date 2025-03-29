import Image from "next/image";
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
      <Image
        src={`${url}150w`}
        fill
        alt={title}
        className="object-cover rounded-r-lg flex-1"
        blurDataURL={url}
        placeholder="blur"
      />
    </div>
  );
}
