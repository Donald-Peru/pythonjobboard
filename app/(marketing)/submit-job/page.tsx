// app/(marketing)/submit-job/page.tsx

export default function SubmitJobPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <section className="text-center">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Submit a Query
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Share your job opening with the right people.
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          Post your vacancy and help candidates discover new opportunities. Keep the details clear
          so applicants can understand the role quickly.
        </p>
      </section>

      <section className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <form className="grid gap-6">

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Company Name</label>
            <input
              type="text"
              placeholder="e.g. SmartHires"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Number of positions and frequency</label>
            <textarea
              rows={6}
              placeholder="Write a short description of the role..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Your Official Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Business Website</label>
              <input
                type="url"
                placeholder="https://yourcompany.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}