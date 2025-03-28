import Container from "@/shared/components/container";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Container>
        <Link href={"/"}>
          <div>{"< Back"}</div>
        </Link>
      </Container>
      {children}
    </div>
  );
}
