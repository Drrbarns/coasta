import { AdminShell } from "@/components/admin/AdminShell";
import { requireSuperAdminPage } from "@/lib/admin/super-admin";

export default async function AdminProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await requireSuperAdminPage();

  return <AdminShell>{children}</AdminShell>;
}
