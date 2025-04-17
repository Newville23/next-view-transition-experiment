import { unstable_ViewTransition as ViewTransition } from 'react'
import F1CarScene from "@/modules/f1/f1-car-scene/f1-car-scene";
import Container from "@/shared/components/container";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formula 1 - 3D Experience",
  description: "Explore Formula 1 teams and cars in 3D with view transitions",
};

export default async function F1Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-black">
      <header className="bg-black py-4 border-b border-gray-800">
        <Container>
          <div className="mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-red-600 font-bold text-2xl mr-2">F1</span>
                <span className="text-white font-bold text-xl">
                  3D Experience
                </span>
              </div>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="f1/team/mercedes"
                      className="text-white font-medium"
                    >
                      Teams
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Container>
      </header>
      {/* { Main content } */}
      <main>
        <div className="h-screen w-full">
          <div className="h-full relative">
            <F1CarScene />
            <ViewTransition>
              {children}
            </ViewTransition>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>
      </main>
      <footer className="bg-black py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Formula 1 3D Experience. Not affiliated
            with Formula 1.
          </p>
        </div>
      </footer>
    </div>
  );
}
