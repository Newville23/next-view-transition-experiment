import Container from "@/shared/components/container";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10">
      <Container>
        <Link href={"/"}>
          <div className="transition-all inline rounded-full px-4 py-2.5 text-white/30 font-semibold shadow-sm ring-1 ring-inset ring-text/30 hover:text-green-400 hover:ring-green-400 hover:px-4.5 hover:py-3">
            ← Back
          </div>
        </Link>
      </Container>
      {children}
    </div>
  );
}
