// app/(marketing)/about/page.tsx

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="text-center">
        <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
          About Us
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          We build simple, useful web experiences.
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          Our goal is to create modern websites that are clean, fast, and easy to understand.
          We focus on design, performance, and user experience so visitors can find what they need quickly.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
          <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
          <p className="mt-3 leading-7 text-slate-600">
            To design websites that feel modern, look professional, and communicate clearly.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
          <h2 className="text-xl font-semibold text-slate-900">What We Do</h2>
          <p className="mt-3 leading-7 text-slate-600">
            We build landing pages, business sites, and product pages with a focus on simplicity.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
          <h2 className="text-xl font-semibold text-slate-900">Why It Matters</h2>
          <p className="mt-3 leading-7 text-slate-600">
            A well-designed page helps people trust your brand and take action faster.
          </p>
        </article>
      </section>
    </main>
  );
}