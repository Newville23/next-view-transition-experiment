import Image from "next/image";

export default function BookCover({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  return (
    <div className="mr-4 h-80 w-60 relative">
      <Image
        src={`${url}320w`}
        fill
        alt={title}
        className="object-cover transition-transform filter hover:scale-105 overflow-hidden rounded-r-lg flex-1"
      />
    </div>
  );
}
