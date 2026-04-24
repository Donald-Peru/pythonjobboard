// app/(marketing)/what-we-do/page.tsx

export default function WhatWeDoPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="text-center">
        <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          What We Do
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Practical solutions for modern businesses.
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          We help businesses build a stronger online presence with clear design, helpful content,
          and pages that are easy to use.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
          <h2 className="text-xl font-semibold text-slate-900">Web Design</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Clean layouts, strong visuals, and a smooth user experience across all devices.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
          <h2 className="text-xl font-semibold text-slate-900">Content Strategy</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Content that explains your value clearly and helps visitors take action.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
          <h2 className="text-xl font-semibold text-slate-900">Growth Support</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Pages and messaging designed to support leads, trust, and conversion.
          </p>
        </article>
      </section>
    </main>
  );
}