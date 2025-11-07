export const modern = ({ data }: { data: any }) => (
  <div className="font-sans">
    <header className="mb-6">
      <h1 className="text-4xl font-bold text-[var(--primary)]">{data.name || "Your Name"}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">{data.email} • {data.phone}</p>
    </header>

    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b border-[var(--primary)] pb-1 mb-3">Summary</h2>
      <p className="text-gray-700 dark:text-gray-300">{data.summary || "Add your professional summary..."}</p>
    </section>

    <section>
      <h2 className="text-xl font-semibold border-b border-[var(--primary)] pb-1 mb-3">Experience</h2>
      <ul className="space-y-2">
        {(data.experience || []).map((exp: string, i: number) => (
          <li key={i} className="flex">
            <span className="text-[var(--primary)] mr-2">•</span>
            <span>{exp || "Add experience..."}</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);
