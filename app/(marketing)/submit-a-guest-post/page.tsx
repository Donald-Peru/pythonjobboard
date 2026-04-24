// app/(marketing)/guest-post/page.tsx

export default function GuestPostPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="text-center">
        <span className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          Publish a Guest Post
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Share your ideas with our audience.
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          We welcome thoughtful guest posts that bring value, insights, and practical knowledge
          to our readers.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Write Something Useful</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Focus on content that helps readers learn, solve a problem, or make a better decision.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Keep It Clear</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Use a simple structure, short paragraphs, and a direct message so it is easy to read.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Send It To Us</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Email us your topic idea or draft and we’ll review it for publication.
          </p>
        </article>
      </section>

      <section className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Mail to Us</h2>
        <p className="mt-3 text-slate-600">
          Click below to open your email app and send your guest post pitch.
        </p>

        <a
          href="mailto:sakibabdurrahman403@gmail.com"
          className="mt-6 inline-flex items-center rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
        >
          Mail to Us
        </a>
      </section>
    </main>
  );
}