import { BOOKS } from "@/shared/utils/constants";
import DetailScreen from "@/modules/book/detail-screen";

export default async function BookDetail({
  params,
}: {
  params: Promise<{ isbn: string }>;
}) {
  const isbn = (await params).isbn;
  const book = BOOKS.find((book) => book.isbn === isbn)!;

  return <DetailScreen book={book} />;
}
