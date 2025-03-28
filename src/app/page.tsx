import Link from "next/link";
import { BOOKS } from "@/shared/utils/constants";
import BookCover from "@/shared/components/bookCover";

export default function Home() {
  return (
    <div className="min-h-screen mt-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-3/4 mx-auto sm:px-6 lg:px-8 mb-4 ">
        <ul className="grid grid-cols-1 gap-1 sm:grid-cols-3 text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {BOOKS.map((book) => (
            <Link key={book.id} href={`/book/${book.isbn}`}>
              <BookCover url={`${book.cover_url}/250w`} title={book.title} />
            </Link>
          ))}
        </ul>
      </main>
    </div>
  );
}
