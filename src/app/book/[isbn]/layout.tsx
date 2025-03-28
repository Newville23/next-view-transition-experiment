import Container from "@/shared/components/container";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ViewTransition>
      <Container>
        <Link href={"/"}>
          <div>{"< Back"}</div>
        </Link>
      </Container>
      {children}
    </ViewTransition>
  );
}
