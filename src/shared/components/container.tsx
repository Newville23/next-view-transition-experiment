import { ReactNode } from "react";

export default function Container({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return (
    <div className="max-w-[740px] mx-auto sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
