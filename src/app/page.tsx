import Link from "next/link";
import { BOOKS } from "@/shared/utils/constants";
import BookCover from "@/shared/components/bookCover";
import Container from "@/shared/components/container";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Home() {
  return (
    <ViewTransition>
      <div className="font-[family-name:var(--font-geist-sans)] mb-10">
        <Container>
        <h2 className="text-3xl font-medium text-green-400 my-10">
            Find something to read
          </h2>
          <ul className="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-[repeat(auto-fill,minmax(130px,1fr))] text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            {BOOKS.map((book) => (
              <Link key={book.id} href={`/book/${book.isbn}`}>
                <div className="transition-all relative box-border p-4 hover:bg-green-50/10 rounded-r-lg">
                  <ViewTransition name={`cover-${book.isbn}`}>
                    <BookCover
                      url={`${book.cover_url}/250w`}
                      title={book.title}
                    />
                  </ViewTransition>
                  <div className="absolute top-0 -z-10 opacity-0">
                    <ViewTransition name={`title-${book.isbn}`}>
                      <h2 className="text-4xl mb-8">{book.title}</h2>
                    </ViewTransition>
                  </div>

                  <ViewTransition name={`authors-${book.isbn}`}>
                    <p className="max-w-30 authors overflow-hidden truncate">
                      by{" "}
                      {book.authors.map((author, idx) => (
                        <span className="text-green-400" key={author}>
                          {author}
                          {idx < book.authors.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                  </ViewTransition>
                </div>
              </Link>
            ))}
          </ul>
        </Container>
      </div>
    </ViewTransition>
  );
}
