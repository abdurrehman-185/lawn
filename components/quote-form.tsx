import { allServices } from "@/lib/site-data";

type QuoteFormProps = {
  action: (formData: FormData) => void | Promise<void>;
  defaultService?: string;
};

export function QuoteForm({ action, defaultService }: QuoteFormProps) {
  return (
    <form action={action} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
          Name
          <input
            type="text"
            name="name"
            required
            className="rounded-2xl border border-[rgba(23,49,34,0.12)] bg-white px-4 py-3 text-base text-[var(--ink)] outline-none transition focus:border-[var(--forest)]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
          Phone
          <input
            type="tel"
            name="phone"
            required
            className="rounded-2xl border border-[rgba(23,49,34,0.12)] bg-white px-4 py-3 text-base text-[var(--ink)] outline-none transition focus:border-[var(--forest)]"
            placeholder="Best number to reach you"
          />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
          Email
          <input
            type="email"
            name="email"
            required
            className="rounded-2xl border border-[rgba(23,49,34,0.12)] bg-white px-4 py-3 text-base text-[var(--ink)] outline-none transition focus:border-[var(--forest)]"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
          Service needed
          <select
            name="service"
            required
            defaultValue={defaultService ?? ""}
            className="rounded-2xl border border-[rgba(23,49,34,0.12)] bg-white px-4 py-3 text-base text-[var(--ink)] outline-none transition focus:border-[var(--forest)]"
          >
            <option value="" disabled>
              Select a service
            </option>
            {allServices.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
          Property type
          <select
            name="propertyType"
            required
            defaultValue=""
            className="rounded-2xl border border-[rgba(23,49,34,0.12)] bg-white px-4 py-3 text-base text-[var(--ink)] outline-none transition focus:border-[var(--forest)]"
          >
            <option value="" disabled>
              Select a property type
            </option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
          Preferred timing
          <select
            name="timing"
            defaultValue=""
            className="rounded-2xl border border-[rgba(23,49,34,0.12)] bg-white px-4 py-3 text-base text-[var(--ink)] outline-none transition focus:border-[var(--forest)]"
          >
            <option value="" disabled>
              Select timing
            </option>
            <option value="As soon as possible">As soon as possible</option>
            <option value="This week">This week</option>
            <option value="This month">This month</option>
            <option value="Just gathering quotes">Just gathering quotes</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
        Message
        <textarea
          name="message"
          rows={6}
          className="rounded-[1.7rem] border border-[rgba(23,49,34,0.12)] bg-white px-4 py-3 text-base text-[var(--ink)] outline-none transition focus:border-[var(--forest)]"
          placeholder="Tell us about the property, the services you need, and anything helpful to know."
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(18,54,34,0.2)] transition hover:bg-[var(--forest-strong)]"
      >
        Get My Free Quote
      </button>
    </form>
  );
}
