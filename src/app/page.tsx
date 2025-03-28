import Link from "next/link";
import { BOOKS } from "@/shared/utils/constants";
import BookCover from "@/shared/components/bookCover";
import Container from "@/shared/components/container";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Home() {
  return (
    <ViewTransition>
      <div className="min-h-screen mt-20 font-[family-name:var(--font-geist-sans)]">
        <Container>
          <ul className="grid grid-cols-1 gap-1 sm:grid-cols-3 text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            {BOOKS.map((book) => (
              <Link key={book.id} href={`/book/${book.isbn}`}>
                <BookCover url={`${book.cover_url}/250w`} title={book.title} />
                <ViewTransition name={`authors-${book.isbn}`}>
                  <p className="authors">
                    by{" "}
                    {book.authors.map((author, idx) => (
                      <span className="text-green-400" key={author}>
                        {author}
                        {idx < book.authors.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </ViewTransition>
              </Link>
            ))}
          </ul>
        </Container>
      </div>
    </ViewTransition>
  );
}
