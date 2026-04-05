"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [unauthorized] = useState(() => {
    if (typeof window === "undefined") return false;
    const params = new URLSearchParams(window.location.search);
    return params.get("error") === "unauthorized";
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    router.replace("/admin");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#e7f4ed_0%,#f4f7f5_36%,#f2f4f3_100%)] px-4">
      <div className="w-full max-w-md rounded-[26px] border border-[#cfe2d8] bg-white/95 p-6 shadow-[0_20px_50px_rgba(10,68,45,0.14)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#698176]">Agrillano Platform</p>
        <h1 className="mt-2 font-[family-name:var(--font-inter)] text-2xl font-bold tracking-tight text-[#0d452f]">
          Admin login
        </h1>
        <p className="mt-2 text-sm text-[#5f786c]">
          Sign in with your Supabase user to manage site content.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#2e4d40]">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-11 w-full rounded-xl border border-[#c9dcd1] px-3 text-[#244536] outline-none focus:border-[#7fb29a] focus:ring-2 focus:ring-[#0f6a45]/15"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-[#2e4d40]">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-11 w-full rounded-xl border border-[#c9dcd1] px-3 text-[#244536] outline-none focus:border-[#7fb29a] focus:ring-2 focus:ring-[#0f6a45]/15"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="h-11 w-full rounded-xl bg-[#0f6f4a] text-sm font-semibold text-white shadow-sm hover:opacity-95 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {(unauthorized || message) && (
          <p className="mt-3 text-sm text-red-600">
            {message || "Your account is not the configured super-admin."}
          </p>
        )}
      </div>
    </main>
  );
}
