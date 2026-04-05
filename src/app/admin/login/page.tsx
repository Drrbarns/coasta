"use client";

import Image from "next/image";
import Link from "next/link";
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
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_10%,#e8f5ef_0%,#edf2ef_38%,#f3f5f4_100%)] px-4 py-8">
      <div className="pointer-events-none absolute -top-36 -left-24 h-72 w-72 rounded-full bg-[#0f6f4a]/18 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-6 h-80 w-80 rounded-full bg-[#104d35]/14 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center">
        <div className="grid w-full overflow-hidden rounded-[30px] border border-[#c8ddd2] bg-white/90 shadow-[0_30px_70px_rgba(8,57,38,0.18)] backdrop-blur md:grid-cols-[1.05fr_0.95fr]">
          <section className="relative hidden min-h-[620px] md:block">
            <Image
              src="/gen-greenhouse.webp"
              alt="Agrillano protected cropping"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b4a31]/70 via-[#0b4a31]/50 to-[#0b4a31]/82" />
            <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white">
              <div>
                <Image
                  src="/costa-logo-reference.webp"
                  alt="Agrillano"
                  width={220}
                  height={80}
                  className="h-auto w-[170px] [filter:brightness(0)_invert(1)]"
                />
                <p className="mt-7 max-w-[16rem] text-3xl font-semibold leading-[1.02]">
                  Admin console for Agrillano teams
                </p>
              </div>
              <p className="max-w-[22rem] text-sm leading-relaxed text-white/88">
                Access internal tools to manage site content, publishing workflows, and structured navigation safely.
              </p>
            </div>
          </section>

          <section className="p-6 sm:p-8">
            <div className="mx-auto max-w-md">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-[#1b5d42] hover:underline">
                ← Back to website
              </Link>

              <div className="mt-5 rounded-2xl border border-[#d5e5dd] bg-white p-6 shadow-[0_12px_30px_rgba(9,56,38,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6a8478]">Agrillano Platform</p>
                <h1 className="mt-2 font-[family-name:var(--font-inter)] text-[2rem] font-bold tracking-tight text-[#0d452f]">
                  Admin login
                </h1>
                <p className="mt-2 text-sm text-[#5f786c]">
                  Sign in with your Supabase user to manage site content.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#2e4d40]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-11 w-full rounded-xl border border-[#c9dcd1] bg-white px-3 text-[#244536] outline-none focus:border-[#7fb29a] focus:ring-2 focus:ring-[#0f6a45]/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-[#2e4d40]">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="h-11 w-full rounded-xl border border-[#c9dcd1] bg-white px-3 text-[#244536] outline-none focus:border-[#7fb29a] focus:ring-2 focus:ring-[#0f6a45]/15"
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
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
