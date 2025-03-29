import Container from "./container";

export default function Header() {
  return (
    <div className="bg-green-400 p-2 w-full">
      <Container>
      <h1 className="text-center text-xl font-semibold dark:text-black">
        ViewTransition
      </h1>
      </Container>
    </div>
  );
}
