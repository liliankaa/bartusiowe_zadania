"use client";

import { useState } from "react";
import { useDebounce } from "use-debounce";
import { useQuery } from "react-query";
import { type CharacterSchema } from "~/types/rick-and-morty.types";
import axios from "axios";
import Image from "next/image";

async function querySearch(search: string) {
  try {
    const { data }: { data: CharacterSchema } = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${search}`,
    );
    return { success: data, notFound: false };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return { success: null, notFound: true };
    } else {
      throw new Error("Uga buga 🤡");
    }
  }
}

export default function Page() {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);

  const charactersQuery = useQuery({
    queryKey: ["search", { debouncedSearch }],
    queryFn: () => querySearch(debouncedSearch),
  });

  return (
    <main className="flex h-screen w-screen items-center justify-center p-10">
      <div className="flex h-full w-full flex-col rounded-xl border-2 border-gray-300 md:w-2/3">
        <div className="border-b-2 border-gray-300">
          <input
            className="h-16 w-full rounded-xl text-center outline-none"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="search"
          />
        </div>
        {charactersQuery.isSuccess && charactersQuery.data.success !== null && (
          <div className="flex w-full flex-1 flex-col gap-2 overflow-y-auto overflow-x-hidden p-2">
            {charactersQuery.data?.success?.results.map((value) => (
              <div
                key={value.id}
                className="flex flex-col items-center gap-2 rounded-lg border-2 border-gray-300 p-2 md:flex-row md:p-0"
              >
                <Image
                  src={value.image}
                  alt=""
                  width={150}
                  height={150}
                  className="rounded-md"
                />
                <div className="flex flex-1 items-center justify-center">
                  <p className="text-xl">{value.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {charactersQuery.isSuccess && charactersQuery.data.notFound && (
          <div className="flex flex-1 items-center justify-center p-5 text-gray-400">
            <p>Not found.</p>
          </div>
        )}
        {charactersQuery.isError && (
          <div className="flex flex-1 items-center justify-center p-5 text-red-500">
            <p>Oops! Something went wrong. Please try again later.</p>
          </div>
        )}
        {charactersQuery.isLoading && (
          <div className="flex flex-1 items-center justify-center p-5 text-gray-400">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </main>
  );
}
