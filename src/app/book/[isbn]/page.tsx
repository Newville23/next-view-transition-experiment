import { unstable_ViewTransition as ViewTransition } from "react";
import { BOOKS } from "@/shared/utils/constants";
import Container from "@/shared/components/container";
import BookCover from "@/shared/components/bookCover";

export default async function BookDetail({
  params,
}: {
  params: Promise<{ isbn: string }>;
}) {
  const isbn = (await params).isbn;
  const book = BOOKS.find((book) => book.isbn === isbn)!;

  return (
    <div className="py-10">
      <Container>
        <div className="flex justify-center">
          <BookCover url={`${book.cover_url}320w`} title={book.title} />
          <div className="metadata basis-xl ml-4">
            <h2 className="text-4xl mb-8">{book.title}</h2>
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
  );
}
