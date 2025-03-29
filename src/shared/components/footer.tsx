import Image from "next/image";
export default function Footer() {
  return (
    <footer className="flex gap-[24px] flex-wrap items-center justify-center text-white/30">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-green-400"
        href="https://motion.dev/blog/reacts-experimental-view-transition-api"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-green-400"
        href="https://github.com/vercel/next-view-transition-example/tree/main"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        More Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-green-400"
        href="https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Nextjs ViewTransition →
      </a>
    </footer>
  );
}
