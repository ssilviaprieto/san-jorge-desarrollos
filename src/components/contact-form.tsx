"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setFeedback("Completá todos los campos para enviar tu consulta.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "No fue posible enviar el mensaje.");
      }

      setStatus("success");
      setFeedback("Gracias por contactarte. Te responderemos a la brevedad.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Ocurrió un error inesperado al enviar el mensaje.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">Nombre</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
            placeholder="Tu nombre"
            autoComplete="name"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
            placeholder="tu@email.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-700">Mensaje</span>
        <textarea
          name="message"
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          className="min-h-36 w-full rounded-[1.75rem] border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
          placeholder="Contanos qué tipo de urbanización o inversión te interesa."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Enviar consulta"}
        </button>

        {feedback && (
          <p
            className={`text-sm ${
              status === "success" ? "text-teal-700" : "text-rose-600"
            }`}
          >
            {feedback}
          </p>
        )}
      </div>
    </form>
  );
}
