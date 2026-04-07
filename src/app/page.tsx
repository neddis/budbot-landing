import Features from "./components/Features";

export default function Home() {
  return (
    <>
      <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gray-950 px-6 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            BudBot Coming Soon
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Your AI assistant is almost here.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-500"
          >
            Get Early Access
          </a>
        </div>
      </section>
      <Features />
    </>
  );
}
