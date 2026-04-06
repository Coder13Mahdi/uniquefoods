import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a0f1f] text-white">
      <main className="flex-1 pt-24">{children}</main>
    </div>
  );
}

