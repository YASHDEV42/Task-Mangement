import { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProfilePage from "@/components/Profile";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await auth();
  const user = session?.user;
  if (!user) redirect("/login");

  return (
    <div className="min-h-screen w-4/5 flex justify-center items-center flex-row mx-auto">
      {children}
    </div>
  );
}
