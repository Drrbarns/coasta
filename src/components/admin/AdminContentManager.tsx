"use client";

import { useMemo, useState } from "react";

type ContentRow = {
  id: string;
  key: string;
  value: unknown;
  description: string | null;
  updated_at: string;
};

const starterKeys = [
  "site.meta",
  "navigation.main",
  "navigation.footer",
  "homepage.hero",
  "produce.hero",
  "careers.hero",
  "about.hero",
];

function safeStringify(value: unknown) {
  try {
    return JSON.stringify(value ?? {}, null, 2);
  } catch {
    return "{}";
  }
}

export function AdminContentManager({ initialRows }: { initialRows: ContentRow[] }) {
  const [rows, setRows] = useState<ContentRow[]>(initialRows);
  const [activeKey, setActiveKey] = useState<string>(initialRows[0]?.key ?? starterKeys[0]);
  const [description, setDescription] = useState<string>(initialRows[0]?.description ?? "");
  const [jsonText, setJsonText] = useState<string>(safeStringify(initialRows[0]?.value));
  const [status, setStatus] = useState<string>("");
  const [isSaving, setIsSaving] = useState(false);

  const allKeys = useMemo(() => {
    const keys = rows.map((r) => r.key);
    const merged = new Set([...starterKeys, ...keys]);
    return Array.from(merged).sort();
  }, [rows]);

  function selectKey(key: string) {
    setActiveKey(key);
    const row = rows.find((r) => r.key === key);
    setDescription(row?.description ?? "");
    setJsonText(safeStringify(row?.value ?? {}));
    setStatus("");
  }

  async function handleSave() {
    setStatus("");
    setIsSaving(true);
    try {
      const parsed = JSON.parse(jsonText);
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: activeKey,
          value: parsed,
          description: description || null,
        }),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload.error || "Failed to save content.");

      const saved = payload.data as ContentRow;
      setRows((prev) => {
        const idx = prev.findIndex((r) => r.key === saved.key);
        if (idx === -1) return [saved, ...prev];
        const clone = [...prev];
        clone[idx] = saved;
        return clone;
      });
      setStatus("Saved successfully.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to save.";
      setStatus(message);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="rounded-2xl border border-[#d7e6dd] bg-[#f8fcf9] p-3.5 shadow-sm">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#698176]">Content keys</p>
        <div className="space-y-1">
          {allKeys.map((key) => (
            <button
              type="button"
              key={key}
              onClick={() => selectKey(key)}
              className={`block w-full rounded-xl px-2.5 py-2 text-left text-sm font-medium transition ${
                key === activeKey
                  ? "bg-[#0f6f4a] text-white shadow-sm"
                  : "text-[#244536] hover:bg-[#edf6f1]"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </aside>

      <section className="min-w-0 space-y-3 rounded-2xl border border-[#d7e6dd] bg-white p-4 shadow-sm md:p-5">
        <div>
          <label className="mb-1 block text-sm font-semibold text-[#2b4a3d]">Key</label>
          <input
            value={activeKey}
            onChange={(e) => setActiveKey(e.target.value)}
            className="h-10 w-full rounded-xl border border-[#c9dcd1] px-3 text-sm text-[#244536] outline-none focus:border-[#7fb29a] focus:ring-2 focus:ring-[#0f6a45]/15"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-[#2b4a3d]">Description (optional)</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-10 w-full rounded-xl border border-[#c9dcd1] px-3 text-sm text-[#244536] outline-none focus:border-[#7fb29a] focus:ring-2 focus:ring-[#0f6a45]/15"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-[#2b4a3d]">JSON value</label>
          <textarea
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            rows={20}
            className="w-full rounded-xl border border-[#c9dcd1] p-3 font-mono text-xs text-[#244536] outline-none focus:border-[#7fb29a] focus:ring-2 focus:ring-[#0f6a45]/15"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="rounded-xl bg-[#0f6f4a] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save content"}
          </button>
          {status && <p className="text-sm text-[#60786c]">{status}</p>}
        </div>
      </section>
    </div>
  );
}
