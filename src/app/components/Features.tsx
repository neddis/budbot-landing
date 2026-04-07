const features = [
  {
    emoji: "💬",
    title: "Smart Conversations",
    description:
      "AI-powered chat that understands context, answers questions, and helps you get things done — naturally.",
  },
  {
    emoji: "🧠",
    title: "Always Learning",
    description:
      "BudBot improves over time, adapting to your preferences and getting smarter with every interaction.",
  },
  {
    emoji: "🔌",
    title: "Easy Integration",
    description:
      "Works seamlessly with the tools you already use. Plug in and go — no complex setup required.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Why BudBot?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-700 bg-gray-800 p-8 text-center"
            >
              <span className="text-5xl" role="img" aria-label={feature.title}>
                {feature.emoji}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
