"use client";

import { useMemo, useState } from "react";

type FieldType = "text" | "textarea" | "number" | "checkbox" | "json" | "select" | "tags";

type FieldConfig = {
  key: string;
  label: string;
  type?: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
};

type RowRecord = {
  id: string;
  [key: string]: unknown;
};

type Props = {
  entity: string;
  title: string;
  description: string;
  fields: FieldConfig[];
  initialRows: RowRecord[];
};

function initialFormState(fields: FieldConfig[]) {
  const state: Record<string, unknown> = {};
  for (const field of fields) {
    if (field.type === "checkbox") state[field.key] = false;
    else if (field.type === "number") state[field.key] = 0;
    else state[field.key] = "";
  }
  return state;
}

function toInputValue(value: unknown, type: FieldType | undefined) {
  if (type === "checkbox") return Boolean(value);
  if (type === "number") return typeof value === "number" ? value : Number(value ?? 0);
  if (type === "json") return typeof value === "string" ? value : JSON.stringify(value ?? {}, null, 2);
  if (type === "tags") return Array.isArray(value) ? value.join(", ") : String(value ?? "");
  return String(value ?? "");
}

function summarizeCellValue(value: unknown) {
  if (value == null) return "—";
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

export function AdminEntityManager({ entity, title, description, fields, initialRows }: Props) {
  const [rows, setRows] = useState<RowRecord[]>(initialRows);
  const [form, setForm] = useState<Record<string, unknown>>(initialFormState(fields));
  const [editingId, setEditingId] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const visibleColumns = useMemo(() => fields.slice(0, Math.min(4, fields.length)), [fields]);

  function resetForm() {
    setForm(initialFormState(fields));
    setEditingId(null);
  }

  function startEdit(row: RowRecord) {
    const next: Record<string, unknown> = {};
    for (const field of fields) {
      next[field.key] = toInputValue(row[field.key], field.type);
    }
    setForm(next);
    setEditingId(row.id);
    setStatus("");
  }

  function parsePayload() {
    const payload: Record<string, unknown> = {};
    for (const field of fields) {
      const raw = form[field.key];
      if (field.type === "number") payload[field.key] = Number(raw ?? 0);
      else if (field.type === "checkbox") payload[field.key] = Boolean(raw);
      else if (field.type === "json") payload[field.key] = JSON.parse(String(raw || "{}"));
      else if (field.type === "tags") {
        payload[field.key] = String(raw ?? "")
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);
      } else payload[field.key] = String(raw ?? "");
    }
    return payload;
  }

  async function saveRow() {
    setStatus("");
    setIsSaving(true);
    try {
      const payload = parsePayload();
      const url = editingId ? `/api/admin/${entity}/${editingId}` : `/api/admin/${entity}`;
      const method = editingId ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed.");

      const saved = data.data as RowRecord;
      setRows((prev) => {
        const idx = prev.findIndex((r) => r.id === saved.id);
        if (idx === -1) return [saved, ...prev];
        const copy = [...prev];
        copy[idx] = saved;
        return copy;
      });
      setStatus(editingId ? "Updated successfully." : "Created successfully.");
      resetForm();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to save.");
    } finally {
      setIsSaving(false);
    }
  }

  async function deleteRow(id: string) {
    if (!confirm("Delete this entry?")) return;
    const res = await fetch(`/api/admin/${entity}/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) {
      setStatus(data.error || "Delete failed.");
      return;
    }
    setRows((prev) => prev.filter((row) => row.id !== id));
    setStatus("Deleted.");
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#d8e7de] bg-[#f9fcfb] p-4 md:p-5">
        <h1 className="font-[family-name:var(--font-inter)] text-[1.7rem] font-bold tracking-tight text-[#0f3e2c] md:text-[2rem]">
          {title}
        </h1>
        <p className="mt-1 text-sm text-[#5f786c]">{description}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_410px]">
        <section className="overflow-hidden rounded-2xl border border-[#d7e6dd] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#f4f9f6]">
                <tr>
                  {visibleColumns.map((field) => (
                    <th
                      key={field.key}
                      className="border-b border-[#d7e6dd] px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-[#688176]"
                    >
                      {field.label}
                    </th>
                  ))}
                  <th className="border-b border-[#d7e6dd] px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-[#688176]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="odd:bg-white even:bg-[#fbfdfc]">
                    {visibleColumns.map((field) => (
                      <td key={field.key} className="border-b border-[#edf3ef] px-3 py-2.5 text-sm text-[#244536]">
                        <span className="line-clamp-2">{summarizeCellValue(row[field.key])}</span>
                      </td>
                    ))}
                    <td className="border-b border-[#edf3ef] px-3 py-2.5">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(row)}
                          className="rounded-lg border border-[#c8dbd0] bg-white px-2.5 py-1 text-xs font-semibold text-[#0f5a3c] hover:bg-[#f1f8f4]"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteRow(row.id)}
                          className="rounded-lg border border-red-200 bg-white px-2.5 py-1 text-xs font-semibold text-red-700 hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={visibleColumns.length + 1} className="px-3 py-10 text-center text-sm text-[#688176]">
                      No entries yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-[#d7e6dd] bg-white p-4 shadow-sm md:p-5">
          <h2 className="text-lg font-semibold text-[#0f4f35]">{editingId ? "Edit entry" : "Create entry"}</h2>
          <p className="mt-1 text-xs uppercase tracking-wide text-[#6f867b]">
            {editingId ? "Updating existing record" : "Create new record"}
          </p>
          <div className="mt-3 space-y-3">
            {fields.map((field) => {
              const type = field.type ?? "text";
              const value = form[field.key];
              return (
                <label key={field.key} className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#61796d]">{field.label}</span>
                  {type === "textarea" && (
                    <textarea
                      rows={4}
                      value={String(value ?? "")}
                      placeholder={field.placeholder}
                      onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
                      className="w-full rounded-xl border border-[#c9dcd1] bg-white p-2.5 text-sm text-[#244536] outline-none focus:border-[#7fb29a] focus:ring-2 focus:ring-[#0f6a45]/15"
                    />
                  )}
                  {type === "json" && (
                    <textarea
                      rows={6}
                      value={String(value ?? "{}")}
                      onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
                      className="w-full rounded-xl border border-[#c9dcd1] bg-white p-2.5 font-mono text-xs text-[#244536] outline-none focus:border-[#7fb29a] focus:ring-2 focus:ring-[#0f6a45]/15"
                    />
                  )}
                  {type === "select" && (
                    <select
                      value={String(value ?? "")}
                      onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
                      className="h-10 w-full rounded-xl border border-[#c9dcd1] bg-white px-2.5 text-sm text-[#244536] outline-none focus:border-[#7fb29a] focus:ring-2 focus:ring-[#0f6a45]/15"
                    >
                      <option value="">Select</option>
                      {(field.options ?? []).map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  {type === "checkbox" && (
                    <input
                      type="checkbox"
                      checked={Boolean(value)}
                      onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.checked }))}
                      className="h-4 w-4 rounded border-[#b5cfc1] text-[#0f6a45] focus:ring-[#0f6a45]/20"
                    />
                  )}
                  {(type === "text" || type === "number" || type === "tags") && (
                    <input
                      type={type === "number" ? "number" : "text"}
                      value={String(value ?? "")}
                      placeholder={field.placeholder}
                      required={field.required}
                      onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
                      className="h-10 w-full rounded-xl border border-[#c9dcd1] bg-white px-2.5 text-sm text-[#244536] outline-none focus:border-[#7fb29a] focus:ring-2 focus:ring-[#0f6a45]/15"
                    />
                  )}
                </label>
              );
            })}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              disabled={isSaving}
              onClick={saveRow}
              className="rounded-xl bg-[#0f6f4a] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 disabled:opacity-60"
            >
              {isSaving ? "Saving..." : editingId ? "Save changes" : "Create"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl border border-[#c8dbd0] bg-white px-4 py-2 text-sm font-semibold text-[#244536] hover:bg-[#f1f8f4]"
              >
                Cancel
              </button>
            )}
          </div>
          {status && <p className="mt-3 text-sm text-[#60786c]">{status}</p>}
        </section>
      </div>
    </div>
  );
}

