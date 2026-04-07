export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-xl font-bold tracking-tight text-white">
          BudBot
        </span>
        <a
          href="#"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
}
