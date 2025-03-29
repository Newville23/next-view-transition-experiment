import { unstable_ViewTransition as ViewTransition } from "react";
import { BOOKS } from "@/shared/utils/constants";
import Container from "@/shared/components/container";
import BookCover from "@/shared/components/bookCover";

export default async function DetailScreen({
  book,
}: {
  book: (typeof BOOKS)[number];
}) {
  return (
    <ViewTransition>
      <div className="py-10">
        <Container>
          <div className="flex justify-center">
            <ViewTransition name={`cover-${book.isbn}`}>
              <BookCover
                url={`${book.cover_url}320w`}
                title={book.title}
                size="md"
              />
            </ViewTransition>
            <div className="metadata flex-3 ml-4">
              <ViewTransition name={`title-${book.isbn}`}>
                <h2 className="text-4xl mb-8">{book.title}</h2>
              </ViewTransition>
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
              <p className="release">Release at: {book.issued}</p>
              <p className="publisher">
                Publisher:{" "}
                {book.publishers.map((publisher, idx) => (
                  <span key={publisher}>
                    {publisher}
                    {idx > 0 && ","}
                  </span>
                ))}
              </p>
              <p className="isbn">ISBN: {book.isbn}</p>
            </div>
          </div>
        </Container>
      </div>
    </ViewTransition>
  );
}
