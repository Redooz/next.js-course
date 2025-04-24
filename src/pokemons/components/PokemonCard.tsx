import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Link from "next/link";
import { IoHeart } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export function PokemonCard({ pokemon }: Readonly<Props>) {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
            width={96}
            height={96}
            className="h-24 w-24 text-white rounded-full mx-auto"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</p>
          <p className="text-sm text-gray-100">Pokemon ID: {pokemon.id}</p>
          <div className="mt-5">
            <Link href={`/dashboard/pokemon/${pokemon.id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              View Details
            </Link>
          </div>
        </div>
        <div>
          <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex">
            <div className="text-green-600">
              <IoHeart className="w-5 h-5" />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Add to favorites
              </p>
              <p className="text-xs text-gray-500">Add to your favorite list</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}