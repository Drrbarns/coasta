"use client";

import { useState } from "react";
import { AdminEntityManager } from "@/components/admin/AdminEntityManager";

type MediaRow = {
  id: string;
  [key: string]: unknown;
};

export function AdminMediaManager({ initialRows }: { initialRows: MediaRow[] }) {
  const [status, setStatus] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [altText, setAltText] = useState("");
  const [tags, setTags] = useState("");

  async function handleUpload() {
    if (!file) {
      setStatus("Select a file first.");
      return;
    }
    setIsUploading(true);
    setStatus("");
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("altText", altText);
      form.append("tags", tags);
      const res = await fetch("/api/admin/media/upload", { method: "POST", body: form });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload.error || "Upload failed.");
      setStatus("Uploaded successfully. Refresh page to see latest row.");
      setFile(null);
      setAltText("");
      setTags("");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-[#d7e6dd] bg-white p-4 shadow-sm md:p-5">
        <h2 className="text-lg font-semibold text-[#0f4f35]">Upload media</h2>
        <p className="mt-1 text-xs uppercase tracking-wide text-[#6f867b]">Add and tag visual assets</p>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="h-10 rounded-xl border border-[#c9dcd1] px-2.5 text-sm text-[#244536]"
          />
          <input
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
            placeholder="Alt text"
            className="h-10 rounded-xl border border-[#c9dcd1] px-2.5 text-sm text-[#244536]"
          />
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags (comma-separated)"
            className="h-10 rounded-xl border border-[#c9dcd1] px-2.5 text-sm text-[#244536]"
          />
        </div>
        <button
          type="button"
          disabled={isUploading}
          onClick={handleUpload}
          className="mt-3 rounded-xl bg-[#0f6f4a] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 disabled:opacity-60"
        >
          {isUploading ? "Uploading..." : "Upload"}
        </button>
        {status && <p className="mt-2 text-sm text-[#60786c]">{status}</p>}
      </section>

      <AdminEntityManager
        entity="media"
        title="Media library"
        description="Manage uploaded assets and metadata used across pages."
        initialRows={initialRows}
        fields={[
          { key: "name", label: "Name", required: true },
          { key: "alt_text", label: "Alt text" },
          { key: "bucket_path", label: "Bucket path", required: true },
          { key: "public_url", label: "Public URL", required: true },
          { key: "tags", label: "Tags", type: "tags" },
        ]}
      />
    </div>
  );
}

