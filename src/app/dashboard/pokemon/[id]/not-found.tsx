import Link from "next/link";

export default function NotFound() {
  return (
    <div className="ml-64 p-8 text-slate-700 w-[calc(100%-16rem)]">
      <h2>Not Found</h2>
      <p>Pokemon no encontrado</p>
      <p>
        View <Link href="/dashboard/pokemons">Pokemons Home</Link>
      </p>
    </div>
  );
}
