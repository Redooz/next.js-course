import { ReactNode } from "react";
import { Sidebar } from "../../components";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: Readonly<DashboardLayoutProps>) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex flex-col">
        <Sidebar />

        <main className="ml-64 p-8 text-slate-700 w-[calc(100%-16rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}
