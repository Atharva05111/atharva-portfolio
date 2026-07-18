"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xgogkegj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" }); // Reset form fields
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-16 rail">
      <div className="grid md:grid-cols-[220px_1fr] gap-10">
        <div className="pl-8">
          <span className="tag bg-note-pink inline-block">Contact here</span>
          <div className="text-2xl my-2 -rotate-6 inline-block">↷</div>
          <p className="text-ink/70 mt-2">
            Have a project idea? Just say <span className="font-700">Hi</span>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
          <label className="block">
            <span className="tag bg-note-pink border border-ink inline-block mb-1">Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={update("name")}
              placeholder="Your name"
              className="w-full bg-transparent border-b-2 border-ink py-2 focus:outline-none focus-ring placeholder:text-ink/30"
            />
          </label>

          <label className="block">
            <span className="tag bg-note-yellow border border-ink inline-block mb-1">
              Your email
            </span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={update("email")}
              placeholder="you@email.com"
              className="w-full bg-transparent border-b-2 border-ink py-2 focus:outline-none focus-ring placeholder:text-ink/30"
            />
          </label>

          <label className="block">
            <span className="tag bg-note-blue border border-ink inline-block mb-1">
              About Project
            </span>
            <input
              type="text"
              name="message"
              required
              value={form.message}
              onChange={update("message")}
              placeholder="I want to discuss you about ......"
              className="w-full bg-transparent border-b-2 border-ink py-2 focus:outline-none focus-ring placeholder:text-ink/30"
            />
          </label>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-block bg-ink text-paper font-medium px-6 py-3 shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all focus-ring disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Send Here"}
            </button>

            {status === "success" && (
              <p className="text-emerald-600 font-medium">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-rose-600 font-medium">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}