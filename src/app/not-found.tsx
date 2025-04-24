import { Sidebar } from "@/components";
import Link from "next/link";

export default function NotFouond() {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex flex-col">
        <Sidebar />

        <main className="ml-64 p-8 text-slate-700 w-[calc(100%-16rem)]">
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <p>
            View <Link href="/dashboard/counter">Home</Link>
          </p>
        </main>
      </div>
    </div>
  );
}
